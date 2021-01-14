require("dotenv").config();
/* ---------------Your Api Access Key --------------------- */
/* -------------------------------------------------------- */
var ApiKey = process.env.SMS_Api_Key ;
/* -------------------------------------------------------- */

var http = require("https");
var querystring = require("querystring");

function sms() {
  var options = {
    host: "sapi.itnewsletter.co.il",
    port: 443,
    path: "/webservices/WsSMS.asmx",
    method: "POST",
  };

  this.sendSms = function (number, text) {
    var data =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
      "<soap12:Body>" +
      '<sendSmsToRecipients xmlns="apiGlobalSms">' +
      "<ApiKey>" +
      ApiKey +
      "</ApiKey>" +
      "<txtOriginator>DolevPort</txtOriginator>" +
      "<destinations>" +
      number +
      "</destinations>" +
      "<txtSMSmessage>" +
      text +
      "</txtSMSmessage>" +
      "<dteToDeliver></dteToDeliver>" +
      "<txtAddInf>jsnodetest</txtAddInf>" +
      "</sendSmsToRecipients>" +
      "</soap12:Body>" +
      "</soap12:Envelope>";

    options.headers = {
      "Content-Type": "text/xml; charset=utf-8",
      "Content-Length": Buffer.byteLength(data),
      SOAPAction: "apiGlobalSms/sendSmsToRecipients",
    };

    console.log("data :" + data);

    console.log("data length :" + Buffer.byteLength(data));

    var req = http.request(options, function (res) {
      //console.log('headers:\n' + JSON.stringify(res.headers));
      //console.log('status:\n' + JSON.stringify(res.statusCode));

      res.setEncoding("utf8");
      res.on("data", function (chunk) {
        console.log("body:\n" + chunk);

        //******parse results***************************************
        // run as administrator
        // npm install xmlparser - IMPORTANT !
        var xml2json = require("xmlparser");
        var xml = chunk;

        xml = xml.substr(
          xml.indexOf("<sendSmsToRecipientsResponse"),
          xml.indexOf("</sendSmsToRecipientsResponse") -
            xml.indexOf("<sendSmsToRecipientsResponse")
        );
        console.log(xml);
        var json = xml2json.parser(xml);
        console.log(
          "cost: " + json.sendSmsToRecipientsResponse.sendSmsToRecipientsResult
        );
      });
    });

    req.on("error", function (e) {
      console.log("problem with request: " + e.message);
    });

    console.log("data :" + data);
    req.write(data);
    req.end();
  };
}

module.exports = sms;

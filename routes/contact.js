const {
  main: email_for_customer_function,
  second: email_for_dolev_function,
} = require("./email_for_customer");
const sms_function = require("./sms_function");
const nodemailer = require("nodemailer");
let router = require("express").Router();

router.post("/email", async (req, res) => {
  try {
    console.log(req.body);
    let { name, company, email, phone, message } = req.body;
    if (!name) {
      name = "Name Not Specified";
    }
    if (!company) {
      company = "Company Not Specified";
    }
    if (!message) {
      message = "Message Not Specified";
    }
    await email_for_customer_function(name, company, email, phone, message);
    await email_for_dolev_function(name, company, email, phone, message);
    res.json({ msg: "email sent seccsessfully", err: false });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/sms", async (req, res) => {
  try {
    const { phone_number } = req.body;
    console.log(phone_number);
    if (/^(05)\d{8}/.test(phone_number)) {
      const sms = new sms_function();
      const msg = `
תודה שפנית אליי , אחזור אליך בקרוב 
  דולב דובלון`;
      sms.sendSms(phone_number, msg);
      res.json({ msg: "SMS send seccessfully to", err: false });
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;

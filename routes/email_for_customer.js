const html_for_customer = require("./html_for_customer_email");
require("dotenv").config();
// const portfolioEmail = process.env.PORTFOLIO_EMAIL;
// const portfolioPassword = process.env.PORTFOLIO_PASSWORD;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// async..await is not allowed in global scope, must use a wrapper
const main = async (
  CustomerName,
  CustomerCompany,
  CustomerEmail,
  CustomerPhone,
  CustomerMessage
) => {
  // const html_Email = await html_for_customer(
  //   CustomerName,
  //   CustomerCompany,
  //   CustomerEmail,
  //   CustomerPhone,
  //   CustomerMessage
  // );

  const msg = {
    to: CustomerEmail, // Change to your recipient
    from: "dolev146@gmail.com", // Change to your verified sender
    // subject: "Sending with SendGrid is Fun",
    // text: "and easy to do anywhere, even with Node.js",
    // html: html_Email,
    templateId: "d-744933d83f10400d8bd6ba13b7a16dce",
    dynamic_template_data: {
      CustomerName,
      CustomerCompany,
      CustomerEmail,
      CustomerPhone,
      CustomerMessage,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

// async..await is not allowed in global scope, must use a wrapper
const second = async (
  CustomerName,
  CustomerCompany,
  CustomerEmail,
  CustomerPhone,
  CustomerMessage
) => {
  const html_Email = await html_for_customer(
    CustomerName,
    CustomerCompany,
    CustomerEmail,
    CustomerPhone,
    CustomerMessage
  );

  const msg = {
    to: "dolev146@gmail.com", // Change to your recipient
    from: "dolev146@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: html_Email,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

// async function getHtml() {
//   const html_Email = await html_for_customer(
//     CustomerName,
//     CustomerCompany,
//     CustomerEmail,
//     CustomerPhone,
//     CustomerMessage
//   );
//     return html_Email;
// }

// // async..await is not allowed in global scope, must use a wrapper
// const main = async (
//   CustomerName,
//   CustomerCompany,
//   CustomerEmail,
//   CustomerPhone,
//   CustomerMessage
// ) => {
//   try {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: portfolioEmail,
//         pass: portfolioPassword,
//       },
//     });

//     const html_Email = await html_for_customer(
//       CustomerName,
//       CustomerCompany,
//       CustomerEmail,
//       CustomerPhone,
//       CustomerMessage
//     );

//     const mailOptions = {
//       from: "dolev.portfolio@gmail.com",
//       to: `${CustomerEmail}`,
//       subject: "I will contact u soon, Dolev :)",
//       html: html_Email,
//       attachments: [
//         {
//           filename: "D.png",
//           path: __dirname + "/D.png",
//           cid: "d",
//         },
//       ],
//     };

//     // send mail with defined transport object
//     let info = await transporter.sendMail(mailOptions, (error, msg) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + msg.response);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// // async..await is not allowed in global scope, must use a wrapper
// const second = async (
//   CustomerName,
//   CustomerCompany,
//   CustomerEmail,
//   CustomerPhone,
//   CustomerMessage
// ) => {
//   try {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "dolev.portfolio@gmail.com",
//         pass: "Sb9703922",
//       },
//     });

//     const html_Email = await html_for_customer(
//       CustomerName,
//       CustomerCompany,
//       CustomerEmail,
//       CustomerPhone,
//       CustomerMessage
//     );

//     const mailOptions = {
//       from: "dolev.portfolio@gmail.com",
//       to: "dolev146@gmail.com",
//       subject: "Someone tried to Contact u From your website!",
//       html: html_Email,
//       attachments: [
//         {
//           filename: "D.png",
//           path: __dirname + "/D.png",
//           cid: "d",
//         },
//       ],
//     };

//     // send mail with defined transport object
//     let info = await transporter.sendMail(mailOptions, (error, msg) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + msg.response);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = { main, second };

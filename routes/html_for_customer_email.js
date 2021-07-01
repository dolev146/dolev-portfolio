
const  html = (
  CustomerName,
  CustomerCompany,
  CustomerEmail,
  CustomerPhone,
  CustomerMessage
) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
   img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transform: translateX(-10vw);
}
.content-wrapper {
  min-height: calc(100vh - 20px);
}
body {
  margin: auto;
  width: 80%;
}

#the-content {
  background-color: rgba(135, 248, 195, 0.4);
  padding: 2%;
  margin-bottom: 2%;
  line-height: 1.5rem;
}

#main-footer {
  text-align: center;
  padding: 1rem;
  background: #152ebb;
  color: white;
  height: 20px;
}

   </style>
</head>

<body>
    <div class="content-wrapper">
        <header>
            <img src="D.png" alt="logo" height="5%">
            <h1>Thank u For Reaching out!</h1>
        </header>
        <main>
            <div class="content">
                <p>I will Contact you As Soon As possible !</p>
                <p>this is my number if you want to contact me quickly :<a href="tel:+972505884960" > +972-50-588-4960 </a></p>
                <p> you can also reach me on e-mail : dolev146@gmail.com</p>
            </div>
            <p id="append-content-here">This is the information i received from you</p>
            <div id="the-content">
                <p>Your Name: ${CustomerName} </p>
                <p>Your Company: ${CustomerCompany}</p>
                <p>Your Email: ${CustomerEmail} </p>
                <p>Your Phone: ${CustomerPhone}</p>
                <p>Your Message: ${CustomerMessage} </p>
            </div>

        </main>
    </div>


    <footer id="main-footer">
      Dolev Dublon Copytights &copy; 2021
    </footer>
</body>

</html>
`;
};

module.exports = html;

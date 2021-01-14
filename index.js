// imports
const express = require("express");
const path = require('path')


const app = express();



// mw
app.use(express.json())

app.use("/api/contact", require("./routes/contact"));

app.use("/", express.static(__dirname + "./dist"));

app.get("/api", async (req, res) => {
  console.log('dolev')
  res.json({msg:'dolev'})
})

const port = process.env.PORT || 80;

// listening
app.listen(port, () => {
  console.log(`up and running on ${port}`);
});
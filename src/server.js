const express = require('express');
var app = express(); 
const nodemailer = require('nodemailer');
const cors = require('cors');
const { ButtonDropdown } = require('reactstrap');
require("dotenv").config();

app.listen(5877, () => {
  console.log(`nodemailerProject is listening at http://localhost:${5877}`)
})

const transporter = nodemailer.createTransport({
    //host: "gen-z-project.org", //replace with your email provider // gmail.com
    host: "brown.edu", //replace with your email provider // gmail.com
    port: 5877,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
});

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});
   
app.post('/send', (req, res, next) => {
  console.log(message);
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      //to: maggie@gen-z-project.org, // receiver email,
      to: yingzhe_guo, // receiver email,
      subject: subject,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      console.log("SENT")
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
})
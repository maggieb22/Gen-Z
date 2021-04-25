var app = express(); 
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { ButtonDropdown } = require('reactstrap');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    //host: "gen-z-project.org", //replace with your email provider // gmail.com
    host: "brown.edu", //replace with your email provider // gmail.com
    port: 587,
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
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
  
    var mail = {
      //to: maggie@gen-z-project.org, // receiver email,
      to: sophia_liu@brown.edu, // receiver email,
      subject: subject,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
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
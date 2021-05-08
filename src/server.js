const express = require('express');
const router = express.Router(); 
const nodemailer = require('nodemailer');
const cors = require('cors');
const { ButtonDropdown } = require('reactstrap');
require("dotenv").config();

console.log(process.env.EMAIL);
const transporter = nodemailer.createTransport({
    //host: "gen-z-project.org", //replace with your email provider // gmail.com
    host: "brown.edu", //replace with your email provider // gmail.com
    port: 5877,
    auth: {
      user: process.env.EMAIL, // need to set process.env.EMAIL/PASSWORD
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
   
router.post('/send', (req, res, next) => {
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message

    var mail = {
      //to: maggie@gen-z-project.org, // receiver email,
      to: 'yingzhe_guo', // receiver email,
      subject: subject,
      text: message
    }
    console.log(message);
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

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5877)
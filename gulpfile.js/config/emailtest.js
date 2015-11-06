'use strict';

var config = require('./');
// Password stored in non-tracked file
var emailConfig = require('../../email-config');

module.exports = {
  src: config.publicDirectory + '/index.html',

  options: {

    encodeSpecialChars: true,

    litmus : {
      // Optional, defaults to title of email or yyyy-mm-dd if <title> and options.subject not set
      subject : "Email Subject",

      // Litmus username
      username : 'username',

      // Litmus password
      password : 'password',

      // Url to your Litmus account
      url : 'https://yoursite.litmus.com',

      // Email clients to test for. Find them at http://yoursite.litmus.com/emails/clients.xml
      // The <application_code> tags contain the name e.g. Gmail Chrome: <application_code> chromegmailnew </application_code>
      applications : ['gmailnew']
    },


    emailTest : {
      // Your Email
      email : emailConfig.user,

      // Your email Subject
      subject : "Email Subject",

      // Optional
      transport: {
        type: 'SMTP',
        options: {
          service: 'Gmail',
          auth: {
            user: emailConfig.user,
            pass: emailConfig.pass
          }
        }
      }


    }
  }
};

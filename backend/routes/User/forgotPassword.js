// import crypto from 'crypto';
// import User from '../config/db.config';

// require('dotenv').config();

// const nodemailer = require('nodemailer');

// module.exports = (app) => {
//   app.post('/forgotPassword', (req, res) => {
//     if (req.body.phone === '') {
//       res.status(400).send('phone required');
//     }
//     console.error(req.body.phone);
//     User.findOne({
//       where: {
//         phone: req.body.phone,
//       },
//     }).then((user) => {
//       if (user === null) {
//         console.error('email not in database');
//         res.status(403).send('email not in db');
//       } else {
//         const token = crypto.randomBytes(20).toString('hex');
//         user.update({
//           resetPasswordToken: token,
//           resetPasswordExpires: Date.now() + 360000,
//         });

//         // const transporter = nodemailer.createTransport({
//         //   service: 'gmail',
//         //   auth: {
//         //     user: `${process.env.EMAIL_ADDRESS}`,
//         //     pass: `${process.env.EMAIL_PASSWORD}`,
//         //   },
//         // });

//         // const mailOptions = {
//         //   from: 'mySqlDemoEmail@gmail.com',
//         //   to: `${user.email}`,
//         //   subject: 'Link To Reset Password',
//         //   text:
//         //     'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
//         //     + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
//         //     + `http://localhost:3031/reset/${token}\n\n`
//         //     + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
//         // };

//         console.log('sending sms');

//         transporter.sendMail(mailOptions, (err, response) => {
//           if (err) {
//             console.error('there was an error: ', err);
//           } else {
//             console.log('here is the res: ', response);
//             res.status(200).json('recovery sms sent');
//           }
//         });
//       }
//     });
//   });
// };
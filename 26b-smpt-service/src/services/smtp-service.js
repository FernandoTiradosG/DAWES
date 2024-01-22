import nodemailer from 'nodemailer';

let transporter = null;

export function init(config) {
  const smtpConfig = {
    host: config.host,
    port: config.port,
    secure: config.secure,
  }

  if (config.user){
    smtpConfig.auth = {
      user: config.user,
      pass: config.pass,
    };
  }

  transporter = nodemailer.createTransport(smtpConfig);

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("SMTP server ready");
    }
  });
}

export async function send(mailOptions) {
  return transporter.sendMail({
    from:transporter.option.auth.user,
    ...mailOptions
  });
};

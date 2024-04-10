import { mailOptions, transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
  // console.log(req.body)
  if (req.method === 'POST') {
    const data = req.body
    if (
      !data.email ||
      !data.firstName ||
      !data.lastName ||
      !data.phoneNumber ||
      !data.country ||
      !data.enquieries
    ) {
      return res.status(400).json({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test email",
        html: "<h1>Test title</h1><p>Test paragraph</p>"
      })
      console.log('Email sent successfully')
      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.log("error sending email:", error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
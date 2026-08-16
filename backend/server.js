import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:5173', 'https://www.ishakulam.com', 'https://ishakulam.com']
}));
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'this.is.lokesh.pawalia@gmail.com', // Where you want to receive the emails
      replyTo: email, // So you can reply directly to the person who filled out the form
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from the Ishakulam website contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to this.is.lokesh.pawalia@gmail.com');

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

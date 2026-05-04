import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Twilio helper
  const sendSMS = async (name: string, email: string, message: string) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.TWILIO_PHONE_NUMBER;
    const toPhone = process.env.MY_PHONE_NUMBER || "0556824948";

    if (!accountSid || !authToken || !fromPhone) {
      throw new Error("Twilio credentials are not configured");
    }

    const client = twilio(accountSid, authToken);
    const body = `New Message from Portfolio!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    return client.messages.create({
      body: body,
      from: fromPhone,
      to: toPhone.startsWith('+') ? toPhone : `+233${toPhone.replace(/^0/, '')}`
    });
  };

  // API Contact Route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      await sendSMS(name, email, message);
      res.status(200).json({ success: true, message: "Message sent via SMS!" });
    } catch (error: any) {
      console.error("SMS Error:", error);
      res.status(500).json({ 
        error: "Failed to send message", 
        details: error.message 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

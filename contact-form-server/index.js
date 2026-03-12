import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import contactRoute from './routes/contact.js'

const app = express()
const isProd = process.env.NODE_ENV === "production";

const allowedOrigins = isProd
  ? [
      "https://marborz.one",
      "https://www.marborz.one",
    ]
  : [
      "https://marborz.one",
      "https://www.marborz.one",
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json({limit: "10kb"}))
app.use("/api/contact", contactRoute)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


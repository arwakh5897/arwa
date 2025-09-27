// backend/server.js
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection String (apna URI paste karo)
const uri = "mongodb+srv://za735232_db_user:Zain6970@contact-cluster.uovpomi.mongodb.net/?retryWrites=true&w=majority&appName=contact-cluster";
const client = new MongoClient(uri);

let contacts;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");
    const database = client.db("portfolioDB");
    contacts = database.collection("contacts");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
  }
}
connectDB();

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const result = await contacts.insertOne({ name, email, message, createdAt: new Date() });
    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const data = await contacts.find().toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

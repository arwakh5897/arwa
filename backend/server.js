import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Replace with your MongoDB Atlas connection string
const uri = "mongodb+srv://za735232_db_user:Zain6970@contact-cluster.uovpomi.mongodb.net/?retryWrites=true&w=majority&appName=contact-cluster";
const client = new MongoClient(uri);

let db, contactsCollection;

// 🚀 Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db("portfolioDB"); // your database
    contactsCollection = db.collection("contacts"); // your collection
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
}
connectDB();

// 📌 Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running!");
});

// 📌 Save new contact
app.post("/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const result = await contactsCollection.insertOne({ name, email, message });
    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("❌ POST /contacts error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 📌 Get all contacts
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await contactsCollection.find().toArray();
    res.json(contacts);
  } catch (err) {
    console.error("❌ GET /contacts error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🚀 Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

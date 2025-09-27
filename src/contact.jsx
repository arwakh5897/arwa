import { MongoClient } from "mongodb";

// Initialize MongoDB client
let client;
let clientPromise;

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ MONGODB_URI is not set");
  throw new Error("MONGODB_URI environment variable is not set");
}

if (!client) {
  console.log("🔌 Initializing MongoDB client");
  client = new MongoClient(uri);
  clientPromise = client.connect().then(() => {
    console.log("✅ MongoDB client connected");
    return client;
  }).catch(err => {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  });
}

export default async function handler(req, res) {
  // Set CORS headers before any processing
  res.setHeader("Access-Control-Allow-Origin", "https://portfolio-eosin-one-91.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    console.log("🔄 Handling OPTIONS request");
    return res.status(200).end();
  }

  try {
    console.log("🔍 Connecting to MongoDB...");
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("contacts");
    console.log("✅ Connected to portfolio.contacts");

    if (req.method === "POST") {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        console.warn("⚠️ Missing required fields:", { name, email, message });
        return res.status(400).json({ error: "Missing required fields" });
      }
      console.log("📝 Inserting contact:", { name, email, message });
      const result = await collection.insertOne({ name, email, message, createdAt: new Date() });
      console.log("✅ Inserted contact with ID:", result.insertedId);
      return res.status(201).json({ success: true, id: result.insertedId });
    }

    if (req.method === "GET") {
      console.log("📚 Fetching all contacts");
      const contacts = await collection.find().toArray();
      console.log("✅ Fetched contacts:", contacts.length);
      return res.status(200).json(contacts);
    }

    console.warn("⚠️ Method not allowed:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("❌ Server error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
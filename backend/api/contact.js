import { MongoClient } from "mongodb";

// Initialize MongoDB client outside the handler to reuse connection
let client;
let clientPromise;

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set");
}

if (!client) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://portfolio-eosin-one-91.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("contacts");

    if (req.method === "POST") {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const result = await collection.insertOne({ name, email, message, createdAt: new Date() });
      return res.status(201).json({ success: true, id: result.insertedId });
    }

    if (req.method === "GET") {
      const contacts = await collection.find().toArray();
      return res.status(200).json(contacts);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ error: "Server error" });
  } finally {
    // Avoid closing the client in serverless to reuse connection
    // await client.close(); // Uncomment if running in non-serverless environment
  }
}
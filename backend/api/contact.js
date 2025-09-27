import { MongoClient } from "mongodb";

const uri = "mongodb+srv://za735232_db_user:Zain6970@contact-cluster.uovpomi.mongodb.net/?retryWrites=true&w=majority&appName=contact-cluster";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  // ✅ Always set CORS headers
  res.setHeader("Access-Control-Allow-Origin",  "https://portfolio-eosin-one-91.vercel.app"); // 👈 or your frontend domain
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle OPTIONS (CORS preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await client.connect();
    const db = client.db("portfolio");
    const collection = db.collection("contacts");

    if (req.method === "POST") {
      const { name, email, message } = req.body;
      const result = await collection.insertOne({ name, email, message });
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
  }
}

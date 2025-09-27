import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; // ✅ environment variable use karo
const client = new MongoClient(uri);
let db, contactsCollection;

async function initDB() {
  if (!db) {
    await client.connect();
    db = client.db("portfolioDB");
    contactsCollection = db.collection("contacts");
  }
}

export default async function handler(req, res) {
  await initDB();

  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }
    const result = await contactsCollection.insertOne({ name, email, message });
    return res.status(201).json({ success: true, id: result.insertedId });
  }

  if (req.method === "GET") {
    const contacts = await contactsCollection.find().toArray();
    return res.status(200).json(contacts);
  }

  res.status(405).json({ error: "Method not allowed" });
}

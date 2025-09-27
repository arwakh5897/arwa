// index.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://za735232_db_user:Zain6970@contact-cluster.uovpomi.mongodb.net/?retryWrites=true&w=majority&appName=contact-cluster";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");

    const db = client.db("portfolioDB"); 
    const contacts = db.collection("contacts");

    // CREATE
    const newContact = {
      name: "Usman",
      email: "zain@example.com",
      message: "Hello from MongoDB CRUD Im here!"
    };
    const insertResult = await contacts.insertOne(newContact);
    console.log("Inserted:", insertResult.insertedId);

    // READ
    const allContacts = await contacts.find().toArray();
    console.log("📖 All Contacts:", allContacts);

    // UPDATE
    const updateResult = await contacts.updateOne(
      { email: "zain@example.com" },
      { $set: { message: "Updated message from CRUD script" } }
    );
    console.log("My Updated:", updateResult.modifiedCount);

    // DELETE
    const deleteResult = await contacts.deleteOne({ name: "Zain" });
    console.log("My Deleted:", deleteResult.deletedCount);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection Closed");
  }
}

run();

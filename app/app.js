const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://atlas-sql-64da9c3c96f9af6535f8d3c2-ii1av.a.query.mongodb.net/backen_django?ssl=true&authSource=admin";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Use the client to interact with your database
    const db = client.db("backen_django");
    const collection = db.collection("Customer");

    // Perform a sample operation
    const result = await collection.insertOne({ name: "Summi Doe" });
    console.log("Document inserted:", result.insertedId);

  } finally {
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}

main().catch(console.error);

import { MongoClient } from "mongodb";

let db;
if (!db) {
  const mongoClient = new MongoClient("mongodb://localhost:27017/local");
  const clientPromise = await mongoClient.connect();
  db = clientPromise.db();
}

export default db;

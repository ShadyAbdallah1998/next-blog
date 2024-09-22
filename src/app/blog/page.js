import React from "react";
import { MongoClient } from "mongodb";
import Card from "../components/Card";

async function Blog() {
  const mongoClient = new MongoClient("mongodb://localhost:27017/local");
  const clientPromise = await mongoClient.connect();
  const db = clientPromise.db();
  const posts = await db.collection("posts").find().toArray();
  console.log(posts);
  return (
    <div className="grid grid-cols-4 gap-5 m-12">
      {posts.map((post) => (
        <Card title={post.title} body={post.body} id={post.id} key={post.id}>
          {post.title}
        </Card>
      ))}
    </div>
  );
}

export default Blog;

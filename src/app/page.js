import React from "react";
import Card from "./components/Card";
import getPosts from "./lib/getPosts";

async function Blog() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="grid grid-cols-4 gap-5 m-12">
      {posts.map((post) => (
        <Card
          title={post.title}
          body={post.body}
          id={post.id}
          key={post.id}
          image={post.image}
        >
          {post.title}
        </Card>
      ))}
    </div>
  );
}

export default Blog;

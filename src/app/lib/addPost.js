import db from "./db";

const addPost = async (body) => {
  db.collection("posts").insertOne(body);
};

export default addPost;

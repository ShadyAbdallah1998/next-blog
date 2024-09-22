import db from "../lib/db";

const getPosts = async () => {
  return await db.collection("posts").find().toArray();
};
export default getPosts;

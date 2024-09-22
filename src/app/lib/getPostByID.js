import db from "../lib/db";

const getPostByID = async (id) => {
  return await db.collection("posts").findOne({ id });
};
export default getPostByID;

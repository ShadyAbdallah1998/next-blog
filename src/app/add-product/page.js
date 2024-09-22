import React from "react";
import addPost from "../lib/addPost";
import { v2 as cloudinary } from "cloudinary";
import getPosts from "../lib/getPosts";
import { redirect } from "next/navigation";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const posts = await getPosts();

export default async function AddPost({ searchParams }) {
  const create = async (formData) => {
    "use server";

    const file = formData.get("image");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { tags: ["nextjs-server-actions-upload"] },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });

    const id = posts.length + 1;
    const image = result.secure_url;
    const name = formData.get("name");
    const body = formData.get("body");

    // Add the post
    await addPost({ name, body, image, id });

    // Redirect with a success query parameter
    redirect("/add-product?success=true");
  };

  // Check for success query parameter
  const successMessage =
    searchParams?.success === "true"
      ? "Product added successfully. Check Blog!"
      : null;

  return (
    <div>
      <form
        action={create}
        className="flex flex-col w-96 mt-20 bg-gray-100 p-6 rounded-2xl gap-4 shadow-md mx-auto"
      >
        <label className="text-lg font-semibold">Title</label>
        <input
          className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="title"
        />
        <label className="text-lg font-semibold">Body</label>
        <textarea
          className="rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="body"
        />
        <label className="text-lg font-semibold">Image</label>
        <input
          className="rounded-lg p-3 border border-gray-300 focus:outline-none"
          type="file"
          name="image"
        />
        <button className="bg-blue-600 text-white rounded-lg mt-4 py-2 w-full transition-transform transform hover:bg-blue-500 active:bg-blue-700 hover:scale-105 focus:outline-none">
          Submit
        </button>
      </form>

      {/* Show success message based on query params */}
      {successMessage && (
        <div className="mt-4 text-center text-green-600">{successMessage}</div>
      )}
    </div>
  );
}

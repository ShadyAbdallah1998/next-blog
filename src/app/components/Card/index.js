"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Card({ title, body, id, image }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  function handleLike() {
    setLiked(true);
    setLikeCount((prev) => prev + 1);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link href={`/post/${id}`}>
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="w-full h-48 object-cover transition-transform transform hover:scale-110"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
          <p className="text-gray-600 mt-2">{body}</p>
        </div>
      </Link>
      <button
        onClick={handleLike}
        className={`${
          liked ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"
        } w-32 rounded-lg py-2 mx-auto mb-4 transition-colors duration-300 hover:bg-pink-500 active:bg-pink-700`}
      >
        {liked ? `Liked (${likeCount})` : "Like ♥️"}
      </button>
    </div>
  );
}

export default Card;

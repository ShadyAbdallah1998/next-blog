"use client";

import React from "react";
import { useRouter } from "next/navigation";

function NavButtons({ id, length }) {
  const router = useRouter();

  function handleNextPost(id) {
    if (id < length) {
      router.push(`/post/${id + 1}`);
    }
  }

  function handlePrevPost(id) {
    if (id > 1) {
      router.push(`/post/${id - 1}`);
    }
  }

  return (
    <div className="flex justify-center gap-8 my-8">
      <button
        onClick={() => handlePrevPost(id)}
        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-bold rounded-lg py-3 px-5 shadow-lg transition-transform transform hover:scale-105"
      >
        <span className="font-semibold">Prev</span>
      </button>
      <button
        onClick={() => handleNextPost(id)}
        className="bg-gradient-to-l from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-bold rounded-lg py-3 px-5 shadow-lg transition-transform transform hover:scale-105"
      >
        <span className="font-semibold">Next</span>
      </button>
    </div>
  );
}

export default NavButtons;

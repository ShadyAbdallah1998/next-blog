"use client";

import React from "react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <button className="m-6" onClick={() => handleGoBack()}>
      Back &larr;
    </button>
  );
}

export default BackButton;

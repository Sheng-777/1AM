import React from "react";
import Link from "next/link";

export default function Posts(){
  const postIDs = ["1", "2", "3"];
  
  return (
    <>
      {postIDs.map((post, key) => (
        <Link href="/posts/[post]" as={`posts/${post}`} key={key}>
        </Link>
      ))}
    </>
  );
};
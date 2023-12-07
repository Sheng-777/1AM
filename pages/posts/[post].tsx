import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage(){
    const router = useRouter();
    const postID = router.query.post;

    return(
        <div>
        <Link href="/posts"></Link>
      <div>
        <p className="font-bold text-4xl text-gray-800 text-center">Post {postID} Details Page</p>
      </div>
        </div>
    )
}
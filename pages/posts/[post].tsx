import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Post from "@/components/Post";

export default function PostPage(){
    const router = useRouter();
    const postID = router.query.post;

    return(
        <div className="h-full">
          <Link href="/posts"></Link>
          <div className="grid grid-cols-2 h-full">
            <div>
              <p className="font-bold text-4xl text-gray-800 text-center">Post {postID} Details Page</p>
            </div>
            <div className="bg-red-100">
            </div>
          </div>
        </div>
    )
}
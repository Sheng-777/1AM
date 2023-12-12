import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Post from "@/components/Post";
import { posts } from "@/components/objects/fakeData";

export default function PostPage(){
    const router = useRouter();
    const postID = Number(router.query.post);

    // Find the post with the given ID
    const post = posts.find(post => post.id === postID);

    console.log(post)

    return(
      <div className="h-full">
        <Link href="/posts"></Link>
        <div className="grid grid-cols-2 h-full">
          <div>
            <p className="font-bold text-4xl text-gray-800 text-center">Post {postID} Details Page</p>
          </div>
          <div className="bg-red-100">
            <Post post={post} className="w-64 h-64 object-cover"></Post>
          </div>
        </div>
      </div>
  )
}
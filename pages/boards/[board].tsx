import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { posts } from "@/components/objects/fakeData";
import Post from "@/components/Post";

export default function PostPage(){
    const router = useRouter();
    const boardID = router.query.board;

    return(
      <div  className="w-full h-full overflow-scroll">
        <Link href="/boards"></Link>
        <div>
          <p className="font-bold text-4xl text-gray-800 text-center">{boardID} Details Page</p>
        </div>
        <div className="columns-4 m-6 gap-4">
          {posts.map(post => {
                if (post.board.includes(boardID)) {
                  return ( 
                    <div key={post.id}>
                      <Link href={`${boardID}/${post.id}`}>
                      <div className="w-auto h-auto mb-4 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-gray-500 dark:hover:shadow-black transition-shadow duration-300 ease-in-out">
                          <Post post={post} className="w-auto h-auto object-cover" ></Post>
                      </div>
                      </Link>
                    </div>
                  )
                }}
              )}
        </div>
      </div>
    )
}
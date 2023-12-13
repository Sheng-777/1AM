import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Post from "@/components/Post";
import { posts } from "@/components/objects/fakeData";

export default function PostPage(){
    const router = useRouter();
    const postID = Number(router.query.post);
  
    const currentPost = posts.find(post => post.id === postID);
    const currentBoard = currentPost ? currentPost.board : null

    return(
      <div className="h-full">
        <Link href={`/posts`}></Link>
        <div className="grid grid-cols-2 h-full">
          <div className="overflow-scroll no-scrollbar">
            <p className="font-bold text-4xl text-gray-800 text-center">Post {postID} Details Page</p>
            <div className="columns-3 m-3 gap-3">
            {posts.map(post => {
                if (post.board === currentBoard) {
                  return ( 
                    <div key={post.id}>
                      <Link href={
                        {pathname : '/boards/[board]/[post]',
                         query: {board: `${currentBoard}`, post: `${post.id}`}
                      }
                        
                      }>
                      <div className="w-auto h-auto mb-3 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-gray-500 dark:hover:shadow-black transition-shadow duration-300 ease-in-out">
                          <Post post={post} className="w-auto h-auto object-cover" ></Post>
                      </div>
                      </Link>
                    </div>
                  )
                }}
              )}
              </div>
          </div>
          <div className="bg-red-100">
            {postID ? (
              <Post post={currentPost} className="w-64 h-64 object-cover" />
            ) : null}
          </div>
        </div>
      </div>
  )
}
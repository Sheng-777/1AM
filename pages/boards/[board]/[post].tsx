import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Post from "@/components/Post";
import { posts } from "@/components/objects/fakeData";

export default function PostPage(){
    const router = useRouter();
    const postID = Number(router.query.post);

    const currentBoard = router.query.board;  
    const currentPost = posts.find(post => post.id === postID);

    return(
      <div className="h-full">
        <Link href={`/posts`}></Link>
        <div className="grid grid-cols-2 h-full w-full">
          <div className="overflow-scroll no-scrollbar">
            <p className="font-bold text-4xl text-gray-800 text-center">{currentPost?.title}</p>
            <div className="columns-3 m-3 gap-3">
            {posts.map(post => {
                if (post.board.includes(currentBoard)) {
                  return ( 
                    <div key={post.id}>
                      <Link href={
                        {pathname : '/boards/[board]/[post]',
                         query: {board: `${currentBoard}`, post: `${post?.id}`}
                      }
                        
                      }>
                      <div className="w-auto h-auto mb-3 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-gray-500 dark:hover:shadow-black transition-shadow duration-300 ease-in-out">
                          <Post post={post} width={600} height={600} className="w-auto h-auto object-cover" ></Post>
                      </div>
                      </Link>
                    </div>
                  )
                }}
              )}
              </div>
          </div>
          <div className="bg-red-100 w-full h-full">
            {postID ? (
              <Post post={currentPost} className="w-full h-full bg-blue-200" />
            ) : null}
          </div>
        </div>
      </div>
  )
}
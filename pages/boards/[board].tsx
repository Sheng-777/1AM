import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Post from "@/components/Post";
import { fetchPosts } from "@/helpers";

export async function getServerSideProps() {
  const postData = await fetchPosts();

  return {
    props: {
      postData,
    },
  };
}

export default function BoardPage({postData}: any){
    const router = useRouter();
    const boardID = router.query.board;
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() =>{
        setPosts( postData )
    },[postData, setPosts])
    
    console.log(posts)

    return(
      <div  className="w-full h-full overflow-scroll">
        <Link href="/boards"></Link>
        <div>
          <p className="font-bold text-4xl text-gray-800 text-center">{boardID} Details Page</p>
        </div>
        <div className="columns-4 m-6 gap-4">
          {posts.map(post => {
                if (post.boards.includes(boardID)) {
                  console.log(post.id)
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
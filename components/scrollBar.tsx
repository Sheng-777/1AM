import Link from "next/link";
import Post from "./Post";
import { posts } from "./objects/posts"
import Image from "next/image"

export default function ScrollBar() {
    return (
      <main className="w-full h-full overflow-hidden">
        <div className="m-6 mr-0 flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-gray-800 dark:text-gray-200 w-fit">Example</h1>
          <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar">
            {posts.map(post => (
              <div key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                  <div className="w-64 h-64 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <Post post={post}></Post>
                  </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      {/* 
      <main className="bg-red-100 h-full w-full">
        <h1 className="m-5 font-bold text-4xl text-gray-800 bg-blue-100 w-fit">Example</h1>
        <div className="flex gap-6 overflow-x-auto">
          {posts.map((id: any) => (
                  <div
                    key={id }className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  </div>
          ))}
        </div>
      </main>
      */}
      </main>
    )
}
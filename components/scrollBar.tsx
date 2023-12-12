import Link from "next/link";
import Post from "./Post";
import { posts, boards } from "./objects/fakeData"
import { HiChevronRight } from "react-icons/hi2";

export default function ScrollBar() {
  const boardNames = Object.keys(boards);

    return (
      <main className="w-full h-full overflow-x-hidden">
        {boardNames.map((board: any) => (
          <div key={board} className="m-6 mr-0 flex flex-col gap-2">
            <Link href={`boards/${board}`}>
            <div className="flex gap-4 text-gray-800 hover:text-blue-600 hover:gap-8 transition-all duration-300">
              <h1 className="text-3xl font-light  dark:text-gray-200 w-fit">{board}</h1> 
              <HiChevronRight className="flex self-center text-2xl"/>
            </div>
            </Link>
            <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar py-2 pr-6">
              {posts.map(post => {
                if (post.board === board) {
                  return ( 
                    <div key={post.id}>
                      <Link href={`/posts/${post.id}`}>
                      <div className="w-64 h-64 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-gray-500 dark:hover:shadow-black transition-shadow duration-300 ease-in-out">
                          <Post post={post} className="w-64 h-64 object-cover"></Post>
                      </div>
                      </Link>
                    </div>
                  )
                }}
              )}
            </div>
          </div>
        ))}
      </main>
    )
}
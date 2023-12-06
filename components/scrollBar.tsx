import Link from "next/link";
import Post from "./Post";
import { posts, boards } from "./objects/fakeData"

export default function ScrollBar() {
  const boardNames = Object.keys(boards);

    return (
      <main className="w-full h-full overflow-x-hidden overflow-y-scroll">
        {boardNames.map((board: any) => (
          <div key={board} className="m-6 mr-0 flex flex-col gap-2">
            <h1 className="text-4xl font-light text-gray-800 dark:text-gray-200 w-fit">{board}</h1>
            <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar py-2 pr-6">
              {posts.map(post => {
                console.log(board)
                console.log(post.board)
                if (post.board === board) {
                  return ( 
                    <div key={post.id}>
                      <Link href={`/posts/${post.id}`}>
                      <div className="w-64 h-64 rounded-lg overflow-hidden shrink-0 shadow-md bg-white dark:bg-gray-600 hover:shadow-gray-500 transition-shadow duration-300 ease-in-out">
                          <Post post={post} className="w-64 h-64"></Post>
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
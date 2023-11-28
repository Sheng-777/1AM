export default function ScrollBar() {
    const posts: any[] = [
      {id: "1"},
      {id: "2"},
      {id: "3"},
      {id: "4"},
      {id: "5"},
      {id: "6"},
      {id: "7"},
    ]


    return (
      <main className="w-full h-full overflow-hidden">
        <div className="m-6 mr-0 flex flex-col gap-4">
          <h1 className="font-bold text-4xl text-gray-800 w-fit">Example</h1>
          <div className="flex flex-row gap-4 overflow-x-scroll no-scrollbar">
            {posts.map((id: any) => (
                   <div
                     key={id} className="w-64 h-64 shrink-0 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
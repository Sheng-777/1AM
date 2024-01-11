import { fetchPosts } from '@/helpers'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
    const postData = await fetchPosts();
  
    return {
      props: {
        postData,
      },
    };
}

const Testing = ({ postData }: any ) => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() =>{
        setPosts( postData )
    },[postData, setPosts])
    
    console.log(posts)

    return(
        <div>
            {
                posts.map(post=>{
                    return(
                        <div key={post.id}>
                        <div>{post.id}</div>
                        <div>{post.source}</div>
                        <div>{post.boards}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Testing
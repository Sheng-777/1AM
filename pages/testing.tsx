import ScrollBar from '@/components/ScrollBar'
import { displayPost } from '@/helpers'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Testing = () => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() =>{
        const displayPost = async()=>{
            //console.log("Hiiiii")
            const apiRes = await axios.get("https://www.rouge-co.com/api/createPost")
            const p =  apiRes?.data?.posts
            setPosts(p)
            //return apiRes
        }

        displayPost()

    },[])
    
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
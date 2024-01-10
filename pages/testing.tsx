import ScrollBar from '@/components/ScrollBar'
import { displayPost } from '@/helpers'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Testing = () => {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() =>{
        const displayPost = async()=>{
            //console.log("Hiiiii")
            const apiRes = await axios.get("http://localhost:3000/api/createPost")
            const p =  apiRes?.data?.posts
            setPosts(p)
            //return apiRes
        }

        displayPost()

    },["http://localhost:3000/api/createPost"])
    
    console.log(posts)
    return(
        <div>
            {
            
                posts.map(post=>{
                    return(
                        <div>
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
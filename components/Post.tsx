import Link from "next/link";
import Image from "next/image"

export default function Post({post}: any) {
    return (
        <Image 
            src={`/temp_images/${post.src}`} 
            alt="temp outfit" 
            width={600} 
            height={600}
            priority 
            className="rounded-lg"/>
    )
}
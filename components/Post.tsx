import Link from "next/link";
import Image from "next/image"

export default function Post({post}: any) {
    return (
        <Image 
            src={`${post?.source}`} 
            alt={`${post?.source}`}
            width={600} 
            height={600}
            priority 
        />
    )
}
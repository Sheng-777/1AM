import PostForm from "@/components/Forms/PostForm"
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi2"

type Props =  {}


const SignUp = (props : Props) => {
    return(
        <>
            <div className="w-full px-6 h-20 flex items-center fixed ">
                <Link href="/">
                    <HiChevronLeft className="text-gray-600 text-4xl"/>
                </Link>
            </div>
            <div className="w-full pt-20 h-full">
            <PostForm/>
            </div>
            
        </>
    )
}

export default SignUp
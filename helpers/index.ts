import { connectToMongoDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { IPost, LoginUserParams } from "@/types";
import { signIn } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next"
import mongoose from "mongoose";
import axios from "axios";


export const loginUser =async ({email, password} : LoginUserParams) => {
    const res = await signIn("credentials", {
        redirect:false,
        email,
        password
    })

    return res
}

export const displayPost = async()=>{
    const apiRes = await axios.get("http://localhost:3000/api/createPost")
    const posts =  await apiRes?.data?.posts
    console.log(posts)
}
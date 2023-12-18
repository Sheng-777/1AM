import { connectToMongoDB } from "@/lib/mongodb"
import Post from "@/models/post"
import { IPost } from "@/types"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req:NextApiRequest, res : NextApiResponse) => {
    await connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST"){
        if (!req.body) return res.status(400).json({error: "Data is missing"})

        const {id,title,content} = req.body

        const postExists = await Post.findOne({id})

        if (postExists){
            res.status(409).json({error:"PostID Already Exists"})
        }

        else{
            
            Post.create({
                id,
                title,
                content
            }).then(async(data:IPost) => {

                const post = {
                    _id : data._id,
                    title : data.title,
                    content : data.content,
                }

                return res.status(201).json({
                    success : true,
                    post
                })
            }).catch((error: unknown) => {
                if (error && error instanceof mongoose.Error.ValidationError){
                    for(let field in error.errors){
                        const msg = error.errors[field].message
                        return res.status(409).json({error: msg})
                    }
                }
                // handle other types of errors here
            })
        }
    }
    else{
        res.status(405).json({error: "Method Not Allowed"})
        res.end()
    }

    res.end()
}

export default handler
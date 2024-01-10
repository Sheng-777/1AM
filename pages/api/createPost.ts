import { connectToMongoDB } from "@/lib/mongodb"
import Post from "@/models/post"
import { IPost } from "@/types"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req:NextApiRequest, res : NextApiResponse) => {
    await connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST"){
        if (!req.body) return res.status(400).json({error: "Data is missing"})

        const {id,source,boards} = req.body        
        const newID = ((await Post.collection.countDocuments()) + 1).toString();
        //console.log(newID)
        const postExists = await Post.findOne({newID})
        if (postExists){
            res.status(409).json({error:"PostID Already Exists"})
        }

        else{
            
            Post.create({
                id : newID,
                source,
                boards
            }).then(async(data:IPost) => {

                const post = {
                    _id : data._id,
                    source : data.source,
                    boards : data.boards,
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

    else if(req.method === "GET"){
        res.status(201).json({
            success : true,
            posts : await Post.collection.find().toArray()
        })
        res.end()
    }

    else{
        res.status(405).json({error: "Method Not Allowed"})
        res.end()
    }

    res.end()
}

export default handler
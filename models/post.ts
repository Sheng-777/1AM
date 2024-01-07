import { Schema, model, models} from "mongoose";

const PostSchema = new Schema ({
    id: {
        type: String,
        unique: true,
        required : [true, "ID is required"], 
    },

    source : {
        type : String,
        required : [true, "Source is required"]
    },

    boards : {
        type: Array<string>,
        required : [true, "Boards is required"],
    }
})

const Post = models.Post || model("Post", PostSchema)

export default Post

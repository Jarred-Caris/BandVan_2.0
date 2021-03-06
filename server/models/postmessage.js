import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    name: String,
    creator:String,
    tags:[String],
    selectedFile:String,
    createdAt: {
        type:Date,
        default:new Date()
    }
})

const PostMessage = mongoose.model('postMessage', postSchema);
export default PostMessage
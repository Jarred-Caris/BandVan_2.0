import PostMessage from "../models/postmessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (er) {
    res.status(404).json(err);
  }
};

export const createPost = async (req, res) => {
  console.log("test")
    const post = req.body;

    const newPost = new PostMessage(post);
    console.log(req.body)
    try {
        await newPost.save()
        res.status(201).json(newPost);
      } catch (err) {
        console.log(err)
        res.status(409).json(err.message);
      
      }
};

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
    const post = req.body;
    const newPost = new PostMessage(post);
    console.log(req.body)
    try {
        await newpost.save()
        res.status(201).json(newPost);
      } catch (er) {
        res.status(409).json(err);
      
      }
};

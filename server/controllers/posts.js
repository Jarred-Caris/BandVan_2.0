import PostMessage from "../models/postmessage.js";
import mongoose from 'mongoose'
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (er) {
    res.status(404).json(err);
  }
};

export const createPost = async (req, res) => {
  console.log("test");
  const post = req.body;

  const newPost = new PostMessage(post);
  console.log(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(409).json(err.message);
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post found with that ID`)

    await PostMessage.findByIdAndRemove(id);

    return res.json({ message: `Post deleted` })
}


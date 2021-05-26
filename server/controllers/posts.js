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
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  

  res.json(updatedPost);
};

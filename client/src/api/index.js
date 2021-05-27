import axios from 'axios'

const url = 'https://bandvan.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

console.log(deletePost)
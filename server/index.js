import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import postRoutes from './routes/posts.js'

const PORT = process.env.PORT || 3001;

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes)

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
// app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
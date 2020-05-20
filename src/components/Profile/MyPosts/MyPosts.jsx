import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message='Hello, how are you?' likesCount='1' />
        <Post message='It is my first social network!' likesCount='20' />

      </div>
    </div>
  );
};

export default MyPosts;

import React from "react";
import style from "./Post.module.css";
import ava from "../../../../ava.png";

const Post = (props) => {
  return (
    
    <div className={style.item}>
      <img src={ava} alt="Ava" />
      { props.message }
      <div>
        <span>Like</span> { props.likesCount }
      </div>
    </div>

  );
};

export default Post;

import React from "react";
import style from "./Profile.module.css";
import success from "../../success.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={style.content}>
        <img src={success} alt={success} />
      </div>
      <div>ava + desc</div>

      <MyPosts />

    </div>
  );
};

export default Profile;

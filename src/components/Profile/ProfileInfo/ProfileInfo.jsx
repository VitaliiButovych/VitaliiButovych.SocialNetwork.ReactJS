import React from "react";
import style from "./ProfileInfo.module.css";
import success from "../../../success.png";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={success} alt={success} />
      </div>
      <div className={style.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;

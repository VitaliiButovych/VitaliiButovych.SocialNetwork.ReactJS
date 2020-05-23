import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog + " " + style.active}>
          <NavLink to="/dialogs/1">Vetal</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">Nastia</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Eva</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Masha</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/5">Dima</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/6">Egor</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/7">Kristina</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/8">Nazar</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/9">Veronika</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/10">Olia</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/11">Jenia</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/12">Tima</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hello</div>
        <div className={style.message}>How is your social network?</div>
        <div className={style.message}>My sNetW become better than before!</div>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Vetal" },
    { id: 2, name: "Nastia" },
    { id: 3, name: "Eva" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Dima" },
    { id: 6, name: "Egor" },
    { id: 7, name: "Kristina" },
    { id: 8, name: "Nazar" },
    { id: 9, name: "Veronika" },
    { id: 10, name: "Olya" },
    { id: 11, name: "Zhenya" },
    { id: 12, name: "Tima" },
  ];

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How is your social network?" },
    { id: 3, message: "My sNetW become better than before!" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={style.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;

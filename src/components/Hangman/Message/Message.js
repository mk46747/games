import React from 'react';
import classes from "./Message.module.css";


const Message = (props) => {
    const classNames = [];
    classNames.push(classes.Message)
    if(props.win){
      classNames.push(classes.Win)
    }
    else if(props.loss){
      classNames.push(classes.Loss)
    }
  return (
    <div className={classNames.join(" ")} >
      {props.text}
    </div>
  )
};


export default Message;
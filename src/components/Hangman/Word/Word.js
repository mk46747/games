import React from 'react';
import classes from "./Word.module.css";
import Letter from "../Letters/Letter/Letter";


const Word = (props) => (
  <div className={classes.WordArea}>
    {props.word.map(letter => {
    return (
      <Letter letter={letter.isGuessed ? letter.value : "_"} />
    )
  })}
  </div>
);

export default Word;
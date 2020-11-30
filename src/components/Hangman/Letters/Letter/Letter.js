import React from 'react';

import classes from './Letter.module.css';


const Letter = (props) => {
  const classNames = [];
  classNames.push(classes.Letter)
  if(props.isGuessed){
    classNames.push(classes.Guessed)
  }
  else if(props.isFailed){
    classNames.push(classes.Failed)
  }
  return (
    <div onClick={() => props.guessedLetterHandler(props.letter)} className={classNames.join(" ")}>{props.letter}</div>

  )
}

export default Letter;
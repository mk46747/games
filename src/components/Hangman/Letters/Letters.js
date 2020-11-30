import React from 'react';
import Letter from "./Letter/Letter";
import classes from './Letters.module.css';


const Letters = (props) => (

  <div className={classes.LettersArea}>
    {props.letters.map(letter => {
      return (
        <Letter guessedLetterHandler={props.guessedLetterHandler} letter={letter.value} isGuessed={letter.isGuessed} isFailed={letter.isFailed} />
      )
    })}
  </div>

);

export default Letters;
import React from 'react';

import classes from './ProgressBarItem.module.css';


const ProgressBarItem = (props) => {
  const classNames = [];
  classNames.push(classes.ProgressBarItem)
  if (props.failed) {
    classNames.push(classes.Failed)
  }

  return (
    <div style={{height: "108.5px"}} className={classNames.join(" ")}></div>
  )
}

export default ProgressBarItem;
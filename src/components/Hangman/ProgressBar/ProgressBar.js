import React from 'react';
import ProgressBarItem from "./ProgressBarItem/ProgressBarItem";
import classes from './ProgressBar.module.css'

const ProgressBar = (props) => (

  <div>
    {[...Array(props.totalAttempts)].map((a, index) => {
      const failed = index < props.numberOfFails;
      return (<ProgressBarItem failed={failed} />)
    }
    )}
  </div>

);

export default ProgressBar;
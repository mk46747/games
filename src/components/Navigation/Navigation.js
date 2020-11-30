import React from 'react';
import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";


const Navigation = (props) => (

  <nav className={classes.Navigation}>
    <NavigationItem >hangman</NavigationItem>
    <NavigationItem>tic-tac-toe</NavigationItem>
  </nav>

);

export default Navigation;
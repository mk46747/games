import React from 'react';
import Navigation from "../Navigation/Navigation";
import classes from './Layout.module.css';


const layout = (props) => (
  <div className={classes.Layout}>
    <Navigation />
    <main>
      {props.children}
    </main>
    <div>
      <footer>
        footer
      </footer>
    </div>
  </div>
  );

export default layout;
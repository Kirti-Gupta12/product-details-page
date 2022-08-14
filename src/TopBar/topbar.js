import React from "react";
import classes from './topbar.module.css';

const topBar =()=>{
    return(
        <header>
        <nav className={classes.topBar}>
          <img src='https://i.dlpng.com/static/png/197684_preview.png' alt="Amazon Logo"/>
        </nav>
        </header>
    );
}

export default topBar;
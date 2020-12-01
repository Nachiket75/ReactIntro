import React from 'react'
import classes from './Toolbar.css'
import LOGO from '../../Logo/Logo'

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <LOGO/>
        <nav>...</nav>
    </header>

)

export default toolbar;
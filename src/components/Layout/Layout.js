import React from 'react'
import Aux from '../../hoc/Auxilary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
const layout =(props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <div>           
            SideDrawer,
            Backdrop
        </div>
        <main className= {classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'

class BergerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BergerBuilder;
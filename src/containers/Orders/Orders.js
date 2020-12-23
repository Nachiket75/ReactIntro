import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import ErrorHandler from '../../hoc/ErrorHandler'

class Orders extends Component {
    state = {
        orders:[],
        loading:true
    }
    componentDidMount(){
        console.log("fetchdata")
        axios.get("/orders.json")
        .then(res=>{
            const fetchOrders = []   
            console.log(res.data)
            for (let resp in res.data){
                fetchOrders.push({
                    ...res.data[resp],
                    id:resp                    
                })
            }

            this.setState({loading:false, orders:fetchOrders})
        })
        .catch(err =>{
            this.setState({loading:false})
        })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order =>(
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))}
            </div>
        )
    }
}

export default ErrorHandler(Orders,axios);
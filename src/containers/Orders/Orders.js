import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import ErrorHandler from '../../hoc/ErrorHandler'
import {connect} from 'react-redux'

class Orders extends Component {
    state = {
        orders:[],
        loading:true
    }
    componentDidMount(){
        // console.log("fetchdata"+this.props.token)
        const queryParams = '?auth='+this.props.token + '&orderBy="userId"&equalTo="'+this.props.userId + '"'
        axios.get("/orders.json"+queryParams)
        .then(res=>{
            const fetchOrders = []   
            console.log(res.data)
            for (let resp in res.data){
                fetchOrders.push({
                    ...res.data[resp],
                    id:resp                    
                })
            }
            console.log(this.props.userId)
            console.log(fetchOrders)
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
                        customer = {order.customer}
                        price={order.price}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        token:state.auth.token,
        userId:state.auth.userId
    }
}

export default connect(mapStateToProps) (ErrorHandler(Orders,axios));
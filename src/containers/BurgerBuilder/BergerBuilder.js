import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
//import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler'
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actionTypes'


class BergerBuilder extends Component{
    state ={
        //ingredients:{},      
       // totalPrice:0,
        //purchasable:false,
        ordered:false,
        loading:false
    }


    componentDidMount(){
        // let serverTotalPrice=0;
        // axios.get("https://react-burger-331dd-default-rtdb.firebaseio.com/BaseBurgerPrice.json")
        //     .then(response =>{
        //         this.setState({totalPrice:response.data})
        //         serverTotalPrice = response.data;
        //         console.log(serverTotalPrice)
        //     })

        // axios.get("https://react-burger-331dd-default-rtdb.firebaseio.com/Ingredients.json")
        //     .then(response=>{
        //         this.setState({ingredients:response.data})
                //console.log(response.data)

            //logic to update totalprice if ingredients already set on server.    
            
            // const keys   = Object.keys(this.props.ings);//Object.keys(response.data);
            // const values = Object.values(this.props.ings);  //Object.values(response.data);  
            // let serverAssignedPrice = 0;      
            // //console.log(keys)
            // for(var i=0;i<values.length;i++){    
            //     if(values[i]>0){
            //         this.setState({purchasable:true})
            //         for(var j=0; j<values[i];j++ ){
            //            // console.log(keys[i])
            //            // console.log(values[i])
            //             serverAssignedPrice = serverAssignedPrice+INGREDIENT_PRICES[keys[i]]
            //         }
            //     }
            // }
            // serverAssignedPrice = serverTotalPrice+serverAssignedPrice;
            // this.setState({totalPrice:serverAssignedPrice})
            //console.log(serverAssignedPrice)
           // })            
    }


    updatePurchaseState(ingredients){    
        //console.log(ingredients)
        let ingValList = Object.values(ingredients)
        //console.log(ingValList)
        let totalIngredients =0;
        for(let i=0;i<ingValList.length;i++){
            totalIngredients=totalIngredients+ingValList[i]
        }
        console.log(totalIngredients)
        return totalIngredients > 0
        // if(totalIngredients>0)
        //     this.setState({purchasable:true});         
        // else
        //     this.setState({purchasable:false});      

    }
    // addIngredientHandler= (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount+1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updateCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;

    //     this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        
    //     console.log(newPrice);
    //     this.updatePurchaseState(updatedIngredients);
    // }
    
    // removeIngredientHandler= (type)=> {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount<=0){                                 //if oldCount is zero we wont subtract more as already it is 0 and ingredients added count can not be negative.
    //         return;
    //     }

    //     const updateCount = oldCount-1;
    //     const updatedIngredients = {
    //         ...this.props.ings //...this.state.ingredients
    //     }
    //     updatedIngredients[type] = updateCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;

    //     this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        
    //     console.log(newPrice);
    //     this.updatePurchaseState(updatedIngredients);
    // }
    burgerOrdered = () =>{
        this.setState({ordered:true});
    }
    purchaseCancelHandler = () =>{
        this.setState({ordered:false});
    }
    purchaseContinueHandler = () =>{        
        // this.setState({loading:true})
        // const order ={
        //     ingredients: this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:'Nachiket',
        //         address:{
        //             street:'Rajaji Path',
        //             zipCode:'421201',
        //             coutry:'India'
        //         },
        //         email:'lyonken1@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/order.json',order)
        //     .then(response =>{
        //         console.log(response)
        //         this.setState({loading:false, ordered:false})   //To close to modal after post data to server we set ordered to false
        //     })
        //     .catch(error =>{
        //         console.log(error)
        //         this.setState({loading:false, ordered:false})
        //     })
            //console.log(this.props)
            // this.props.history.push({
            //     pathname:'/checkout' ,                    
            //     state:{ingredients:this.props.ings, //ingredients:this.state.ingredients,
            //         totalPrice:this.props.totalPrice}
            // }
            this.props.history.push('/checkout')        
            //console.log(this.props)
    }   
    render(){
        // do{
            
        // }while(this.props.ings)//while(this.state.ingredients === null)
        
        

        const disabledInfo = {
            ...this.props.ings//...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;         //this will keep true and false status if ingredient count is 0 then to disabled the less button.
        }

        let orderSummary = <OrderSummary 
        price = {this.props.totalPrice}
        ingredients= {this.props.ings} // ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}      />

        // if(this.state.loading){
        //     orderSummary = <Spinner/>
        // }
        return(
            <Aux>
                <Modal show={this.state.ordered} modalClosed = {this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings} />  {/* /{this.state.ingredients}/> */}
                <BuildControls
                    ingredientAdded = {this.props.onIngredientAdded}     //{this.addIngredientHandler}
                    ingredientRemoved = {this.props.onIngredientRemove}  //{this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price ={this.props.totalPrice}
                    purchasable = {this.updatePurchaseState(this.props.ings)}//{this.state.purchasable}
                    ordered = {this.burgerOrdered}/>
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return{
    ings:state.ingredients,
    totalPrice:state.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientAdded : (ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientRemove : (ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ErrorHandler(BergerBuilder,axios));
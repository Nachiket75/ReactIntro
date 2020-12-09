import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler'

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BergerBuilder extends Component{
    state ={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        ordered:false,
        loading:false
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
        if(totalIngredients>0)
            this.setState({purchasable:true});         
        else
            this.setState({purchasable:false});      

    }
    addIngredientHandler= (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        
        console.log(newPrice);
        this.updatePurchaseState(updatedIngredients);
    }
    
    removeIngredientHandler= (type)=> {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){                                 //if oldCount is zero we wont subtract more as already it is 0 and ingredients added count can not be negative.
            return;
        }

        const updateCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        
        console.log(newPrice);
        this.updatePurchaseState(updatedIngredients);
    }
    burgerOrdered = () =>{
        this.setState({ordered:true});
    }
    purchaseCancelHandler = () =>{
        this.setState({ordered:false});
    }
    purchaseContinueHandler = () =>{        
        this.setState({loading:true})
        const order ={
            ingredients: this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:'Nachiket',
                address:{
                    street:'Rajaji Path',
                    zipCode:'421201',
                    coutry:'India'
                },
                email:'lyonken1@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/order.json',order)
            .then(response =>{
                console.log(response)
                this.setState({loading:false, ordered:false})   //To close to modal after post data to server we set ordered to false
            })
            .catch(error =>{
                console.log(error)
                this.setState({loading:false, ordered:false})
            })
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;         //this will keep true and false status if ingredient count is 0 then to disabled the less button.
        }

        let orderSummary = <OrderSummary 
        price = {this.state.totalPrice}
        ingredients={this.state.ingredients}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}      />

        if(this.state.loading){
            orderSummary = <Spinner/>
        }
        return(
            <Aux>
                <Modal show={this.state.ordered} modalClosed = {this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price ={this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.burgerOrdered}/>
            </Aux>
        )
    }
}

export default ErrorHandler(BergerBuilder,axios);
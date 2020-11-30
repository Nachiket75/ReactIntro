import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
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
        purchasable:false
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

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;         //this will keep true and false status if ingredient count is 0 then to disabled the less button.
        }
        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price ={this.state.totalPrice}
                    purchasable = {this.state.purchasable}/>
            </Aux>
        )
    }
}

export default BergerBuilder;
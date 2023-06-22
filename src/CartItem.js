import React from "react";

const PlusImage = require('./image/plus.png');
const MinusImage = require('./image/minus-sign.png');
const DeleteImage = require('./image/delete.png');


class CartItem extends React.Component{

    increaseQuantity = () => {
        
        // setState method one !

        // this.setState({
        //     qty : this.state.qty + 1,
        // });


        // setState method second -- Use only when previous state is available
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {

        var quantity = this.state.qty;

        if(quantity === 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });
        

    }

    render(){

        const {price, qty, title} = this.props.product;

        const{onDecreaseQuantity, product, onDeleteItem} = this.props;
        return(
            <div className="cart-item">

                <div className="left-block">
                    <img style={style.image}></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25 }}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                       <img alt="increase" 
                       className="action-icons" 
                       src= {PlusImage} 
                       onClick= {() => this.props.onIncreaseQuantity(this.props.product)}
                       />
                       <img alt="decrease" 
                       className="action-icons" 
                       src= {MinusImage}
                       onClick={() => onDecreaseQuantity(product)}
                       />
                       <img alt="delete" 
                       className="action-icons" 
                       src= {DeleteImage} 
                       onClick={() => onDeleteItem(product.id)}
                       />
                    </div>
                </div>


            </div>

        );
    }

}

const style = {
    image : {
         height : 110,
         width : 110,
         borderRadius : 10,
         background: '#ccc'
    }
}

export default CartItem;
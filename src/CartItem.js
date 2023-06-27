import React from "react";

const PlusImage = require('./image/plus.png');
const MinusImage = require('./image/minus-sign.png');
const DeleteImage = require('./image/delete.png');


const CartItem = (props) =>{

    const {price, qty, title} = props.product;

    const{
          onIncreaseQuantity,
          onDecreaseQuantity,
          product,
          onDeleteItem
        } = props;
    return(
        <div className="cart-item">

            <div className="left-block">
                <img src = {product.img} style={style.image}   />
            </div>

            <div className="right-block">
                <div style={{fontSize: 25 }}>{title}</div>
                <div style={{color: '#777'}}>Rs {price}</div> 
                <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" 
                    className="action-icons" 
                    src= {PlusImage} 
                    onClick= {() => onIncreaseQuantity(product)}
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

const style = {
        image : {
         height : 110,
         width : 110,
         borderRadius : 10,
         background: '#ccc'
    }
}

export default CartItem;
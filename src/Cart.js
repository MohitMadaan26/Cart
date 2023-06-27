import React from "react";
import CartItem from "./CartItem";



const Cart = (props) =>{

    const {onIncreaseQuantity, onDecreaseQuantity, onDeleteItem} = props;

        const {products} = props;
        return(
            <div className="cart">
            {products.map((product) => {
                return (   
                <CartItem product={product} 
                key={product.id}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
                onDeleteItem={onDeleteItem}
                />
                )
            })}
            </div>
        );

}

   

    

export default Cart;
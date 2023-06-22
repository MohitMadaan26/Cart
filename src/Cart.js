import React from "react";
import CartItem from "./CartItem";



class Cart extends React.Component{

    constructor (){
        super();
        this.state = {
            products : [
                {
                 price : 99,
                 title : 'Watch',
                 qty : 1,
                 img : '',
                 id : 1
                },
                 {
                    price : 999,
                    title : 'Mobile',
                    qty : 10,
                    img : '',
                    id : 2,         
                 },
                 {
                    price : 99,
                    title : 'Laptop',
                    qty : 4,
                    img : '',
                    id : 3
                 },
            ]
        }
    }

    handleDeleteItem = (id) =>{
        const {products} = this.state;

        const items = products.filter((item) => item.id != id);

        this.setState({
            products : items
        })

    }

    handleDecreaseQuantity = (product) =>{

        console.log("decrease quanity of this", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        const quanity = products[index].qty;

        if(quanity == 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products : products
        })

    }

    handleIncreaseQuantity = (product) =>{
        console.log("increase quanity of this", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products : products
        })
    }

    render(){

        const {products} = this.state;
        return(
            <div className="cart">
            {products.map((product) => {
                return (
                <CartItem product={product} 
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteItem={this.handleDeleteItem}
                />
                )
            })}
            </div>
        );
    }
}


    

export default Cart;
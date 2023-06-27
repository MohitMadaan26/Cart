import React, { Component } from 'react';
import CartItem from './CartItem'
import Cart from './Cart';
import { render } from '@testing-library/react';
import Navbar from './NavBar';




class App extends React.Component {

  constructor (){
    super();
    this.state = {
        products : [
            {
             price : 99,
             title : 'Watch',
             qty : 1,
             img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
             id : 1
            },
             {
                price : 999,
                title : 'Mobile',
                qty : 10,
             img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
                id : 2,         
             },
             {
                price : 99,
                title : 'Laptop',
                qty : 4,
                img : 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
                id : 3
             },
        ]
    }
}

handleDeleteItem = (id) =>{
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products : items
    })

}

handleDecreaseQuantity = (product) =>{

    console.log("decrease quanity of this", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    const quanity = products[index].qty;

    if(quanity === 0){
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

getCartCount = (product) =>{

  const {products} = this.state;

  let count = 0;

  products.forEach((product) =>{

    count += product.qty;

  })


  return count;
}

getCartTotal = (product) =>{

  const {products} = this.state;

  var totalPrice = 0;

  products.forEach((product) =>{
      totalPrice += product.qty * product.price;
  })

  return totalPrice;

}
    render(){

      const {products} = this.state;

      return (
        <div className="App">
        <Navbar 
         count = {this.getCartCount()}
        />  
        <Cart
        products = {products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteItem={this.handleDeleteItem}
        />

<div style={style.TotalCart}> TOTAL : {this.getCartTotal()} </div>
       
        </div>

        
      );
    }
  }

  const style = {

    TotalCart : {
      fontSize: 20,
      padding: 10,
      backgroundColor: '#dcd939',
      height: 50,
      width: 100,
  }
}

export default App;

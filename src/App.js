import React, { Component } from 'react';
import CartItem from './CartItem'
import Cart from './Cart';
import { render } from '@testing-library/react';
import Navbar from './NavBar';
import firebase from "firebase/app";





class App extends React.Component {

  constructor (){
    super();
    this.state = {
        products : []
    }
}

componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
      console.log(snapshot);
    })
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

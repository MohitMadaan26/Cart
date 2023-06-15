import React from "react";

const PlusImage = require('./image/plus.png');
const MinusImage = require('./image/minus-sign.png');
const DeleteImage = require('./image/delete.png');


class CartItem extends React.Component{

    constructor (){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }

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

    render(){

        const {price, qty, title} = this.state;
        return(
            <div className="cart-item">

                <div className="left-block">
                    <img alt="Product Image" style={style.image}></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25 }}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                       <img alt="increase" 
                       className="action-icons" 
                       src= {PlusImage} 
                       onClick= {this.increaseQuantity}
                       />
                       <img alt="increase" className="action-icons" src= {MinusImage} />
                       <img alt="delete" className="action-icons" src= {DeleteImage} />
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
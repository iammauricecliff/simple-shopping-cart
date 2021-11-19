import { useState } from "react";
import { Link } from "react-router-dom";
import Basket from "./components/Basket";
import data from "./components/data";
import Header from "./components/Header";
import Main from "./components/Main";


export default function ShoppingCart() {
   const { products } = data;
   const [cartItem, setCartItem] = useState([]);
   const onAdd = (product) => {
     const exist = cartItem.find((x) => x.id === product.id)
     if(exist){
        setCartItem(
          cartItem.map((x) => x.id === product.id ? {...exist,  qty: exist.qty + 1 } : x )
        )
     }else {
       setCartItem(
         [...cartItem, {...product, qty: 1}]
       )
     }
   }
   const onRemove = (product) => {
     const exist = cartItem.find((x) => x.id === product.id)
     if(exist.qty === 1){
       setCartItem(
         cartItem.filter((x) => x.id !== product.id)
       )
     }else {
       setCartItem(
         cartItem.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
       )
    }
  }
    return (
      <div className="shoppingcart">
            <Header cartCounter={cartItem.length} />
            <Link to="/">
              <button>go back</button>
            </Link>
            <div class="row">
                <Main onAdd={onAdd} products={ products } />
                <Basket onAdd={onAdd} onRemove={onRemove} cartItem={ cartItem } />
            </div>
      </div> 
    )
}
 

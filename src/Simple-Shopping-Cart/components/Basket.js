import React from 'react'

export default function Basket(props) {
    const { cartItem, onAdd, onRemove } = props;
    const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 5000 ? 0 : 100
    const totalPrice = itemPrice + taxPrice + shippingPrice
    return (
        <div className="basket">
            <h3>Cart</h3>
            { cartItem.length === 0 && (
                <div>
                    cart is empty
                </div>
            )}
            {
                cartItem.map((item) => (
                    <div className="cartrow" key={item.id}>
                       <div className="cartinfo2">{item.name}</div>
                       <div className="cartinfo1">
                           <button className="add" onClick={()=> onAdd(item)}>+</button>
                           <button className="remove" onClick={()=> onRemove(item)}>-</button>
                       </div>
                       <div className="cartinfo1">
                           {item.qty} * ${item.price}
                       </div>
                    </div>
                  
                ))
            }
            <div className="summary">
               <hr/>
               {
                   cartItem.length > 0 && 
                   <>
                    <div className="itemprice">ItemPrice: ${itemPrice}</div>
                    <div className="taxprice">TaxPrice: ${taxPrice}</div>
                    <div className="shippingprice">ShippingPrice: ${shippingPrice}</div>
                    <hr/>
                    <div className="total">
                        <strong>TotalCost: ${totalPrice}</strong>
                    </div>
                    <hr/>
                    <div className="btn1">
                        <button onClick={()=> alert('you have checked out successfully')}>Check Out</button>
                    </div>
                   </>
               }
            </div>
        </div>
    )
}

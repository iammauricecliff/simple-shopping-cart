import React from 'react'



export default function Header(props){
    const { cartCounter } = props;
   return(
       <div className="Header">
          <header>
              <div className="brand">
                  <h3>Simple Shopping Cart</h3>
              </div>
              <div className="brandlink">
                 <li>Cart {' '}
                    { cartCounter ? 
                        <button>{cartCounter}</button> :
                        ''
                    }
                 </li>
                 <li>SignIn</li>
              </div>
          </header>
       </div>
   )
}
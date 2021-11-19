import React from 'react'
import Product from './Product';

export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <div className="Main">
           <h1>Products</h1>
            <div className="productdisplay">
                {
                    products.map((product, index) => (
                        <Product key={index} product={product} onAdd={onAdd}/>
                    ))
                }
            </div>
        </div>
    )
}

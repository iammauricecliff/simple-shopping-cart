import React from 'react'

export default function Product(props) {
    const { product, onAdd } = props
    return (
        <div className="product">
            <img src={product.image} alt={product.name}/>
            <h4>Product name: {product.name}</h4>
            <div className="productprice">
                ${product.price}
            </div>
            <button onClick={()=> onAdd(product)}>Add to Cart</button>
        </div>
    )
}

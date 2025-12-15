import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="card">

            <img src={product.imgUrl} alt={product.name} />

            <div className="product-desc">
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Product
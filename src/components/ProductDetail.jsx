import React from 'react';

const ProductDetail = ({ product }) => {
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button>Añadir al carrito</button>
        </div>
    );
};

export default ProductDetail;
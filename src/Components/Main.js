import React from 'react';
import Product from './Product';

export default function Main(props) {
    const { products } = props;
    return (
        <main class="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </div>
        </main>
    );
}
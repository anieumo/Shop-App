import React from 'react';

export default function Shop(props) {
    const { cartItems } = props;
    return (
        <aside class="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
        </aside>
    )
}
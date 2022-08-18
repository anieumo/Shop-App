import React from 'react';

export default function Header(props) {
    return (
        <header class="row center block">
            <div>
                <a hyref>
                    <h1>Shop</h1>
                </a>
            </div>
            <div>
                <a hyref="#/cart">Cart</a> <a hyref="#/signin">Sign In</a>
            </div>
        </header>
    );
}
import React from 'react';

const CartWidget = ()=>(
    <img class="cart-Widget" src="https://cdn4.iconfinder.com/data/icons/rounded-solid-outline-shopping-e-commerce-icons-se/144/Shopping_Cart_Rounded_Solid-512.png"></img>
)

function NavBar(props){
    const {item1:item_1, item2:item_2} = props
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="">WorldFootballShirts</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">{item_1}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">{item_2}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">National Teams</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Players</a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;

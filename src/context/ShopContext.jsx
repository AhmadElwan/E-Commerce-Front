import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";


const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = 'JD';
    const delivery_fee = 2;
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let count = 0;
        for (let items in cartItems) {
            for (let item in cartItems[items]) {
                if(cartItems[items][item] > 0) {
                    count += cartItems[items][item];
                }
            }
        }
        return count;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch,
        cartItems, addToCart, getCartCount,
        updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export const useShopContext = () => {
    return useContext(ShopContext);
}
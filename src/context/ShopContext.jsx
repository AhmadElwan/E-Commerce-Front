import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = 'JD';
    const delivery_fee = 2;
    const [search, setSearch] = useState('');

    const value = {
        products, currency, delivery_fee,
        search, setSearch
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
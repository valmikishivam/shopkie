import { createContext, useContext, useMemo, useState } from "react";
const cart = createContext()
const Cart = ({ children }) => {
    const [item, setItem] = useState([]);
    const value = useMemo(()=>({
item,setItem
    }),[item])

    return (
        <cart.Provider value={value}>
            {children}
        </cart.Provider>

    )
}

export const useCart = () => useContext(cart)
export default Cart
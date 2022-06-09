import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, img, author) => {
    setItems((prevState) => [...prevState, { name, price, img, author }]);
  };

  const removeFromCart = (itemName) => {
    const newItems = items.filter((newItemName) => {
      return newItemName.name !== itemName;
    });
    setItems(newItems);
  };

  

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

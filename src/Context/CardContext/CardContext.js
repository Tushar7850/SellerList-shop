import Swal from "sweetalert2";

import { createContext, useState } from "react";

export const CardContext = createContext();

function CardContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductEXist = cartItems.find((item) => item.id === product.id);

    if (ProductEXist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductEXist, quantity: ProductEXist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        title: "Item Added To cart !",
        text: "Go To Cart",
        icon: "success",
      });
    }
  };

  const haddleRemoveProduct = (product) => {
    const ProductEXist = cartItems.find((item) => item.id === product.id);

    if (ProductEXist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductEXist, quantity: ProductEXist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartCleareance = () => {
    setCartItems([]);
  };

  const removeUniqueProduct = (index) => {
    setCartItems(cartItems.filter((item, i) => i !== index));
  };

  const value = {
    cartItems,
    handleAddProduct,
    handleCartCleareance,
    haddleRemoveProduct,
    removeUniqueProduct,
  };

  return (
    <div>
      <CardContext.Provider value={value}>{children}</CardContext.Provider>
    </div>
  );
}

export default CardContextProvider;

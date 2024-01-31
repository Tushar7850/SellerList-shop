import Swal from "sweetalert2";

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const CardContext = createContext();

function CardContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const Navigate =useNavigate()

  const handleAddProduct = (product) => {
    if (product.size) {
        
      const ProductEXist = cartItems.find((item) => item.id === product.id );

    if (ProductEXist ) {
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id
        ? { ...ProductEXist, quantity: ProductEXist.quantity + 1 }
        : item
        )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        Navigate(-1)
        Swal.fire({
          title: "Item Added To cart !",
          text: "Go To Cart",
          icon: "success",
        });
      }
      
    }
    else{

      
      toast.error("select Size")
    }
  
    
    }


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


  const CarttotalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price, 0
  );


  let TotalShippingChrges = 0
    if (cartItems.length>0) {
      TotalShippingChrges = 40*cartItems.length
      
    } ;

  const value = {
    cartItems,
    handleAddProduct,
    handleCartCleareance,
    haddleRemoveProduct,
    removeUniqueProduct,
    CarttotalPrice,
    TotalShippingChrges
  };

  return (
    <div>
      <CardContext.Provider value={value}>{children}</CardContext.Provider>
    </div>
  );
}

export default CardContextProvider;

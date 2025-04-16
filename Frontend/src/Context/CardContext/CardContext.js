import Swal from "sweetalert2";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AdminContext } from "../AdminContext/AdminContext";
import { CommonApiUrl } from "../../HttpCommon";

export const CardContext = createContext();

function CardContextProvider({ children }) {
  const { user } = useContext(AdminContext);
  const userId = user?._id;

  const [cartItems, setCartItems] = useState([]);
  const Navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${CommonApiUrl}/api/cart/${userId}`);
      setCartItems(res.data?.items || []);
    } catch (err) {
      console.error("Failed to load cart:", err);
    }
  };

  useEffect(() => {
    if (userId) fetchCart();
  }, [userId]);

  const handleAddProduct = async (product) => {
    if (!product.size) return toast.error("Select Size");

    try {
      await axios.post(`${CommonApiUrl}/api/cart/add`, {
        userId,
        quantity: 1,
        productId: product._id,
        size: product.size,
      });
      await fetchCart();
      Navigate(-1);
      Swal.fire({
        title: "Item Added To cart!",
        text: "Go To Cart",
        icon: "success",
      });
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const haddleRemoveProduct = async (product) => {
    const item = cartItems.find(
      (i) => i._id === product._id || i.productId === product._id
    );

    if (!item) return;

    if (item.quantity === 1) {
      await removeUniqueProduct(product._id);
    } else {
      try {
        await axios.put(`${CommonApiUrl}/api/cart/update`, {
          userId,
          productId: product._id,
          quantity: item.quantity - 1,
        });
        await fetchCart();
      } catch (err) {
        console.error("Error decreasing quantity:", err);
      }
    }
  };

  const removeUniqueProduct = async (productId) => {
    try {
      await axios.delete(`${CommonApiUrl}/api/cart/remove`, {
        data: { userId, productId },
      });
      fetchCart();
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

  const handleCartCleareance = async () => {
    try {
      await axios.delete(`${CommonApiUrl}/api/cart/clear/${userId}`);
      setCartItems([]);
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  const CarttotalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const TotalShippingChrges = cartItems.length > 0 ? cartItems.length * 40 : 0;

  const value = {
    cartItems,
    handleAddProduct,
    handleCartCleareance,
    haddleRemoveProduct,
    removeUniqueProduct,
    CarttotalPrice,
    TotalShippingChrges,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export default CardContextProvider;

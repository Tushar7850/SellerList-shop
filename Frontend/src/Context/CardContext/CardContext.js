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
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${CommonApiUrl}/api/cart/${userId}`);
      setCartItems(res.data?.items || []);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load cart:", err);
      toast.error("Failed to load cart"); 
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchCart();
  }, [userId]);

  const handleAddProduct = async (product) => {
    setLoading(true);
    if (!userId) return toast.error("Login first ...");
    if (!product.size) return toast.error("Select Size");

    // Check if item already exists in cart with the same size
    // const existingItem = cartItems.find(
    //   (item) => item.productId.toString() === product._id?.toString() && item.size === product.size
    // );

    const existingItem = cartItems.find(
      (item) =>
        item._id.toString() === product._id?.toString() &&
        item.size === product.size
    );

    console.log(cartItems, "productproductproduct");

    try {
      if (existingItem) {
        // Update quantity if already in cart
        await axios.put(`${CommonApiUrl}/api/cart/update`, {
          userId,
          productId: product._id,
          size: product.size,
          quantity: existingItem.quantity + 1,
        });
        
      } else {
        await axios.post(`${CommonApiUrl}/api/cart/add`, {
          userId,
          quantity: 1,
          productId: product._id,
          size: product.size,
        });
        Swal.fire({
          title: "Item Added To Cart!",
          text: "Go To Cart",
          icon: "success",
        });
        Navigate(-1);
      }

      await fetchCart();
      setLoading(false);
    } catch (err) {
      console.error("Error adding product:", err);
      toast.error("Failed to add product to cart");
      setLoading(false);
    }
  };

  const haddleRemoveProduct = async (product) => {
    setLoading(true)
    const item = cartItems.find(
      (i) =>
        (i._id === product._id || i.productId === product._id) &&
        i.size === product.size
    );

    if (!item) return;

    if (item.quantity === 1) {
      await removeUniqueProduct(product._id, product.size);

    } else {
      try {
        await axios.put(`${CommonApiUrl}/api/cart/update`, {
          userId,
          productId: product._id,
          quantity: item.quantity - 1,
          size: product.size, // important!
        });
        await fetchCart();
        setLoading(false)
      } catch (err) {
        console.error("Error decreasing quantity:", err);
        toast.error("Failed to decrease product quantity");
        setLoading(false)
      }
    }
  };

  const removeUniqueProduct = async (productId, size) => {
    setLoading(true)
    try {
      await axios.delete(`${CommonApiUrl}/api/cart/remove`, {
        data: { userId, productId, size }, // Send both productId and size
      });
      await fetchCart();
    
      setLoading(false)
    } catch (err) {
      console.error("Error removing product:", err);
      toast.error("Failed to remove product from cart");
     setLoading(false)
    }
  };

  const handleCartCleareance = async () => {
    setLoading(true)
    try {
      await axios.delete(`${CommonApiUrl}/api/cart/clear/${userId}`);
      setCartItems([]); 
       setLoading(false)
    } catch (err) {
      console.error("Error clearing cart:", err);
      toast.error("Failed to clear cart");
     setLoading(false)
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
    loading ,
    fetchCart
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export default CardContextProvider;

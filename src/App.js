import { createContext, useState } from "react";
import Routingpage from "./Route/Routingpage";
 import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


export const MyContext = createContext()



function App() {
  const Navigate = useNavigate()

      

  const [cartItems,setCartItems] =useState([])

  const handleAddProduct=(product)=>{
   
  
          const ProductEXist = cartItems.find((item) => item.id === product.id) ;
      
          if(ProductEXist){
            setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductEXist, quantity : ProductEXist.quantity + 1}  :  item ))
          }
       else{
              setCartItems([...cartItems,{...product,quantity:1}])
              Swal.fire({
                title: "Item Added To cart !",
                text: "Go To Cart",
                icon: "success"
              });

              
              
              Navigate(-1)
          }
        }
      
      
      
        const haddleRemoveProduct=(product)=>{
          const ProductEXist = cartItems.find((item)=> item.id === product.id) ;
      
          if(ProductEXist.quantity === 1){
            setCartItems(cartItems.filter((item)=>item.id !== product.id))
          }
          else{
            setCartItems(
              cartItems.map((item)=> item.id === product.id ? {...ProductEXist,quantity:ProductEXist.quantity - 1}:item)
            )
          }
        }
      
      
        const handleCartCleareance=()=>{
          setCartItems([])
      
        }

        const removeUniqueProduct =(index)=>{
          setCartItems(cartItems.filter((item,i)=> i !== index ))

 }

 

  return (
    <div className="w-full overflow-hidden">
       <MyContext.Provider value={{cartItems ,handleAddProduct,handleCartCleareance,haddleRemoveProduct,removeUniqueProduct}}>
     
  <Routingpage/>
   </MyContext.Provider>
      
    </div>
  );
}

export default App;

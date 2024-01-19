
import { useEffect, useState } from "react";
import Routingpage from "./Route/Routingpage";
import Spinner from "./components/Spinner/Spinner";








function App() {
  
  const [loading,setLoading]= useState(true)
  
  
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  },[])
 

  return (
    <div className="w-full overflow-hidden">
      {
        loading ? (<Spinner/>):( <Routingpage/>)

      }
      

      
    </div>
  );
}

export default App;

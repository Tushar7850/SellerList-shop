import { useEffect, useState } from "react";
import Routingpage from "./Route/Routingpage";
import Spinner from "./components/Spinner/Spinner";
import AddProducts from "./components/addProducts/AddProducts";

function App() {
  return (
    <div className="w-full overflow-hidden">
      {/* <Routingpage /> */}
      <AddProducts/>
    </div>
  );
}

export default App;

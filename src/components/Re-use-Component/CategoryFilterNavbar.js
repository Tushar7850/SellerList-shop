import React from "react";

export default function FilterNavbar({ FilterItem, categoryList }) {
    
  return (
    <div>
      <nav>
        <div className="flex gap-2 justify-center mt-2  lg:mt-4">
          {categoryList.map((curElem,i) => {
            return (
              <button key={i} 
                className="border border-cyan-300 text-cyan-500 px-2 py-1 text-sm lg:text-lg lg:px-4 lg:py-2  rounded-xl hover:bg-cyan-600 hover:text-white "
                onClick={() => FilterItem(curElem)
                }
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

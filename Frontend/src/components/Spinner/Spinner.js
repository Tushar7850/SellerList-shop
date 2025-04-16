import React from "react";
import { bouncy } from "ldrs";

bouncy.register();

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <l-bouncy size="80" speed="1" color="#06B6D4"></l-bouncy>
    </div>
  );
}

export default Spinner;

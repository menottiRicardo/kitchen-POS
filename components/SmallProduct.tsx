import React from "react";

const SmallProduct = ({ id, price, name, notes }:any) => {
  
  return (
    <div className="bg-white rounded-md flex my-2 items-center p-1">
      
      <div className="ml-2 flex justify-between w-full items-center">
        <p className="font-medium text-lg text-primary-400 uppercase">{name}</p>
        
        <p className="text-primary-600 font-medium pr-2">${price}</p>
      </div>
    </div>
  );
};

export default SmallProduct;

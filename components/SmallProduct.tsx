import React from "react";

const SmallProduct = ({ id, status, name, notes }) => {
  return (
    <div className="bg-white rounded-md flex my-2 items-center">
      <div className="w-1/4 bg-gray-500 h-16 rounded-l-md"></div>
      <div className="ml-2 flex justify-between">
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};

export default SmallProduct;

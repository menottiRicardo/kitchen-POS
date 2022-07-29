import React, { useState } from "react";

const NewProduct = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="fixed w-full h-full bg-black flex items-center justify-center bg-opacity-90 z-50 select-none px-4 inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-md shadow-xl px-2 py-3 grid select-none bg-white">
            <h1 className="font-bold text-xl text-center text-primary-600">
              Something went wrong with the payment
            </h1>
            <div className="flex items-center justify-center mt-8 animate-bounce">
              {/* <XCircleIcon className="text-primary-600 w-28 " /> */}
            </div>

            <button
              className="bg-primary-500 px-5 py-2 rounded-md text-white font-medium text-xl mt-10"
            //   onClick={handleClose}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProduct;

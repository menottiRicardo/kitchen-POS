import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  Order as OrderType,
  Product as ProductType,
  ProductsOrdered,
  Status,
} from "../src/API";
import { ProductListAtom } from "../src/state/atoms";
import OrderSlider from "./SlideOvers/OrderSlider";

const OrderDiv = ({ order }: { order: OrderType }) => {
  const productsList = useRecoilValue<ProductType[]>(ProductListAtom);
  const [open, setOpen] = useState(false);

  const showProducts = (produu: ProductsOrdered) => {
    try {
      const product = productsList.filter((prod) => prod.id === produu.id)[0];
      const status = (produu.qty as number) - (produu.remaing as number);
      if (produu.status === Status.PREPARED) {
        return null;
      }
      return (
        <div className="flex justify-between items-center">
          <p
            className={`text-white font-medium text-xl`}
          >
            {product?.name}
          </p>
          <span className="text-black font-medium text-xl">{status}</span>
        </div>
      );
    } catch (error) {
      console.log("error", error);
      return <p></p>;
    }
  };

  return (
    <div
      className={`bg-primary-700 w-56 rounded-md shadow-md px-3 py-2 max-h-96`}
      onClick={() => setOpen(true)}
    >
      <OrderSlider open={open} setOpen={setOpen} id={order.id} order={order} />
      <h3 className="font-bold text-gray-600 text-lg">{order.name}</h3>
      {order.products &&
        order.products.map((prod) => (
          <div key={prod?.id}>{showProducts(prod as ProductsOrdered)}</div>
        ))}
    </div>
  );
};

export default OrderDiv;

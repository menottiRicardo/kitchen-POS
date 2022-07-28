import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentOrderAtom, ordersAtom, orderType } from "../src/state/atoms";
import { ProductListAtom } from "../src/state/selectors";
import SmallProduct from "./SmallProduct";

const Checkout = () => {
  const [orders, setOrders] = useRecoilState(ordersAtom);
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderAtom);
  const orderProducts = useRecoilValue(ProductListAtom);
  console.log("orderProducts", orderProducts);
  console.log("orders", orders);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const addOrder = () => {
    const newOrder: orderType = {
      id: Math.random(),
      name,
      products: [] as string[],
    };
    setOrders([...orders, newOrder]);
    setOpen(false);
    setName("");
  };

  return (
    <div>
      <p className="font-bold text-xl mt-4">Mesa #2</p>
      <div
        onClick={() => setOpen(true)}
        className="border-2 border-dashed bg-white px-3 py-2 rounded-lg my-2 border-black text-center font-medium"
      >
        Anadir Nueva Orden
      </div>
      {open && (
        <div className="flex items-center justify-between">
          <input
            placeholder="Nombre"
            value={name}
            className="bg-white rounded-lg py-2 px-3 outline-none w-10/12"
            onChange={(e) => setName(e.target.value)}
          />
          <BiBookAdd className="text-2xl mr-2" onClick={addOrder} />
        </div>
      )}

      {orders.length > 0 && (
        <div className="bg-white px-3 py-2 rounded-md mt-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`border-b my-2 px-2 ${
                currentOrder[0]?.id === order.id
                  ? "font-bold bg-slate-400 rounded-md"
                  : ""
              }`}
              onClick={() => setCurrentOrder([order])}
            >
              {order.name}
            </div>
          ))}
        </div>
      )}
      {orderProducts &&
        orderProducts.map((product) => (
          <SmallProduct
            key={product.id}
            name={product.name}
            id={product.id}
            notes={"2"}
            status={"ready"}
          ></SmallProduct>
        ))}
    </div>
  );
};

export default Checkout;

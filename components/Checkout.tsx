import { API } from "aws-amplify";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CreateOrderInput,
  ModelIDInput,
  Order,
  Status,
  UpdateOrderInput,
} from "../src/API";
import { createOrder } from "../src/graphql/mutations";
import { listOrders } from "../src/graphql/queries";
import { currentOrderAtom, ordersAtom, orderType } from "../src/state/atoms";
import { ProductListAtom } from "../src/state/selectors";
import SmallProduct from "./SmallProduct";

const Checkout = () => {
  const [orders, setOrders] = useRecoilState(ordersAtom);
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderAtom);
  const orderProducts = useRecoilValue(ProductListAtom);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  const { tableId, tableNumber } = router.query;

  const addOrder = async () => {
    const newOrder: CreateOrderInput = {
      tenantId: "2",
      name,
      tableId: tableId as string,
      status: Status.created,
    };

    const created: any = await API.graphql({
      query: createOrder,
      variables: { input: newOrder },
    });

    const orderCreated = created.data.createOrder;
    setOrders([...orders, orderCreated]);
    setOpen(false);
    setName("");
  };

  const updateOrder = () => {
    console.log(orderProducts);
    const updatedOrder: UpdateOrderInput = {
      id: currentOrder.id,
    };
  };

  useEffect(() => {
    const getOrders = async () => {
      const { tableId } = router.query;

      const table: ModelIDInput = {
        eq: tableId as string,
      };

      const rawOrdes: any = await API.graphql({
        query: listOrders,
        variables: { filter: { tableId: table } },
      });

      const orderItems: Order[] = await rawOrdes.data.listOrders.items;

      // const filterCancelled = orderItems.filter(
      //   (ord) => ord.status !== Status.cancelled
      // );

      // const orders = filterCancelled.filter(
      //   (ord) => ord.status === Status.paid
      // );

      setOrders(orderItems);
    };
    getOrders();
  }, []);

  return (
    <div>
      <p className="font-bold text-xl mt-4">Mesa #{tableNumber}</p>
      <div
        onClick={() => setOpen(true)}
        className="border-2 border-dashed bg-white px-3 py-2 rounded-lg my-2 border-primary-500 text-center font-medium"
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
              className={`border-b my-2 p-2 ${
                currentOrder?.id === order.id
                  ? "font-bold bg-primary-400 rounded-md text-white"
                  : ""
              }`}
              onClick={() => setCurrentOrder(order)}
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

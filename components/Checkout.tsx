import { API } from "aws-amplify";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CreateOrderInput,
  ModelIDInput,
  Order,
  OrderProducts,
  Product,
  Status,
  UpdateOrderInput,
} from "../src/API";
import { createOrder, updateOrder } from "../src/graphql/mutations";
import { listOrderProducts, listOrders } from "../src/graphql/queries";
import {
  currentOrderAtom,
  ordersAtom,
  orderType,
  ProductListAtom,
} from "../src/state/atoms";

import SmallProduct from "./SmallProduct";

const Checkout = () => {
  const [orders, setOrders] = useRecoilState(ordersAtom);
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderAtom);
  const [orderProducts, setOrderProducts] = useRecoilState(ProductListAtom);
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
      total: 0,
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

  const getProducts = async (order: Order) => {
    setCurrentOrder(order);
    const orderID: ModelIDInput = {
      eq: order.id,
    };
    const rawProducts: any = await API.graphql({
      query: listOrderProducts,
      variables: { filter: { orderID: orderID } },
    });
    const productsTobeMapped = rawProducts.data.listOrderProducts.items;
    const products = productsTobeMapped.map((prod: OrderProducts) => {
      const id = prod.id;
      const product = prod.product;
      return { ...product, id };
    });

    setOrderProducts(products);
  };

  useEffect(() => {
    if (currentOrder.id === undefined) return;
    console.log("here");
    const getNewList = async () => {
      const orderID: ModelIDInput = {
        eq: currentOrder.id,
      };
      const rawProducts: any = await API.graphql({
        query: listOrderProducts,
        variables: { filter: { orderID: orderID } },
      });
      const productsTobeMapped = rawProducts.data.listOrderProducts.items;

      const products = productsTobeMapped.map((prod: OrderProducts) => {
        const id = prod.id;
        const product = prod.product;
        return { ...product, id };
      });

      setOrderProducts(products);
    };

    getNewList();
  }, [currentOrder]);

  const ordenar = async () => {
    const newOrder: UpdateOrderInput = {
      id: currentOrder.id,
      status: Status.ordered,
    };

    const rawOrder: any = await API.graphql({
      query: updateOrder,
      variables: { input: newOrder },
    });

    const orderUpdated = rawOrder.data.updateOrder;
    setCurrentOrder(orderUpdated);
    console.log(rawOrder);
  };

  const renderButton: () => JSX.Element = () => {
    console.log(currentOrder.status);

    switch (currentOrder.status) {
      case Status.created:
        return (
          <button
            className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50"
            onClick={ordenar}
          >
            Ordenar
          </button>
        );

      case Status.ordered:
        return (
          <button className="animate-pulse bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Preparando
          </button>
        );

      case Status.prepared:
        return (
          <button className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Preparada
          </button>
        );

      default:
        return (
          <button className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50">
            Seleccione una Orden
          </button>
        );
    }
  };

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
              onClick={() => getProducts(order)}
            >
              {order.name}
            </div>
          ))}
        </div>
      )}

      <div className="overflow-y-auto h-[27rem] ">
        {orderProducts.length > 0 &&
          orderProducts.map((product: Product) => (
            <SmallProduct
              key={product.id}
              name={product.name}
              id={product.id}
              notes={"2"}
              price={product.price}
            ></SmallProduct>
          ))}
      </div>

      <div className="">{renderButton()}</div>
    </div>
  );
};

export default Checkout;

import { API, DataStore, graphqlOperation } from "aws-amplify";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import OrderDiv from "../components/OrderDiv";

import { Order as OrderType, Status } from "../src/API";
import { listProducts } from "../src/graphql/queries";
import { Order } from "../src/models";
import { ProductListAtom } from "../src/state/atoms";

export default function Web() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const setProducts = useSetRecoilState(ProductListAtom);
  useEffect(() => {
    const getProducts = async () => {
      const product: any = await API.graphql(graphqlOperation(listProducts));

      setProducts(product.data.listProducts.items);
    };

    getProducts();

    DataStore.observeQuery(Order, (o) =>
      o.status("eq", Status.ORDERED)
    ).subscribe((msg) => setOrders(msg.items as any));
  }, []);

  console.log(orders);
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>

      {orders.length > 0 ? (
        <div className="min-h-screen w-full grid grid-cols-4 p-4 gap-4 overflow-y-auto">
          {orders.map((ord) => (
            <OrderDiv key={ord.id} order={ord} />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-4xl text-center text-primary-300 mt-20">No Hay Ordenes Disponibles</h1>
      )}
    </>
  );
}

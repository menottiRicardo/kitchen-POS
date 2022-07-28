import { selector } from "recoil";
import { ProductType } from "../../pages/menu";
import { currentOrderAtom, ordersAtom, ResProducts } from "./atoms";

export const ProductListAtom = selector({
  key: "ProductListAtom", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const order = get(currentOrderAtom);
    const products = get(ResProducts);
    if (order[0] === undefined) return undefined;
    const ProdList = products.filter((product) =>
      order[0].products.includes(product.id)
    );
    return ProdList;
  },
});

export const SaveProductAtom = selector({
  key: "SaveProductAtom", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const order = get(currentOrderAtom);
  },
  set: ({ set, get }, newValue) => {
    set(currentOrderAtom, [newValue] as any);

    const currentOrderId = get(currentOrderAtom)[0].id;
    const orders = get(ordersAtom);

    const otherOrders = orders.filter((order) => order.id !== currentOrderId);
    const filterOrder = orders.filter(
      (order) => order.id === currentOrderId
    )[0];

    const editedOrder = {
      ...filterOrder,
      // @ts-ignore: Unreachable code error
      products: [...filterOrder.products, ...newValue.products],
    };

    set(ordersAtom, [...otherOrders, editedOrder]);
  },
});

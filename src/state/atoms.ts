import { atom } from "recoil";
import { ProductType } from "../../pages/menu";

export type orderType = {
  name: string;
  id: number;
  products: string[];
};
export const ordersAtom = atom({
  key: "orders",
  default: [] as orderType[],
});

export const currentOrderAtom = atom({
  key: "currentOrder",
  default: [] as orderType[],
});

export const ResProducts = atom({
  key: "ResProducts",
  default: [] as ProductType[],
});

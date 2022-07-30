import { atom } from "recoil";
import { Product } from "../API";

export const ProductListAtom = atom({
  key: "ProductListAtom",
  default: [] as Product[]
});


import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentOrderAtom, orderType } from "../src/state/atoms";
import { SaveProductAtom } from "../src/state/selectors";

interface ProductProps {
  categoryId?: string;
  createdAt?: string;
  description: string;

  id: string;
  name: string;
  price: number;
  qty?: number;
  tenantId?: string;
  updatedAt?: string;
  image?: string;
}

const addProduct = async () => {};
export type Flavor = {
  id: string;
  name: string;
};

const Product = ({ name, id, price, description, image }: ProductProps) => {
  const [add, setAdd] = useState(false);
  const currentOrder = useRecoilValue(currentOrderAtom);
  const saveNewProduct = useSetRecoilState(SaveProductAtom);
  const open = () => {
    setAdd(true);
  };

  const addNewProduct = () => {
    if (currentOrder === undefined) return;
    const newOrder = {
      id: currentOrder.id,
      name: currentOrder.name,
      products: [...currentOrder.products],
    };
    saveNewProduct(newOrder as any);
  };

  return (
    <div className="bg-white shadow-md rounded-md w-56 my-3" onClick={open}>
      {/* image */}

      <div className="h-28 w-54 bg-gray-400 rounded-t-md relative"></div>
      {/* )} */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>
        <p className="font-bold text-xl">${price}</p>

        {add && (
          <div>
            {/* select size */}

            <button
              className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4"
              onClick={addNewProduct}
            >
              Agregar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;

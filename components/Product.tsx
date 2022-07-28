import { Dispatch, SetStateAction, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Dropdown from "ui/components/Dropdown";
import { currentOrderAtom, orderType } from "../src/state/atoms";
import { SaveProductAtom } from "../src/state/selectors";

interface ProductProps {
  categoryId?: string;
  createdAt?: string;
  description: string;
  flavors: string[];
  id: string;
  name: string;
  price: number;
  qty?: number;
  tenantId?: string;
  updatedAt?: string;
}

const renderFlavorsComponent = (
  flavors: string[],
  setFlavor: Dispatch<SetStateAction<string>>,
  flavor: string
) => {
  switch (flavors.length) {
    case 0:
      break;

    default:
      return (
        <div className="my-2">
          <Dropdown title={flavor} options={flavors} setFlavor={setFlavor} />
        </div>
      );
  }
};

const addProduct = async () => {};
export type Flavor = {
  id: string;
  name: string;
};

const Product = ({ name, flavors, id, price, description }: ProductProps) => {
  const [add, setAdd] = useState(false);
  const [flavor, setFlavor] = useState("Sabor");
  const currentOrder = useRecoilValue(currentOrderAtom);
  const saveNewProduct = useSetRecoilState(SaveProductAtom);
  const open = () => {
    setAdd(true);
  };

  const addNewProduct = () => {
    const currentOrderValue = currentOrder[0];
    if (currentOrder[0] === undefined) return;
    const newOrder = {
      id: currentOrderValue.id,
      name: currentOrderValue.name,
      products: [...currentOrderValue.products, id],
    };
    saveNewProduct(newOrder as any);
  };

  return (
    <div className="bg-white shadow-md rounded-md w-54 h-76" onClick={open}>
      {/* image */}
      <div className="h-28 w-54 bg-gray-400 rounded-t-md"></div>
      {/* title */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>
        <p className="font-bold text-xl">${price}</p>

        <div className="flex justify-around items-center">
          {renderFlavorsComponent(flavors, setFlavor, flavor)}
        </div>
        {add && (
          <div>
            {/* select size */}

            <button
              className="bg-gray-400 w-full rounded-xl py-2 shadow-md"
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

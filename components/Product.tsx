import { API, Storage } from "aws-amplify";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CreateOrderProductsInput, Product as ProductType } from "../src/API";
import { createOrderProducts } from "../src/graphql/mutations";
import { currentOrderAtom, OrderProducstAtom } from "../src/state/atoms";
import { SaveProductAtom } from "../src/state/selectors";

interface ProductProps {
  product: ProductType;
}

export type Flavor = {
  id: string;
  name: string;
};

const Product = ({ product }: ProductProps) => {
  const { price, name, description, image } = product;
  const [add, setAdd] = useState(false);
  const currentOrder = useRecoilValue(currentOrderAtom);
  const [orderProductAtom, setOrderProductAtom] =
    useRecoilState(OrderProducstAtom);
  const saveNewProduct = useSetRecoilState(SaveProductAtom);

  const open = () => {
    if (add === false) return setAdd(true);
  };

  const addNewProduct = async () => {
    if (orderProductAtom.id === undefined) {
      const createNewRelation: CreateOrderProductsInput = {
        orderID: currentOrder.id,
        productID: product.id,
      };

      const created: any = await API.graphql({
        query: createOrderProducts,
        variables: { input: createNewRelation },
      });
      saveNewProduct(created.data.createOrderProducts);

      setAdd(false);
    }
  };

  async function getProductById() {
    
    const s3Image = await Storage.get(image as string);
    
    console.log("product:", s3Image);
  }

  const renderImage = () => {
    getProductById()
    return <div>hola</div>
  }

  return (
    <div
      className={`bg-white shadow-md rounded-md w-56 my-3 ${
        add === false ? "max-h-52" : ""
      }`}
      onClick={open}
    >
      {/* image */}
      {image !== "" ? (
        renderImage()
      ) : (
        <div className="h-28 w-54 bg-gray-400 rounded-t-md relative"></div>
      )}

      {/* )} */}

      <div className="px-3 pb-3">
        <h2 className="font-medium text-xl uppercase">{name}</h2>

        <p className="text-gray-500 text-sm my-2">{description}</p>
        <p className="font-bold text-xl">${price}</p>

        {add && (
          <div className="relative">
            {/* select size */}

            <button
              className="bg-primary-400 w-full rounded-xl py-2 shadow-md text-white font-medium mt-4 z-50"
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

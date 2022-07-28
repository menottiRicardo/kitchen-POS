import React, { ReactElement, useEffect, useState } from "react";
import { MenuCategory } from "ui/components";
import { BiFoodMenu } from "react-icons/bi";
import Product from "../components/Product";
import Checkout from "../components/Checkout";
import { useSetRecoilState } from "recoil";
import { ResProducts } from "../src/state/atoms";
import LeftMenu from "../components/Layout/LeftMenu";

const getProducts = async (
  id: string,
  products: ProductType[]
): Promise<ProductType[]> => {
  switch (id) {
    case "999":
      return products;

    default:
      const newList = products.filter((product) => product.categoryId === id);
      return newList;
  }
};
export type ProductType = {
  categoryId: string;
  createdAt: string;
  description: string;
  flavors: string[];
  id: string;
  name: string;
  qty: number;
  sizes: any;
  tenantId: string;
  updatedAt: string;
};

const Table = ({ categories, products }) => {
  const [selected, setSelected] = useState("999");
  const [productList, setProductsList] = useState<ProductType[]>([]);
  const setProducts = useSetRecoilState(ResProducts);

  useEffect(() => {
    const loadProducts = async () => {
      const newProducts = await getProducts(selected, products);

      setProductsList(newProducts);
    };
    loadProducts();
  }, [selected]);

  useEffect(() => {
    setProducts(products);
  });
  return (
    <div className="flex relative">
      <div className="w-3/4 bg-slate-50 relative">
        <ul className="flex mt-2 p-4 overflow-x-auto">
          <MenuCategory
            title="Todo"
            icon={<BiFoodMenu size={"1.5em"} />}
            selected={selected}
            tableId={"tableId"}
            setSelected={setSelected}
            id="999"
          />
          {categories.map((category: any) => (
            <MenuCategory
              title={category.name}
              icon={<BiFoodMenu size={"1.5em"} />}
              selected={selected}
              tableId={"tableId"}
              key={category.id}
              id={category.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="overflow-scroll w-full h-[43rem] px-2 pb-5">
          <div className="grid grid-cols-3 gap-4">
            {productList.map((product: any) => (
              <Product
                key={product.id}
                // id={product.id}
                // name={product.name}
                // description={product.description}
                price={product.sizes.price ?? product.sizes.S}
                // flavors={product.flavors}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-1/3 px-2">
        <Checkout />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const rawCategories = await fetch(
    "https://hqvrl2yhj3.execute-api.us-east-1.amazonaws.com/getCategories?tenantId=123"
  );
  const categories = await rawCategories.json();

  const rawProducts = await fetch(
    "https://hqvrl2yhj3.execute-api.us-east-1.amazonaws.com/getProducts?tenantId=123&categoryId=999"
  );
  const products = await rawProducts.json();

  return {
    props: {
      categories: categories.categories,
      products: products.products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

Table.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default Table;

import { API, graphqlOperation } from "aws-amplify";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import NewProduct from "../components/Modals/NewProduct";
import Product from "../components/Product";
import CategorySlider from "../components/SlideOvers/CategorySlider";
import { Category, ModelIDInput, Product as ProductType } from "../src/API";
import { listCategories, listProducts } from "../src/graphql/queries";


const MenuSettings = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [openCategorySlider, setOpenCategorySlider] = useState<boolean>(false);
  const [openNewProduct, setOpenNewProduct] = useState<boolean>(false);

  const getCategories = async () => {
    const tenantId: ModelIDInput = {
      eq: "2",
    };

    const category: any = await API.graphql(
      graphqlOperation(listCategories, {
        filter: {
          tenantId,
        },
      })
    );

    setCategories(category.data.listCategories.items);
  };

  const getProducts = async () => {
    const tenantId: ModelIDInput = {
      eq: "2",
    };

    const product: any = await API.graphql(
      graphqlOperation(listProducts, {
        filter: {
          tenantId,
        },
      })
    );

    setProducts(product.data.listProducts.items);
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <div className="p-4">
      <CategorySlider
        open={openCategorySlider}
        setOpen={setOpenCategorySlider}
      />
      <NewProduct
        open={openNewProduct}
        setOpen={setOpenNewProduct}
        categories={categories}
      />
      {/* categories */}
      <div className="flex">
        <div
          className={`flex flex-col justify-center items-center rounded-md p-4 bg-gray-300 shadow-sm text-gray-500 border-2 border-gray-100 mx-2 w-20 h-20 border-dashed text-xl`}
          onClick={() => setOpenCategorySlider(true)}
        >
          +
        </div>

        {categories.length > 0 &&
          categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col justify-center items-center rounded-md p-4 bg-primary-300 shadow-sm text-gray-100 border-2 border-gray-100 mx-2 w-20 h-20 text-xl`}
            >
              {category.name}
            </div>
          ))}
      </div>

      {/* products */}
      <div className="mt-10 flex">
        <div className="grid grid-cols-4 gap-4">
          <div
            className="bg-gray-300 text-gray-500 shadow-md rounded-md w-56 h-44 flex items-center justify-center text-4xl border-dashed border-2"
            onClick={() => setOpenNewProduct(true)}
          >
            +
          </div>

          {products.length > 0 &&
            products.map((prod) => (
              <div
                className="bg-white shadow-md rounded-md w-56 h-44"
                key={prod.id}
              >
                {/* image */}

                <div className="h-28 w-54 bg-gray-400 rounded-t-md relative"></div>
                {/* )} */}

                <div className="px-3 pb-3">
                  <h2 className="font-medium text-xl uppercase">{prod.name}</h2>

                  <p className="text-gray-500 text-sm my-2">
                    {prod.description}
                  </p>
                  <p className="font-bold text-xl">${prod.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

MenuSettings.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default MenuSettings;

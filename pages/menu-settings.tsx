import { API, graphqlOperation } from "aws-amplify";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import CategorySlider from "../components/SlideOvers/CategorySlider";
import { Category, CreateCategoryInput, ModelIDInput } from "../src/API";
import { createCategory } from "../src/graphql/mutations";

import { listCategories } from "../src/graphql/queries";

const MenuSettings = () => {
  const [categorySelected, setCategorySelected] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [openCategorySlider, setOpenCategorySlider] = useState<boolean>(false);

  

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
    console.log("af", category);
    setCategories(category.data.listCategories.items);
  };

  const openSlider = (category: Category) => {
    setCategorySelected(category);
    setOpenCategorySlider(true);
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log("cate", categories);
  return (
    <div className="p-4">
      <CategorySlider
        open={openCategorySlider}
        setOpen={setOpenCategorySlider}
        
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
            <div>
              <div
                className={`flex flex-col justify-center items-center rounded-md p-4 bg-primary-300 shadow-sm text-gray-100 border-2 border-gray-100 mx-2 w-20 h-20 text-xl`}
              >
                {category.name}
              </div>
            </div>
          ))}
      </div>

      {/* products */}
      <div className="mt-10">
        <div className="bg-white shadow-md rounded-md w-56 h-72 flex items-center justify-center text-4xl border-dashed border-2 mx-2">
          +
        </div>
      </div>
    </div>
  );
};

MenuSettings.getLayout = function getLayout(page: ReactElement) {
  return <LeftMenu>{page}</LeftMenu>;
};

export default MenuSettings;

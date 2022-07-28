import { API, graphqlOperation } from "aws-amplify";
import React, { ReactElement, useEffect, useState } from "react";
import LeftMenu from "../components/Layout/LeftMenu";
import {
  ModelIDInput,
  ModelIDKeyConditionInput,
  CreateCategoryInput,
} from "../src/API";

import { listCategories } from "../src/graphql/queries";

const MenuSettings = () => {
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState<any>([]);

  const createCategory = async () => {
    const newTable: CreateCategoryInput = {
      full: false,
      number: categories.length + 1,
      tenantId: "2",
    };
  };

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

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-4">
      {/* categories */}
      <div>
        <div
          className={`flex flex-col justify-center items-center rounded-md p-4 bg-gray-300 shadow-sm text-gray-500 border-2 border-gray-100 mx-2 w-20 h-20 border-dashed text-xl`}
          onClick={createCategory}
        >
          +
        </div>
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  id?: string | null,
  tenantId: string,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
  status?: Status | null,
};

export enum Status {
  created = "created",
  ordered = "ordered",
  prepared = "prepared",
  paid = "paid",
  cancelled = "cancelled",
}


export type ModelOrderConditionInput = {
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  total?: ModelStringInput | null,
  tableId?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  tenantId: string,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
  table?: Table | null,
  status?: Status | null,
  createdAt: string,
  updatedAt: string,
};

export type Table = {
  __typename: "Table",
  id: string,
  tenantId?: string | null,
  full?: boolean | null,
  number?: number | null,
  orders?: Order | null,
  createdAt: string,
  updatedAt: string,
  tableOrdersId?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  tenantId?: string | null,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
  status?: Status | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateTableInput = {
  id?: string | null,
  tenantId?: string | null,
  full?: boolean | null,
  number?: number | null,
  tableOrdersId?: string | null,
};

export type ModelTableConditionInput = {
  tenantId?: ModelIDInput | null,
  full?: ModelBooleanInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelTableConditionInput | null > | null,
  or?: Array< ModelTableConditionInput | null > | null,
  not?: ModelTableConditionInput | null,
  tableOrdersId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTableInput = {
  id: string,
  tenantId?: string | null,
  full?: boolean | null,
  number?: number | null,
  tableOrdersId?: string | null,
};

export type DeleteTableInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  tenantId?: string | null,
  name?: string | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  categoryProductsId?: string | null,
};

export type ModelProductConditionInput = {
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  categoryProductsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  tenantId?: string | null,
  name?: string | null,
  category?: Category | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  categoryProductsId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  tenantId?: string | null,
  name?: string | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type UpdateProductInput = {
  id: string,
  tenantId?: string | null,
  name?: string | null,
  price?: number | null,
  image?: string | null,
  description?: string | null,
  categoryProductsId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  tenantId?: string | null,
  name?: string | null,
};

export type ModelCategoryConditionInput = {
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  tenantId?: string | null,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  total?: ModelStringInput | null,
  tableId?: ModelIDInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelTableFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  full?: ModelBooleanInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelTableFilterInput | null > | null,
  or?: Array< ModelTableFilterInput | null > | null,
  not?: ModelTableFilterInput | null,
  tableOrdersId?: ModelIDInput | null,
};

export type ModelTableConnection = {
  __typename: "ModelTableConnection",
  items:  Array<Table | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  categoryProductsId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTableMutationVariables = {
  input: CreateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type CreateTableMutation = {
  createTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type UpdateTableMutationVariables = {
  input: UpdateTableInput,
  condition?: ModelTableConditionInput | null,
};

export type UpdateTableMutation = {
  updateTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type DeleteTableMutationVariables = {
  input: DeleteTableInput,
  condition?: ModelTableConditionInput | null,
};

export type DeleteTableMutation = {
  deleteTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTableQueryVariables = {
  id: string,
};

export type GetTableQuery = {
  getTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type ListTablesQueryVariables = {
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTablesQuery = {
  listTables?:  {
    __typename: "ModelTableConnection",
    items:  Array< {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      category?:  {
        __typename: "Category",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      price?: number | null,
      image?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      categoryProductsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    tenantId: string,
    name?: string | null,
    total?: string | null,
    tableId?: string | null,
    table?:  {
      __typename: "Table",
      id: string,
      tenantId?: string | null,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        status?: Status | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
    } | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTableSubscription = {
  onCreateTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type OnUpdateTableSubscription = {
  onUpdateTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type OnDeleteTableSubscription = {
  onDeleteTable?:  {
    __typename: "Table",
    id: string,
    tenantId?: string | null,
    full?: boolean | null,
    number?: number | null,
    orders?:  {
      __typename: "Order",
      id: string,
      tenantId: string,
      name?: string | null,
      total?: string | null,
      tableId?: string | null,
      table?:  {
        __typename: "Table",
        id: string,
        tenantId?: string | null,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
      } | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      tenantId?: string | null,
      name?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    price?: number | null,
    image?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    tenantId?: string | null,
    name?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        tenantId?: string | null,
        name?: string | null,
        price?: number | null,
        image?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

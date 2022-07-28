/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  id?: string | null,
  tenantId: string,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
};

export type ModelOrderConditionInput = {
  name?: ModelStringInput | null,
  total?: ModelStringInput | null,
  tableId?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
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

export type Order = {
  __typename: "Order",
  id: string,
  tenantId: string,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
  table?: Table | null,
  createdAt: string,
  updatedAt: string,
};

export type Table = {
  __typename: "Table",
  id: string,
  tenantId: string,
  full?: boolean | null,
  number?: number | null,
  orders?: Order | null,
  createdAt: string,
  updatedAt: string,
  tableOrdersId?: string | null,
  tableOrdersTenantId?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  tenantId: string,
  name?: string | null,
  total?: string | null,
  tableId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
  tenantId: string,
};

export type CreateTableInput = {
  id?: string | null,
  tenantId: string,
  full?: boolean | null,
  number?: number | null,
  tableOrdersId?: string | null,
  tableOrdersTenantId?: string | null,
};

export type ModelTableConditionInput = {
  full?: ModelBooleanInput | null,
  number?: ModelIntInput | null,
  and?: Array< ModelTableConditionInput | null > | null,
  or?: Array< ModelTableConditionInput | null > | null,
  not?: ModelTableConditionInput | null,
  tableOrdersId?: ModelIDInput | null,
  tableOrdersTenantId?: ModelIDInput | null,
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
  tenantId: string,
  full?: boolean | null,
  number?: number | null,
  tableOrdersId?: string | null,
  tableOrdersTenantId?: string | null,
};

export type DeleteTableInput = {
  id: string,
  tenantId: string,
};

export type CreateProductInput = {
  id?: string | null,
  tenantId: string,
  name?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  tenantId: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  tenantId: string,
  name?: string | null,
};

export type DeleteProductInput = {
  id: string,
  tenantId: string,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  tenantId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  total?: ModelStringInput | null,
  tableId?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  tableOrdersTenantId?: ModelIDInput | null,
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
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
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
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
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
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
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
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
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
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
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
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
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
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
  tenantId: string,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  id?: string | null,
  tenantId?: ModelIDKeyConditionInput | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTableQueryVariables = {
  id: string,
  tenantId: string,
};

export type GetTableQuery = {
  getTable?:  {
    __typename: "Table",
    id: string,
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
  } | null,
};

export type ListTablesQueryVariables = {
  id?: string | null,
  tenantId?: ModelIDKeyConditionInput | null,
  filter?: ModelTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTablesQuery = {
  listTables?:  {
    __typename: "ModelTableConnection",
    items:  Array< {
      __typename: "Table",
      id: string,
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
  tenantId: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  id?: string | null,
  tenantId?: ModelIDKeyConditionInput | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      tenantId: string,
      name?: string | null,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
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
      tenantId: string,
      full?: boolean | null,
      number?: number | null,
      orders?:  {
        __typename: "Order",
        id: string,
        tenantId: string,
        name?: string | null,
        total?: string | null,
        tableId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      tableOrdersId?: string | null,
      tableOrdersTenantId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTableSubscription = {
  onCreateTable?:  {
    __typename: "Table",
    id: string,
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
  } | null,
};

export type OnUpdateTableSubscription = {
  onUpdateTable?:  {
    __typename: "Table",
    id: string,
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
  } | null,
};

export type OnDeleteTableSubscription = {
  onDeleteTable?:  {
    __typename: "Table",
    id: string,
    tenantId: string,
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
        tenantId: string,
        full?: boolean | null,
        number?: number | null,
        createdAt: string,
        updatedAt: string,
        tableOrdersId?: string | null,
        tableOrdersTenantId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    tableOrdersId?: string | null,
    tableOrdersTenantId?: string | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    tenantId: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

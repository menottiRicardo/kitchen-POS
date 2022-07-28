/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!, $tenantId: ID!) {
    getOrder(id: $id, tenantId: $tenantId) {
      id
      tenantId
      name
      total
      tableId
      table {
        id
        tenantId
        full
        number
        orders {
          id
          tenantId
          name
          total
          tableId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        tableOrdersId
        tableOrdersTenantId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $tenantId: ModelIDKeyConditionInput
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      tenantId: $tenantId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        tenantId
        name
        total
        tableId
        table {
          id
          tenantId
          full
          number
          createdAt
          updatedAt
          tableOrdersId
          tableOrdersTenantId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!, $tenantId: ID!) {
    getTable(id: $id, tenantId: $tenantId) {
      id
      tenantId
      full
      number
      orders {
        id
        tenantId
        name
        total
        tableId
        table {
          id
          tenantId
          full
          number
          createdAt
          updatedAt
          tableOrdersId
          tableOrdersTenantId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tableOrdersId
      tableOrdersTenantId
    }
  }
`;
export const listTables = /* GraphQL */ `
  query ListTables(
    $id: ID
    $tenantId: ModelIDKeyConditionInput
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTables(
      id: $id
      tenantId: $tenantId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        tenantId
        full
        number
        orders {
          id
          tenantId
          name
          total
          tableId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        tableOrdersId
        tableOrdersTenantId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!, $tenantId: ID!) {
    getProduct(id: $id, tenantId: $tenantId) {
      id
      tenantId
      name
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $tenantId: ModelIDKeyConditionInput
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      tenantId: $tenantId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        tenantId
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

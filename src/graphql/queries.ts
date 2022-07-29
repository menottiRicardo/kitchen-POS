/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
          table {
            id
            tenantId
            full
            number
            createdAt
            updatedAt
            tableOrdersId
          }
          status
          products {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        tableOrdersId
      }
      status
      products {
        items {
          id
          orderID
          productID
          order {
            id
            tenantId
            name
            total
            tableId
            status
            createdAt
            updatedAt
          }
          product {
            id
            tenantId
            name
            price
            image
            description
            createdAt
            updatedAt
            categoryProductsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          orders {
            id
            tenantId
            name
            total
            tableId
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          tableOrdersId
        }
        status
        products {
          items {
            id
            orderID
            productID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTable = /* GraphQL */ `
  query GetTable($id: ID!) {
    getTable(id: $id) {
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
          orders {
            id
            tenantId
            name
            total
            tableId
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          tableOrdersId
        }
        status
        products {
          items {
            id
            orderID
            productID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tableOrdersId
    }
  }
`;
export const listTables = /* GraphQL */ `
  query ListTables(
    $filter: ModelTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          table {
            id
            tenantId
            full
            number
            createdAt
            updatedAt
            tableOrdersId
          }
          status
          products {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        tableOrdersId
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      tenantId
      name
      category {
        id
        tenantId
        name
        products {
          items {
            id
            tenantId
            name
            price
            image
            description
            createdAt
            updatedAt
            categoryProductsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      image
      description
      orders {
        items {
          id
          orderID
          productID
          order {
            id
            tenantId
            name
            total
            tableId
            status
            createdAt
            updatedAt
          }
          product {
            id
            tenantId
            name
            price
            image
            description
            createdAt
            updatedAt
            categoryProductsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      categoryProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        name
        category {
          id
          tenantId
          name
          products {
            nextToken
          }
          createdAt
          updatedAt
        }
        price
        image
        description
        orders {
          items {
            id
            orderID
            productID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        categoryProductsId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      tenantId
      name
      products {
        items {
          id
          tenantId
          name
          category {
            id
            tenantId
            name
            createdAt
            updatedAt
          }
          price
          image
          description
          orders {
            nextToken
          }
          createdAt
          updatedAt
          categoryProductsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantId
        name
        products {
          items {
            id
            tenantId
            name
            price
            image
            description
            createdAt
            updatedAt
            categoryProductsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderProducts = /* GraphQL */ `
  query GetOrderProducts($id: ID!) {
    getOrderProducts(id: $id) {
      id
      orderID
      productID
      order {
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
            status
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          tableOrdersId
        }
        status
        products {
          items {
            id
            orderID
            productID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      product {
        id
        tenantId
        name
        category {
          id
          tenantId
          name
          products {
            nextToken
          }
          createdAt
          updatedAt
        }
        price
        image
        description
        orders {
          items {
            id
            orderID
            productID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        categoryProductsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderID
        productID
        order {
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
          }
          status
          products {
            nextToken
          }
          createdAt
          updatedAt
        }
        product {
          id
          tenantId
          name
          category {
            id
            tenantId
            name
            createdAt
            updatedAt
          }
          price
          image
          description
          orders {
            nextToken
          }
          createdAt
          updatedAt
          categoryProductsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

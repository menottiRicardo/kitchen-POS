/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createTable = /* GraphQL */ `
  mutation CreateTable(
    $input: CreateTableInput!
    $condition: ModelTableConditionInput
  ) {
    createTable(input: $input, condition: $condition) {
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
export const updateTable = /* GraphQL */ `
  mutation UpdateTable(
    $input: UpdateTableInput!
    $condition: ModelTableConditionInput
  ) {
    updateTable(input: $input, condition: $condition) {
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
export const deleteTable = /* GraphQL */ `
  mutation DeleteTable(
    $input: DeleteTableInput!
    $condition: ModelTableConditionInput
  ) {
    deleteTable(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createOrderProducts = /* GraphQL */ `
  mutation CreateOrderProducts(
    $input: CreateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    createOrderProducts(input: $input, condition: $condition) {
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
export const updateOrderProducts = /* GraphQL */ `
  mutation UpdateOrderProducts(
    $input: UpdateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    updateOrderProducts(input: $input, condition: $condition) {
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
export const deleteOrderProducts = /* GraphQL */ `
  mutation DeleteOrderProducts(
    $input: DeleteOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    deleteOrderProducts(input: $input, condition: $condition) {
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

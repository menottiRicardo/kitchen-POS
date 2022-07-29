/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateTable = /* GraphQL */ `
  subscription OnCreateTable {
    onCreateTable {
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
export const onUpdateTable = /* GraphQL */ `
  subscription OnUpdateTable {
    onUpdateTable {
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
export const onDeleteTable = /* GraphQL */ `
  subscription OnDeleteTable {
    onDeleteTable {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateOrderProducts = /* GraphQL */ `
  subscription OnCreateOrderProducts {
    onCreateOrderProducts {
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
export const onUpdateOrderProducts = /* GraphQL */ `
  subscription OnUpdateOrderProducts {
    onUpdateOrderProducts {
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
export const onDeleteOrderProducts = /* GraphQL */ `
  subscription OnDeleteOrderProducts {
    onDeleteOrderProducts {
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

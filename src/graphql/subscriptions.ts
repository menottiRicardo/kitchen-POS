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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      tenantId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      tenantId
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      tenantId
      name
      createdAt
      updatedAt
    }
  }
`;

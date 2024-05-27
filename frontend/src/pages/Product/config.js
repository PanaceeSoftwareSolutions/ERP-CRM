export const fields = {
  Package_Name: {
    type: 'string',
    required: true,
  },
  productCategory: {
    type: 'async',
    label: 'product Category',
    displayLabels: ['productCategory', 'name'],
    dataIndex: ['productCategory', 'name'],
    entity: 'productcategory',
    required: true,
  },
  Package_Code: {
    type: 'number',
  },
  currency: {
    type: 'selectCurrency',
  },
  price: {
    type: 'currency',
    required: true,
  },
  Destination: {
    type: 'string',
    required: true,
  },
  Overview: {
    type: 'textarea',
  },
  Hotel: {
    type: 'text',
  },
  "% per Adult": {
    type: 'number',
  },
  "% per Child": {
    type: 'number',
  },
  Discount: {
    type: 'number',
  },

  Margin: {
    type: 'number',
  },
  Hotel: {
    type: 'text',
  },
  ref: {
    type: 'string',
  },
};

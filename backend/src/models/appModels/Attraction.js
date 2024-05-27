// const { email } = require('@/locale/translation/ar_eg');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },


  type: {
    type: String,
    default: 'company',
    enum: ['company', 'people'],
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },

  country: {
    type: String,
    // required: true,
  },
  ID: {
    type: Number,
    // required: true,
  },
  code: {
    type: Number,
    // required: true,
  },
  phone: {
    type: Number,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  // company: { type: mongoose.Schema.ObjectId, ref: 'Company', autopopulate: true },
  people: { type: mongoose.Schema.ObjectId, ref: 'People', autopopulate: true },
  interestedIn: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }],
  offer: [{ type: mongoose.Schema.ObjectId, ref: 'Offer' }],
  converted: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  assigned: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  subTotal: {
    type: Number,
  },
  taxTotal: {
    type: Number,
  },
  // phone: {
  //   type: Number,
  // },

  Description: {
    type: String,
  },
  Package: {
    type: String,
  },
  Destination: {
    type: String,
  },
  Address: {
    type: String,
  },
  Destination: {
    type: String,
  },
  City: {
    type: String,
  },
  Package: {
    type: String,
  },
  Valid_Proposal_Date: {
    type: Date,
  },
  Proposal_Date: {
    type: Date,
  },
  total: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  images: [
    {
      id: String,
      name: String,
      path: String,
      description: String,
      isPublic: {
        type: Boolean,
        default: false,
      },
    },
  ],
  files: [
    {
      id: String,
      name: String,
      path: String,
      description: String,
      isPublic: {
        type: Boolean,
        default: false,
      },
    },
  ],
  category: String,
  status: String,
  notes: String,
  source: String,
  approved: {
    type: Boolean,
    default: false,
  },
  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Attraction', schema);

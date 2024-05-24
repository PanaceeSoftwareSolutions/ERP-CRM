import { selectColor } from '@/utils/color';
export const fields = {
  type: {
    type: 'selectWithFeedback',
    renderAsTag: true,
    options: [
      { value: 'people', label: 'people', color: 'magenta' },
      { value: 'company', label: 'company', color: 'blue' },
    ],
    required: true,
    hasFeedback: true,
    disableForTable: true
  },
  name: {
    type: 'string',
    disableForForm: true,

  },
  status: {
    type: 'selectWithTranslation',
    renderAsTag: true,
    options: [
      { value: 'draft', label: 'draft' },
      { value: 'new', label: 'new', color: 'blue' },
      { value: 'in negociation', label: 'in negociation', color: 'purple' },
      { value: 'won', label: 'won', color: 'green' },
      { value: 'loose', label: 'loose', color: 'red' },
      { value: 'canceled', label: 'canceled', color: selectColor.crimson },
      { value: 'assigned', label: 'assigned', color: selectColor.mediumturquoise },
      { value: 'on hold', label: 'on hold', color: selectColor.burlywood },
      { value: 'waiting', label: 'waiting', color: 'orange' },
    ],
  },

  source: {
    type: 'selectWithTranslation',
    renderAsTag: true,
    options: [
      { value: 'linkedin', label: 'linkedin', color: selectColor.royalblue },
      { value: 'socialmedia', label: 'social_media', color: selectColor.skyblue },
      { value: 'website', label: 'website', color: selectColor.coral },
      { value: 'advertising', label: 'advertising', color: selectColor.darkgreen },
      { value: 'friend', label: 'friend', color: selectColor.firebrick },
      {
        value: 'professionals network',
        label: 'professionals network',
        color: selectColor.mediumvioletred,
      },
      { value: 'customer referral', label: 'customer referral', color: selectColor.violet },
      { value: 'sales', label: 'sales', color: selectColor.deeppink },
      { value: 'other', label: 'other', color: selectColor.darkgray },
    ],
  },

  assign_to: {
    type: 'selectWithTranslation',
    renderAsTag: true,
    options: [
      { value: 'employee', label: 'employee', color: selectColor.royalblue },
      { value: 'super_admin', label: 'super_admin', color: selectColor.firebrick },
      { value: 'manager', label: 'manager', color: selectColor.skyblue },
      { value: 'read_only', label: 'read_only', color: selectColor.coral },
      { value: 'edit_only', label: 'edit_only', color: selectColor.darkgreen },
    ],
  },

  country: {
    type: 'country',
    color: null,
    disableForForm: true,
    disableForTable: true
  },
  phone: {
    type: 'phone',
    disableForForm: true,
  },
  email: {
    type: 'email',
    disableForForm: false,
    disableForTable: true
  },
  Tour_date: {
    type: 'date',
    disableForForm: false,
  },
  Pax: {
    type: 'number',
    disableForForm: false,
  },
  nights: {
    type: 'number',
    disableForForm: false,
    disableForTable: true
  },
  people: {
    type: 'search',
    label: 'people',
    entity: 'people',
    redirectLabel: 'Add New Person',
    withRedirect: true,
    urlToRedirect: '/people',
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    dataIndex: ['people', 'firstname'],
    disableForTable: true,
    feedback: 'people',
  },
  company: {
    type: 'search',
    label: 'company',
    entity: 'company',
    withRedirect: true,
    urlToRedirect: '/company',
    displayLabels: ['name'],
    redirectLabel: 'Add New Company',
    searchFields: 'name',
    dataIndex: ['company', 'name'],
    disableForTable: true,
    feedback: 'company',
  },
  notes: {
    type: 'textarea',
    disableForTable: true,
  },
};

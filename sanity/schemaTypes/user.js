export default {
    name: 'user',
    title: 'user',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'name',
        type: 'string'
      },
      {
        name: 'gender',
        title: 'gender',
        type: 'string',
      },
      {
        name: 'age',
        title: 'age',
        type: 'number',
      },
      {
        name: 'image',
        title: 'image',
        type: 'image'
      },
      {
        name: 'previousPurchases',
        title: 'previousPurchases',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'event'}]}]
      },
      {
        name: 'wishlist',
        title: 'wishlist',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'event'}]}]
      }
    ]
  }
  
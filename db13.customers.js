db.customers.find({
  $and: [{ CustomerID: { $gt: 2 } }, { FirstName: /^B/ }],
});

db.customers.find({
  
  $or: [{ CustomerID: { $lt: 3 } }, { LastName: /s$/ }],
});

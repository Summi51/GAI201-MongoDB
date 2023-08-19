db.Restaurants.find({
  $or: [{ cuisine_type: { $exists: false } }, { cuisine_type: null }],
});

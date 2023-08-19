db.Restaurants.find({
  $and: [{ delivery_available: true }, { average_rating: { $gt: 4 } }],
});

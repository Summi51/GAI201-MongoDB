// Assuming you're using the MongoDB shell

// Fetch rides with start_location or end_location containing 'Downtown'
db.Rides.find({
  $or: [
    { start_location: { $regex: /Downtown/ } },
    { end_location: { $regex: /Downtown/ } },
  ],
});

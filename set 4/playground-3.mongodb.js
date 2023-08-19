// Assuming you're using the MongoDB shell

// Find driver_id values with more than 5 completed rides
db.Rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      rideCount: { $sum: 1 },
    },
  },
  {
    $match: {
      rideCount: { $gt: 5 },
    },
  },
]);

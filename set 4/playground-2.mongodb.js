// Assuming you're using the MongoDB shell

// Find the average fare and distance for each driver_id
db.Rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      avg_fare: { $avg: "$fare" },
      avg_distance: { $avg: "$distance" },
    },
  },
]);

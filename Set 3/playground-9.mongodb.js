// Assuming you're using the MongoDB shell

// Calculate the total fare for each driver_id
db.Rides.aggregate([
  {
    $group: {
      _id: "$driver_id",
      totalFare: { $sum: "$fare" },
    },
  },
]);

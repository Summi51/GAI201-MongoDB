// Assuming you're using the MongoDB shell

// Calculate the total distance and total fare for all rides
db.Rides.aggregate([
  {
    $group: {
      _id: null,
      totalDistance: { $sum: "$distance" },
      totalFare: { $sum: "$fare" },
    },
  },
]);

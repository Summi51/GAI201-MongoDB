// Assuming you're using the MongoDB shell

// Calculate the average ride_time of all rides
db.Rides.aggregate([
  {
    $group: {
      _id: null,
      averageRideTime: { $avg: "$ride_time" },
    },
  },
]);

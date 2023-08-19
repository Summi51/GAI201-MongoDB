// Assuming you're using the MongoDB shell

// Specify the driver_id for which you want to count rides
var targetDriverId = ObjectId("your_driver_id_here");

// Count the number of rides for the specified driver_id
db.Rides.aggregate([
  {
    $match: { driver_id: targetDriverId },
  },
  {
    $count: "rideCount",
  },
]);

// Assuming you're using the MongoDB shell

// Update the fare of the ride with id 4
db.Rides.updateOne(
  { _id: ObjectId("id_of_ride_4") },
  { $set: { fare: new_fare_value } }
);

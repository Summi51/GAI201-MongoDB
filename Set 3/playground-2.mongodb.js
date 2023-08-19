// Assuming you're using the MongoDB shell

// Connect to your MongoDB database


// Create the Rides collection with the specified schema
db.createCollection("Rides", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["driver_id", "passenger_id", "start_location", "end_location", "distance", "ride_time", "fare"],
      properties: {
        driver_id: { bsonType: "objectId" },
        passenger_id: { bsonType: "objectId" },
        start_location: { bsonType: "string" },
        end_location: { bsonType: "string" },
        distance: { bsonType: "number" },
        ride_time: { bsonType: "number" },
        fare: { bsonType: "number" }
      }
    }
  }
})

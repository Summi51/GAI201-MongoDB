// Assuming you're using the MongoDB shell and have already connected to your database

// Insert five sample documents into the Rides collection
db.Rides.insertMany([
  {
    driver_id: ObjectId(),
    passenger_id: ObjectId(),
    start_location: "Start Location 1",
    end_location: "End Location 1",
    distance: 5.2,
    ride_time: 15,
    fare: 10.5,
  },
  {
    driver_id: ObjectId(),
    passenger_id: ObjectId(),
    start_location: "Start Location 2",
    end_location: "End Location 2",
    distance: 8.7,
    ride_time: 20,
    fare: 14.2,
  },
  {
    driver_id: ObjectId(),
    passenger_id: ObjectId(),
    start_location: "Start Location 3",
    end_location: "End Location 3",
    distance: 3.1,
    ride_time: 10,
    fare: 7.8,
  },
  {
    driver_id: ObjectId(),
    passenger_id: ObjectId(),
    start_location: "Start Location 4",
    end_location: "End Location 4",
    distance: 12.5,
    ride_time: 30,
    fare: 20.3,
  },
  {
    driver_id: ObjectId(),
    passenger_id: ObjectId(),
    start_location: "Start Location 5",
    end_location: "End Location 5",
    distance: 6.8,
    ride_time: 18,
    fare: 12.1,
  },
]);

// Assuming you're using the MongoDB shell

// Fetch all rides, ordered by fare in descending order
db.Rides.find().sort({ fare: -1 });

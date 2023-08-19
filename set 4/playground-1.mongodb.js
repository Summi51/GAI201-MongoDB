// Assuming you're using the MongoDB shell

// Fetch rides sorted by fare in ascending order and limit to 5 documents
db.Rides.find().sort({ fare: 1 }).limit(5);

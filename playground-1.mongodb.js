db.createCollection("Customers");

db.Customers.insertOne({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St",
  phone_number: "123-456-7890",
});

db.Customers.find();

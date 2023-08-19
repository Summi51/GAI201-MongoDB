db.createCollection("Restaurants", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "name",
        "cuisine_type",
        "location",
        "average_rating",
        "delivery_available",
      ],
      properties: {
        name: { bsonType: "string" },
        cuisine_type: { bsonType: "string" },
        location: { bsonType: "string" },
        average_rating: { bsonType: "number" },
        delivery_available: { bsonType: "bool" },
      },
    },
  },
});

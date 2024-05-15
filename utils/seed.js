const connection = require("../config/connection");
const { User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  const users = [
    { first: "John", last: "Doe" },
    { first: "Jane", last: "Smith" },
  ];

  await User.collection.insertMany(users);

  console.info("Seeding complete!");
  process.exit(0);
});


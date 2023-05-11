// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  {
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12,
    image:
      "https://www.yankodesign.com/images/design_news/2022/08/auto-draft/dji_hitop_tricopter_drone_2.jpg",
  },
  {
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20,
    image:
      "https://cdn11.bigcommerce.com/s-5v6sbv5p/images/stencil/1280x1280/products/123026/323839/700235__23151.1623237170.jpg?c=2?imbypass=on",
  },
  {
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18,
    image:
      "https://ae01.alicdn.com/kf/HTB176aqMVXXXXbzXpXXq6xXFXXXK/F08618-F-DIY-Drone-Quadcopter-Upgraded-Full-Kit-HMF-S550-9045-3-Propeller-6-axle-Multitor.jpg",
  },
];

Drone.create(drones)
  .then((createdDrones) => {
    console.log(`${createdDrones.length} Drones added to the db`);
    mongoose.disconnect(() => console.log("Disconnected from the DB"));
  })
  .catch((error) => console.log(error));

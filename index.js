const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const destinations = require("./data/destination.json");
const hotels = require("./data/hotels.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Travel guru is running");
});

// all destination for slider

app.get("/destinations", (req, res) => {
  res.send(destinations);
});

// single destination for details
app.get("/destinations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const destinationDetail = destinations.find(
    (destination) => parseInt(destination.id) === id
  );
  res.send(destinationDetail);
});

// all hotels
app.get("/hotels", (req, res) => {
  res.send(hotels);
});

// hotels by destination
app.get("/destination-hotels/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const destinationHotel = hotels.filter(
    (hotel) => parseInt(hotel.place_id) === id
  );
  res.send(destinationHotel);
});

app.listen(port, () => {
  console.log(`Travel api is running on port: ${port}`);
});

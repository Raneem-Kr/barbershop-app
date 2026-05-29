const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      date: 1,
      time: 1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const existingBooking = await Booking.findOne({
      date: req.body.date,
      time: req.body.time,
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "Dieser Termin ist bereits reserviert",
      });
    }

    const booking = await Booking.create(req.body);

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/date/:date", async (req, res) => {
  try {
    const bookings = await Booking.find({
      date: req.params.date,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      message: "Termin gelöscht",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

const express = require("express");
const { check, validationResult } = require("express-validator");
const Reservation = require("../models/Reservation");
const dotenv = require("dotenv");
const auth = require("../middleware/auth");
const nodemailer = require("nodemailer");

dotenv.config();

const router = express.Router();

// @route   GET /reserve
// @desc    Get all reservations
// @access  Admin
router.get("/", auth, async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST /reservation
// @desc    Reserve table
// @access  Public
router.post(
  "/",
  [
    check("phone", "Please enter phone").not().isEmpty(),
    check("date", "Please enter date").not().isEmpty(),
    check("time", "Please enter time").not().isEmpty(),
    check("persons", "Please enter persons count").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, phone, persons, date, time } = req.body;
    try {
      // Need to check whether the user is already exists or not
      let reservation = await Reservation.findOne({ email });
      if (reservation) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already reserved!!" }] });
      }

      reservation = new Reservation({
        phone,
        email,
        persons,
        date,
        time,
      });

      await reservation.save();

      res.send("Your reservation uploaded successfully!!");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error occurred while reserving the table");
    }
  }
);

// @route   PUT /reservation/:id
// @desc    Update reservation status
// @access  Admin
router.put("/:id", auth, async (req, res) => {
  const { status } = req.body;
  try {
    let reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ msg: "Reservation not found" });
    }

    reservation.status = status;
    await reservation.save();

    console.log(process.env.EMAIL);
    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: reservation.email,
      subject: "Reservation Status Update",
      text: `Your reservation status has been updated to ${status}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

// const express = require("express");
// const { check, validationResult } = require("express-validator");
// const Reservation = require("../models/Reservation");
// const dotenv = require("dotenv");

// dotenv.config();

// const router = express.Router();

// // @route   POST  /reservation
// // @desc    Reserve table
// // @access  Public
// router.post(
//   "/",
//   [
//     check("phone", "Please enter phone").not().isEmpty(),
//     check("date", "Please enter date").not().isEmpty(),
//     check("date", "Please enter time").not().isEmpty(),
//     check("persons", "Please enter persons count").not().isEmpty(),
//     check("email", "Please enter a valid email").isEmail(),
//   ],
//   async (req, res) => {
//     console.log(req.body);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, phone, persons, date, time } = req.body;
//     try {
//       // Need to check whether the user is already exists or not
//       let reservation = await Reservation.findOne({ email });
//       if (reservation) {
//         return res
//           .status(400)
//           .json({ errors: [{ msg: "User already reserved!!" }] });
//       }

//       reservation = Reservation({
//         phone,
//         email,
//         persons,
//         date,
//         time,
//       });

//       await reservation.save();

//       res.send("Your reservation uploaded successfully!!");
//     } catch (err) {
//       console.error(err.message);
//       res.status(500, "Server error occured while reserving the table");
//     }
//   }
// );

// module.exports = router;

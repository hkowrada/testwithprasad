const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'your-ovh-mysql-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/api/reservations', (req, res) => {
  const { name, email, phone, persons, dateTime } = req.body;
  const query = 'INSERT INTO reservations (name, email, phone, persons, dateTime, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, persons, dateTime, 'Pending'], (err, result) => {
    if (err) throw err;
    res.status(201).send('Reservation submitted');
  });
});

app.get('/api/reservations', (req, res) => {
  const query = 'SELECT * FROM reservations';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/api/reservations/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const query = 'UPDATE reservations SET status = ? WHERE id = ?';
  db.query(query, [status, id], (err, result) => {
    if (err) throw err;

    // Fetch the reservation to get the email
    const selectQuery = 'SELECT email FROM reservations WHERE id = ?';
    db.query(selectQuery, [id], (err, results) => {
      if (err) throw err;
      const email = results[0].email;

      // Send email notification
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'youremail@gmail.com',
          pass: 'yourpassword'
        }
      });

      const mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Reservation Status',
        text: `Your reservation has been ${status}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });

      res.send('Reservation updated');
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

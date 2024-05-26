import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('/api/reservations')
      .then(response => response.json())
      .then(data => setReservations(data));
  }, []);

  const updateReservationStatus = (id, status) => {
    fetch(`/api/reservations/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
    .then(() => {
      setReservations(reservations.map(reservation => 
        reservation.id === id ? { ...reservation, status } : reservation
      ));
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.dateTime} - {reservation.status}
            <button onClick={() => updateReservationStatus(reservation.id, 'Approved')}>Approve</button>
            <button onClick={() => updateReservationStatus(reservation.id, 'Rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

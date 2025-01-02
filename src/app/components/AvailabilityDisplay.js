'use client';
import { useState, useEffect } from 'react';

const AvailabilityDisplay = ({ bookings }) => {
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    setFilteredBookings(bookings);
  }, [bookings]);

  return (
    <div className='ad'>
      <h3>Available Slots</h3>
      {filteredBookings.map((booking, index) => (
        <div key={index}>
          <p>{booking.date} - {booking.time}</p>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityDisplay;

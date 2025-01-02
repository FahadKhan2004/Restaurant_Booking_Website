/*'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingForm from './components/BookingForm';
import AvailabilityDisplay from './components/AvailabilityDisplay';

export default function Home() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Restaurant Booking System</h1>
      <BookingForm fetchBookings={fetchBookings} />
      <AvailabilityDisplay bookings={bookings} />
    </div>
  );
}
*/
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingForm from './components/BookingForm';
import AvailabilityDisplay from './components/AvailabilityDisplay';
import BookingSummary from './components/BookingSummary';
import './styles/globals.css';
export default function Home() {
  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleNewBooking = (newBooking) => {
    setLastBooking(newBooking);
    fetchBookings();
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h1 >Restaurant Booking System</h1>
      <BookingForm fetchBookings={fetchBookings} onNewBooking={handleNewBooking} />
      {lastBooking && <BookingSummary booking={lastBooking} />}
      <AvailabilityDisplay bookings={bookings} />
    </div>
  );
}




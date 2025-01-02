
/*
'use client'; // Required for client-side components in App Router
import { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ fetchBookings }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
      fetchBookings();
    } catch (err) {
      alert(err.response.data.message || 'Error booking');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <input name="guests" type="number" min="1" onChange={handleChange} required />
      <input name="name" type="text" onChange={handleChange} required />
      <input name="contact" type="text" onChange={handleChange} required />
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
*/
'use client'; // Required for client-side components in App Router
import { useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';
const BookingForm = ({ fetchBookings, onNewBooking }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
      onNewBooking(response.data);
      fetchBookings();
    } catch (err) {
      alert(err.response.data.message || 'Error booking');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="date" onChange={handleChange} required />
      <input name="time" type="time" onChange={handleChange} required />
      <input name="guests" type="number" min="1" onChange={handleChange} required />
      <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
      <input name="contact" type="text" placeholder="Contact" onChange={handleChange} required />
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;

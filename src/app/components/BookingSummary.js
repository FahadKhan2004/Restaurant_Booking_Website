'use client';

const BookingSummary = ({ booking }) => {
  if (!booking) return null;

  return (
    <div className="bs" style={{ maxWidth: "600px", margin: "20px auto", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", background: "#fff" }}>
      <h2 style={{ color: "#007bff" }}>Booking Summary</h2>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p><strong>Guests:</strong> {booking.guests}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Contact:</strong> {booking.contact}</p>
    </div>
  );
};

export default BookingSummary;

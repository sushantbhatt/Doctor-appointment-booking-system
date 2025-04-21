import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { docId } = useParams(); // Get the doctor's ID from the URL
  const { doctors, bookAppointment } = useContext(AppContext); // Get doctors and bookAppointment from context
  const navigate = useNavigate();

  // Find the doctor using the docId
  const doctor = doctors.find((doc) => doc._id === docId);

  // If doctor not found, return a message
  if (!doctor) {
    return <p>Doctor not found.</p>;
  }

  // Handle booking appointment
  const handleBookAppointment = () => {
    const date = '25, July 2025'; // This can be dynamic based on user selection
    const time = '8:30 PM'; // This can be dynamic based on user selection

    // Call the function from context to book the appointment
    bookAppointment(doctor, date, time);

    // Redirect to MyAppointments page
    navigate('/my-appointments');
  };

  return (
    <div className="p-6">
      <h2>Book an Appointment with Dr. {doctor.name}</h2>
      <p>Speciality: {doctor.speciality}</p>
      <p>Available Date: 25, July 2025</p>
      <p>Available Time: 8:30 PM</p>

      <button
        onClick={handleBookAppointment}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default MyAppointments;

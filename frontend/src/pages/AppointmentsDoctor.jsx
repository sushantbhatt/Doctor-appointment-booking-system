import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const AppointmentsDoctor = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const [processingAppointments, setProcessingAppointments] = useState({}); 
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isSlipOpen, setIsSlipOpen] = useState(false);

  useEffect(() => {
    const storedAppointments = localStorage.getItem("myAppointments");
    if (storedAppointments) {
      setMyAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const handleCancelAppointment = (index) => {
    const updatedAppointments = myAppointments.filter((_, i) => i !== index);
    setMyAppointments(updatedAppointments);
    localStorage.setItem("myAppointments", JSON.stringify(updatedAppointments));
    closeSlip();
  };

  const handlePayOnline = (index, appointment) => {
    setSelectedAppointment(appointment);
    setIsSlipOpen(true);
    setProcessingAppointments(prev => ({ ...prev, [index]: true }));
    setPaymentStatus(null);

    // Simulate payment processing (you might want to move this after the slip is closed or handle it differently)
    setTimeout(() => {
      const isPaymentSuccessful = Math.random() > 0.5;
      setProcessingAppointments(prev => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });

      if (isPaymentSuccessful) {
        setPaymentStatus({ success: true, message: `Payment successful for Dr. ${appointment.doctorName}! (Simulated)` });
        // In a real app, you'd update the appointment status on your backend
      } else {
        setPaymentStatus({ success: false, message: `Payment failed for Dr. ${appointment.doctorName}. Please try again. (Simulated)` });
      }
    }, 3000);
  };

  const isAppointmentProcessing = (index) => !!processingAppointments[index];

  const openSlip = (appointment) => {
    setSelectedAppointment(appointment);
    setIsSlipOpen(true);
  };

  const closeSlip = () => {
    setSelectedAppointment(null);
    setIsSlipOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {paymentStatus && (
        <div className={`mt-3 p-3 rounded-md ${paymentStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {paymentStatus.message}
        </div>
      )}

      {isSlipOpen && selectedAppointment && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-zinc-700 text-center">Appointment Slip</h2>
            <div className="flex items-center justify-center mb-4">
              {assets.logo && <img src={assets.logo} alt="Logo" className="h-8 w-auto mr-2" />}
            </div>
            <p><span className="font-medium">Doctor:</span> Dr. {selectedAppointment.doctorName}</p>
            <p><span className="font-medium">Speciality:</span> {selectedAppointment.doctorSpeciality}</p>
            <p><span className="font-medium">Date:</span> {selectedAppointment.appointmentDate}</p>
            <p><span className="font-medium">Time:</span> {selectedAppointment.appointmentTime}</p>
            {selectedAppointment.patientName && <p><span className="font-medium">Patient:</span> {selectedAppointment.patientName}</p>}
            {selectedAppointment.notes && <p><span className="font-medium">Notes:</span> {selectedAppointment.notes}</p>}

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handlePrint}
                className="text-sm text-stone-500 text-center min-w-24 py-2 border rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Print
              </button>
              <button
                onClick={closeSlip}
                className="text-sm text-stone-500 text-center min-w-24 py-2 border rounded hover:bg-gray-300 hover:text-zinc-700 transition-all duration-300"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

      <p className='pb-3 mt-8 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {myAppointments.length > 0 ? (
          myAppointments.map((appointment, index) => (
            <div
              className='grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b'
              key={index}
            >
              <div className='justify-self-center sm:justify-self-start'>
                {appointment.doctorImage && (
                  <img className='w-50 h-50 bg-indigo-50 rounded-md' src={appointment.doctorImage} alt={appointment.doctorName} />
                )}
              </div>
              <div className='text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>Dr. {appointment.doctorName}</p>
                <p className='text-xs sm:text-sm'>{appointment.doctorSpeciality}</p>
                <p className='text-xs mt-1'>
                  <span className='text-sm text-neutral-700 font-medium'>Date & Time :</span>{' '}
                  {appointment.appointmentDate} | {appointment.appointmentTime}
                </p>
              </div>
              <div className='hidden sm:block'></div>
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 justify-end items-center sm:items-stretch'>
                <button
                  onClick={() => handlePayOnline(index, appointment)}
                  className='text-sm text-stone-500 text-center w-full sm:min-w-48 py-2 border rounded hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed'
                  disabled={isAppointmentProcessing(index)}
                >
                  {isAppointmentProcessing(index) ? 'Processing...' : 'Pay Online'}
                </button>
                <button
                  onClick={() => handleCancelAppointment(index)}
                  className='text-sm text-stone-500 text-center w-full sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'
                  disabled={isAppointmentProcessing(index)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments booked yet.</p>
        )}
      </div>
    </>
  );
};

export default AppointmentsDoctor;
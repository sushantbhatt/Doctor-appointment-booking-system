// Appointment.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const dayofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (doctors && docId) {
      const foundDoctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoctor);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  const getAvailableSlots = async () => {
    const today = new Date();
    const newSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      newSlots.push(timeSlots);
    }

    setDocSlots(newSlots);
    setSelectedDate(newSlots[0]?.[0]?.datetime); // Initialize selected date to the first available date
  };

  const handleBookAppointment = () => {
    if (docInfo && selectedDate && slotTime) {
      const appointmentData = {
        doctorId: docInfo._id,
        doctorName: docInfo.name,
        doctorSpeciality: docInfo.speciality,
        appointmentDate: selectedDate.toDateString(),
        appointmentTime: slotTime,
        doctorImage: docInfo.image, // Optionally save doctor's image
      };

      // Save to local storage
      const existingAppointments = localStorage.getItem("myAppointments");
      let appointments = existingAppointments ? JSON.parse(existingAppointments) : [];
      appointments.push(appointmentData);
      localStorage.setItem("myAppointments", JSON.stringify(appointments));

      console.log(
        "Booking appointment for:",
        docInfo.name,
        "on:",
        selectedDate.toDateString(),
        "at:",
        slotTime
      );
      setTimeout(() => {
        alert("Appointment Booked Successfully!");
        setSlotTime("");
      }, 1000);
    } else {
      alert("Please select a date and time for your appointment.");
    }
  };

  if (!docInfo) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {/* -------Doctor Detail ----*/}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-blue-600 w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>
        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white shadow-md mt-[-60px] sm:mt-0">
          {/*---- Doc Info: name, degree, experience -----*/}
          <div className="flex items-center gap-2 text-xl font-semibold mb-2">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
            </p>
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </div>

          <p className="text-gray-600 flex items-center gap-2 text-sm mt-1">
            {docInfo.degree} - {docInfo.speciality}
          </p>

          <p className="text-sm bg-blue-100 text-blue-700 inline-block px-3 py-1 rounded mb-4">
            {docInfo.experience}
          </p>

          {/*------ Doctor About------- */}
          <div>
            <div className="flex items-center gap-2 font-medium text-lg">
              <p>About</p>
              <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </div>
            <p className="text-sm text-gray-600 mt-1">{docInfo.about}</p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment fee : <span className="text-gray-600">₹{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/*------Booking Slots------*/}
      <div className="sm:ml-72 sm:pl-4 mt-6 font-medium text-gray-700">
        <p>Booking Slot</p>

        {/* Day Picker */}
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2 scrollbar-hide scroll-smooth">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                className={`text-center py-3 px-4 min-w-16 rounded-full cursor-pointer whitespace-nowrap ${
                  slotIndex === index
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200"
                }`}
                key={index}
                onClick={() => {
                  setSlotIndex(index);
                  setSelectedDate(item[0]?.datetime); // Update selected date
                  setSlotTime(""); // clear previous time selection when changing day
                }}
              >
                <p>{item[0] && dayofWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        {/* Time Slots */}
        <div
          className="flex items-center gap-3 w-full overflow-x-auto mt-4 pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {docSlots.length > 0 &&
            docSlots[slotIndex]?.map((item, index) => (
              <p
                key={index}
                onClick={() => {
                  setSlotTime(item.time);
                  setSelectedDate(item.datetime); // Ensure selectedDate is updated with the correct date
                }}
                className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${
                  slotTime === item.time
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        {/* Selected time (optional feedback) */}
        {slotTime && selectedDate && (
          <p className="text-green-600 mt-2">
            Selected Time: <strong>{slotTime}</strong> on{" "}
            <strong>{selectedDate.toDateString()}</strong>
          </p>
        )}

        <button
          onClick={handleBookAppointment}
          className="bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer"
        >
          Book Appointment
        </button>
      </div>

      {/*-----Listing Related Doctor------*/}
      {docInfo?.speciality && <RelatedDoctors docId={docId} speciality={docInfo.speciality} />}
    </div>
  );
};

export default Appointment;
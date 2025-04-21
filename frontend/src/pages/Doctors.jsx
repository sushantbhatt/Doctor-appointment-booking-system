import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const SPECIALTIES = [
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Filter doctors based on selected specialty
  const filteredDoctors = useMemo(() => {
    if (!speciality) return doctors;
    return doctors.filter(
      (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
    );
  }, [doctors, speciality]);

  // Handle specialty navigation
  const handleNavigation = (selectedSpeciality) => {
    navigate(selectedSpeciality ? `/doctors/${selectedSpeciality.toLowerCase()}` : "/doctors");
  };

  return (
    <div className="p-4">
      <p className="text-gray-800 underline">Browse doctors by specialty</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar: Specialties List */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
        {SPECIALTIES.map((specialityName, index) => (
  <button
    key={index}
    onClick={() => handleNavigation(specialityName)}
    className={`w-[94vw] sm:w-auto px-4 py-2 border rounded-md transition-all cursor-pointer 
      ${speciality?.toLowerCase() === specialityName.toLowerCase() 
        ? "bg-blue-500 text-white border-blue-500" 
        : "border-gray-300 hover:bg-gray-100 text-gray-600"}`}
  >
    {specialityName}
  </button>
))}

        </div>

        {/* Doctors List or No Data */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <button
                key={doctor._id}
                onClick={() => navigate(`/appointment/${doctor._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 text-left"
                aria-label={`Book an appointment with Dr. ${doctor.name}`}
              >
                <img
                  className="w-full h-auto bg-blue-50"
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}, a specialist in ${doctor.speciality}`}
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-green-600 font-medium">Available</p>
                  <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No doctors found"
                className="w-32 opacity-60"
              />
              <p className="mt-4 text-lg font-medium">No doctors found for this specialty.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

import React, { useContext } from 'react'; // 
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <button 
            key={index} 
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 text-left"
            aria-label={`Book an appointment with Dr. ${doctor.name}`}
          >
            <img 
              className="bg-blue-50 w-full h-auto"
              src={doctor.image} 
              alt={`Dr. ${doctor.name}, ${doctor.speciality}`} 
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center">
                <p className="text-green-600 font-medium">Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </button>
        ))}
      </div>

      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-200 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-300 transition">
        More
      </button>
    </div>
  );
};

export default TopDoctors;

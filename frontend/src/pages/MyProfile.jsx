import React, { useState } from 'react';
import profilePic from '../assets/profile_pic.png'; 

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Mohit Mishra',
    image: profilePic,
    email: 'mohitmishra@gmail.com',
    phone: '+91 98*****89',
    address: {
      line1: '57th Cross Motibagh',
      line2: 'New Delhi',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(false); 

  // Save button click handler
  const handleSave = () => {
    setIsEdit(false);
    alert('Profile information saved!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={userData.image} alt="Profile" className="w-32 h-32 rounded-full mb-4" />

      <div className="mb-4">
        <p className="font-semibold">Name:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            className="border p-1 rounded w-full"
          />
        ) : (
          <p>{userData.name}</p>
        )}
      </div>

      <div className="mb-4">
        <p className="font-semibold">Email:</p>
        <p>{userData.email}</p>

        <p className="font-semibold mt-2">Phone:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            className="border p-1 rounded w-full"
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p className="font-semibold mt-2">Address:</p>
        {isEdit ? (
          <>
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              className="border p-1 rounded w-full mb-2"
            />
            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              className="border p-1 rounded w-full"
            />
          </>
        ) : (
          <p>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>

      <div className="mb-4">
        <p className="font-semibold">Gender:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.gender}
            onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
            className="border p-1 rounded w-full"
          />
        ) : (
          <p>{userData.gender}</p>
        )}

        <p className="font-semibold mt-2">Date of Birth:</p>
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
            className="border p-1 rounded w-full"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      {/* Buttons */}
      {!isEdit ? (
        <button
          onClick={() => setIsEdit(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit Profile
        </button>
      ) : (
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Info
        </button>
      )}
    </div>
  );
};

export default MyProfile;

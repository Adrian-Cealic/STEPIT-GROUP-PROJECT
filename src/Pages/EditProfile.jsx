import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineSetting } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/Profilepic.svg';

const EditProfile = () => {
  const navigate = useNavigate();

  // Stările pentru fiecare câmp de input
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // Funcție pentru a încărca datele din localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setFullName(savedProfile.fullName || '');
      setPhoneNumber(savedProfile.phoneNumber || '');
      setEmail(savedProfile.email || '');
      setDateOfBirth(savedProfile.dateOfBirth || '');
    }
  }, []);

  // Funcția pentru a salva datele
  const handleUpdate = () => {
    const userProfile = {
      fullName,
      phoneNumber,
      email,
      dateOfBirth,
    };

    // Salvează profilul în localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    console.log('Profile Updated: ', userProfile);
    
    // Redirecționează utilizatorul înapoi la pagina de profil după actualizare
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white-100">
      {/* Container */}
      <div className="max-w-md mx-auto bg-white overflow-hidden mt-10">
        {/* Header */}
        <div className=" flex items-center justify-between p-4">
          <AiOutlineLeft className="text-blue-600 w-6 h-6" onClick={() => navigate('/')} />
          <h2 className="text-lg font-bold text-blue-600">Profile</h2>
          <AiOutlineSetting className="text-blue-600 w-6 h-6" />
        </div>

        {/* Profile Image & Name */}
        <div className="flex flex-col items-center p-6">
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={profileImage}
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full">
              <AiOutlineSetting className="text-white w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6 px-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-blue-100 rounded-md border-transparent focus:border-blue-600 focus:bg-white focus:ring-0"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-blue-100 rounded-md border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-blue-100 rounded-md border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date Of Birth</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-blue-100 rounded-md border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition duration-200"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

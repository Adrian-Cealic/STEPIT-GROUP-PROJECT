import React, { useEffect, useState } from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineCreditCard, AiOutlineLock, AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MenuBar from '../components/Menubar';
import profileImage from '../assets/Profilepic.svg'

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: '',
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);
  return (
    <div className="min-h-screen bg-white-100 pb-16"> {}
      <div className="max-w-md mx-auto bg-white overflow-hidden mt-10">
        <div className=" text-center p-4">
          <h2 className="text-lg font-bold text-blue-600">My Profile</h2>
        </div>

        <div className="flex flex-col items-center p-6">
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={profileImage}
              alt="Profile"
            />
            <Link to="/edit-profile">
              <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full">
                <AiOutlineUser className="text-white w-5 h-5" />
              </div>
            </Link>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-4">{profile.fullName}</h3>
        </div>

        <div className="space-y-4">
          <Link to="/edit-profile">
            <MenuItem icon={<AiOutlineUser />} label="Profile" />
          </Link>
          <MenuItem icon={<AiOutlineHeart />} label="Favorite" />
          <MenuItem icon={<AiOutlineCreditCard />} label="Payment Method" />
          <MenuItem icon={<AiOutlineLock />} label="Privacy Policy" />
          <MenuItem icon={<AiOutlineSetting />} label="Settings" />
          <Link to="/help-center">
          <MenuItem icon={<AiOutlineQuestionCircle />} label="Help" />
          </Link>     
          <Link to="/logout">
          <MenuItem icon={<AiOutlineLogout />} label="Logout" />
          </Link>
          
        </div>
      </div>

      { }
      <MenuBar />
    </div>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-blue-100">
      <div className="flex items-center space-x-4">
        <div className="text-blue-500">{icon}</div>
        <p className="text-gray-800">{label}</p>
      </div>
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import { AiOutlineLeft, AiOutlineSearch, AiOutlineCustomerService, AiOutlineGlobal, AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineInstagram, AiOutlineDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const HelpCenterContactUs = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10">
        {/* Header */}
        <div className="bg-blue-100 flex items-center justify-between p-4">
          <AiOutlineLeft className="text-blue-600 w-6 h-6" 
          onClick={() => navigate('/')}/>
          <h2 className="text-lg font-bold text-blue-600">Help Center</h2>
          
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 py-2 w-full bg-gray-100 rounded-full border border-gray-200"
            />
          </div>
        </div>

        {/* Contact Us Options */}
        <div className="p-4 space-y-4">
          <ContactItem icon={<AiOutlineCustomerService />} label="Customer Service" />
          <ContactItem icon={<AiOutlineGlobal />} label="Website" />
          <ContactItem icon={<AiOutlineWhatsApp />} label="Whatsapp" />
          <ContactItem icon={<AiOutlineFacebook />} label="Facebook" />
          <ContactItem icon={<AiOutlineInstagram />} label="Instagram" />
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-blue-100 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="text-blue-600">{icon}</div>
        <p className="text-gray-800">{label}</p>
      </div>
      <AiOutlineDown className="text-gray-400 w-5 h-5" />
    </div>
  );
};

export default HelpCenterContactUs;

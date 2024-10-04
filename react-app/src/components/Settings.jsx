import { IoBulbOutline, IoPersonOutline } from "react-icons/io5";
import { GrKey } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete the account?")) {
      alert("Account deleted.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 border rounded-md cursor-pointer" onClick={() => navigate('/notification-settings')}>
          <span className="flex items-center text-blue-500">
            <IoBulbOutline className="mr-3" />
            Notification Setting
          </span>
        </li>
        <li className="flex items-center justify-between p-4 border rounded-md cursor-pointer" onClick={() => navigate('/password-manager')}>
          <span className="flex items-center text-blue-500">
            <GrKey className="mr-3" />
            Password Manager
          </span>
        </li>
        <li className="flex items-center justify-between p-4 border rounded-md cursor-pointer" onClick={handleDeleteAccount}>
          <span className="flex items-center text-red-500">
            <IoPersonOutline className="mr-3" />
            Delete Account
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Settings;

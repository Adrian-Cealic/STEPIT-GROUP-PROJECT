import { IoBulbOutline, IoPersonOutline } from "react-icons/io5";
import { GrKey } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Settings</h1>
      <ul>
        <li className="flex items-center justify-between p-4 border-b">
          <Link to="/notification-settings" className="flex items-center text-blue-500">
            <IoBulbOutline className="mr-2" /> Notification Setting
          </Link>
        </li>
        <li className="flex items-center justify-between p-4 border-b">
          <Link to="/password-manager" className="flex items-center text-blue-500">
            <GrKey className="mr-2" /> Password Manager
          </Link>
        </li>
        <li className="flex items-center justify-between p-4 border-b">
          <button onClick={() => window.confirm("Are you sure you want to delete the account?")} className="flex items-center text-red-500">
            <IoPersonOutline className="mr-2" /> Delete Account
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Settings;

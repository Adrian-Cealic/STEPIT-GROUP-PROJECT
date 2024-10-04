import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const PasswordManager = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Password Manager</h1>
      <form className="mt-4 space-y-4">
        <div>
          <label>Current Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="p-2 border w-full"
            />
            <FaEyeSlash className="absolute right-2 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
          </div>
        </div>
        <div>
          <label>New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2 border w-full"
            />
            <FaEyeSlash className="absolute right-2 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
          </div>
        </div>
        <div>
          <label>Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border w-full"
            />
            <FaEyeSlash className="absolute right-2 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
          </div>
        </div>
        <button type="button" onClick={() => alert("Password changed successfully!")} className="bg-blue-500 text-white p-2 w-full">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordManager;

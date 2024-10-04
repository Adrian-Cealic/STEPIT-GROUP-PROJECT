import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from 'react';

const PasswordManager = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      alert("Password changed successfully!");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6">Password Manager</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Current Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="p-3 border w-full mt-2 rounded-md"
            />
            {showPassword ? (
              <FaEye className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEyeSlash className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 border w-full mt-2 rounded-md"
            />
            {showPassword ? (
              <FaEye className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEyeSlash className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 border w-full mt-2 rounded-md"
            />
            {showPassword ? (
              <FaEye className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEyeSlash className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
        </div>
        <button type="button" onClick={handleChangePassword} className="bg-blue-500 text-white p-3 w-full rounded-md mt-4">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordManager;

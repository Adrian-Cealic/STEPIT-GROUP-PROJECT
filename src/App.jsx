import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage';
import EditProfile from './Pages/EditProfile';
import HelpCenterContactUs from './Pages/HelpCenterContactUs';
import Logout from './Pages/Logout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/help-center" element={<HelpCenterContactUs />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;

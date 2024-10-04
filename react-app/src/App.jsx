/*
import { useState, useEffect } from 'react';
import doctorsContext from './contexts/doctorsContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import DoctorsFavPage from './Pages/DoctorsFavPage';
import Doctor from './Pages/Doctor';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [favDoctors, setFavDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [favServices, setFavServices] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Fetch doctors data
        const responseDoctors = await axios.get("https://apiv2doctors.onrender.com/doctors");
        // Access the correct path to data based on the structure of the API response
        setDoctors(responseDoctors.data.doctors || responseDoctors.data);

        // Similarly, fetch services, favorite doctors, and services
        const responseServices = await axios.get("SERVICE_API_ENDPOINT_HERE");
        setServices(responseServices.data.services || responseServices.data);

        const responseFavDoctors = await axios.get("FAV_DOCTORS_API_ENDPOINT_HERE");
        setFavDoctors(responseFavDoctors.data.favDoctors || responseFavDoctors.data);

        const responseFavServices = await axios.get("FAV_SERVICES_API_ENDPOINT_HERE");
        setFavServices(responseFavServices.data.favServices || responseFavServices.data);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    };

    fetchItems();
  }, []);
  return (
    <doctorsContext.Provider value={{ doctors, setDoctors, favDoctors, setFavDoctors, services, setServices, favServices, setFavServices }}>
      <BrowserRouter>
        <Routes>
          <Route path='/Doctors' element={<DoctorsFavPage doctors={doctors} />} />
          <Route path='/Doctors/:doctorId' element={<Doctor doctors={doctors} />} />
        </Routes>
      </BrowserRouter>
    </doctorsContext.Provider>
  );
}

export default App;
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import PasswordManager from './components/PasswordManager';
import PrivacyPolicy from './components/PrivacyPolicy';
import HelpCenter from './components/HelpCenter';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/password-manager" element={<PasswordManager />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help-center" element={<HelpCenter />} />
    </Routes>
  </Router>
);

export default App;


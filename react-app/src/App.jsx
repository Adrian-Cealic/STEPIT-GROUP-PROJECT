import { useState, useEffect } from 'react'
import doctorsContext from './contexts/doctorsContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
//Imports pentru pagini

// Importă alte componente precum Signup dacă există


const App = () => {
  //Adaugati state hooks care va trebuiesc pentru a pastra datele din api pentru a folosi context-ul
  const [doctors, setDoctors] = useState([]);
  const [favDoctors, setFavDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [favServices, setFavServices] = useState([]);


  //DACA AVETI NEVOIE DE ENDPOINT-URI NOI IN API, SCRIETI-I LUI CRISTI SAU LUI ADRIAN ******************************************************************

  useEffect(() => {
    const fetchItems = async () => {    //Adaugati in fetchItems() api requests (Folositi va rog comentarii ca sa fie mai usor pentru toti sa inteleaga)
      try {
        //Doctori si Servicii
        const responseDoctors = await axios.get("https://apiv2doctors.onrender.com/doctors");
        setDoctors(response.data);
        const responseServices = await axios.get("");
        setServices(response.data);

        //Doctori si Servicii Favorite
        const responseFavDoctors = await axios.get("");
        setFavDoctors(response.data);
        const responseFavServices = await axios.get("");
        setFavServices(response.data);

        
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    }

    fetchItems();
  }, [])
  

  return (
    //Adaugati in value la doctorsContext.Provider state hooks de care aveti nevoie
    <doctorsContext.Provider value={{doctors, setDoctors, favDoctors, setFavDoctors, services, setServices, favServices, setFavServices}}>
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </doctorsContext.Provider>
  )
}


// Importează alte componente precum Signup, Dashboard după necesități

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Creează această componentă
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        {/* Adaugă alte rute după necesități */}
        {/* Exemplu:
        <Route path="/signup" element={<Signup />} />
        */}
      </Routes>
    </Router>
  );
}





export default App

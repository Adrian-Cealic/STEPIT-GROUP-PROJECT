import { useState, useEffect } from 'react'
import doctorsContext from './contexts/doctorsContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import DoctorsFavPage from './Pages/DoctorsFavPage'
import Doctor from './Pages/Doctor'
import { Register } from './pages/Register'
//Imports pentru pagini

const App = () => {
  //Adaugati state hooks care va trebuiesc pentru a pastra datele din api pentru a folosi context-ul
  const [doctors, setDoctors] = useState([]);
  const [favDoctors, setFavDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [favServices, setFavServices] = useState([]);


  //DACA AVETI NEVOIE DE ENDPOINT-URI NOI IN API, SCRIETI-I LUI CRISTI SAU LUI ADRIAN ******************************************************************

  useEffect(() => {
    const fetchItems = async () => {
      try {
        //Doctori si Servicii
        const responseDoctors = await axios.get("https://apiv2doctors.onrender.com/doctors");
        setDoctors(responseDoctors.data);

        const responseServices = await axios.get("SERVICE_API_ENDPOINT_HERE");
        setServices(responseServices.data);

        //Doctori si Servicii Favorite
        const responseFavDoctors = await axios.get("FAV_DOCTORS_API_ENDPOINT_HERE");
        setFavDoctors(responseFavDoctors.data);

        const responseFavServices = await axios.get("FAV_SERVICES_API_ENDPOINT_HERE");
        setFavServices(responseFavServices.data);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    }

    fetchItems();
  }, []);


  return (
    //Adaugati in value la doctorsContext.Provider state hooks de care aveti nevoie
    <doctorsContext.Provider value={{ doctors, setDoctors, favDoctors, setFavDoctors, services, setServices, favServices, setFavServices }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/Doctors' element={<DoctorsFavPage doctors={doctors} />} />
          <Route path='/Doctors/:doctorId' element={<Doctor />} />
        </Routes>
      </BrowserRouter>
    </doctorsContext.Provider>
  )
}

export default App

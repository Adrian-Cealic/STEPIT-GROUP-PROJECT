import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentsPage from './pages/AppointmentsPage';
import CancelAppointment from './pages/CancelAppointment';
import ReviewAppointment from './pages/ReviewAppointment';
import AppointmentDetails from './pages/AppointmentDetails';
import RebookAppointment from './pages/RebookAppointment'; // Import Rebook page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentsPage />} />
        <Route path="/cancel/:id" element={<CancelAppointment />} />
        <Route path="/review/:id" element={<ReviewAppointment />} />
        <Route path="/appointment/:id" element={<AppointmentDetails />} />
        <Route path="/rebook/:id" element={<RebookAppointment />} /> 
      </Routes>
    </Router>
  );
}

export default App;

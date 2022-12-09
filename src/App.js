import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddApartmentPage from './pages/AddApartmentPage';
import ApartmentsPage from './pages/ApartmentsPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
      </Routes>
    </div>
  );
}

export default App;

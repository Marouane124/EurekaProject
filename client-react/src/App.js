import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VoitureList from './components/VoitureList';
import AddVoiture from './components/AddVoiture';
import ClientList from './components/ClientList';
import AddClient from './components/AddClient';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<VoitureList />} />
            <Route path="/voitures" element={<VoitureList />} />
            <Route path="/add-voiture" element={<AddVoiture />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/add-client" element={<AddClient />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

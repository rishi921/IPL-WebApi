import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MatchDetails from './Components/MatchDetails';
import PlayerForm from './Components/PlayerForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-details" element={<MatchDetails />} />
          <Route path="/add-player" element={<PlayerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

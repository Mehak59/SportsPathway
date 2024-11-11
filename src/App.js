import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Latest from './pages/Latest';      
import Home from './pages/Home';          
import Explore from './pages/explore';
import Login from './pages/login';
import Questionnaire from './pages/questionnaire';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import About from './pages/about';
import Shooting from './pages/shooting';
import Football from './pages/football';
import Badminton from './pages/badminton';
import TableTennis from './pages/tabletennis';
import Tennis from './pages/tennis';
import Squash from './pages/squash';
import Archery from './pages/archery';
function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/latest" element={<Latest />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/shooting" element={<Shooting />} />
          <Route path="/football" element={<Football />} />
          <Route path="/badminton" element={<Badminton />} />
          <Route path="/tabletennis" element={<TableTennis />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/squash" element={<Squash />} />
          <Route path="/archery" element={<Archery />} />
        </Routes>
      </div>
      <Footer/>
      
    </Router>
    
  );
}

export default App;

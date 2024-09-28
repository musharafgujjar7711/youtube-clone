import React from 'react';
import { useAuth } from './components/ContextApi';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Playvideo from './components/Playvideo';
import Suggestion from './components/Suggestion';

function App() {
    

    return (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search/:searchQuery' element={<Search />} />
                <Route path='/video/:id' element={<Playvideo />} />
            </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;

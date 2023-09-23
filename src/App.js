import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Edit from './Components/Edit/Edit';
import Create from './Components/Create/Create';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/post';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* default route */}
          <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
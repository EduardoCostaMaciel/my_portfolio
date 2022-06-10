import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Feedback } from './pages/Feedback';
import { Home } from './pages/Home';
import { Project } from './pages/Project';

export function App() {
  return (
      // <Routes className="App">
      <Routes>
        <Route exact path='/' element={ <Navigate replace to='/my_portfolio' /> } />
        <Route exact path='/my_portfolio' element={ <Navigate replace to='/Home' /> } />
        <Route path='/Home' element={ <Home /> } />
        <Route exact path='/About' element={ <About /> } />
        <Route path='/Contact' element={ <Contact /> } />
        <Route path='/Projects' element={ <Project /> } />
        <Route path='/Feedback' element={ <Feedback /> } />
      </Routes>
  );
}
import React from 'react';
import './App.css';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ShowContant from './pages/contentpage/ShowContant';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index element={<ShowContant />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;

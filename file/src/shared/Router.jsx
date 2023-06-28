import React from 'react'
import { Home } from '../pages/Home.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

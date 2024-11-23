import React from 'react'
import { Navbar } from './components/components.js';
import { Home } from './pages/Home/Home.jsx';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

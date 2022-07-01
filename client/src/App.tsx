import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ClientPage from './pages/ClientPage';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/client" element={<ClientPage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import LogIn from './components/LogIn.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Dashboard from './components/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
);
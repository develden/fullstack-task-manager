import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TaskDetail from './pages/TaskDetail';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter; 
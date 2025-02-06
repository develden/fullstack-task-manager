import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import TaskDetail from './pages/TaskDetail';
import ProtectedRoute from './components/ProtectedRoute';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter; 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Courses from './component/Courses.jsx';
import Signup from './component/Signup.jsx';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
           <Home />
          } />
          <Route path="/course" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
 
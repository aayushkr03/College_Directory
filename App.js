import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [userRole, setUserRole] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  switch (userRole) {
    case 'Student':
      return <StudentDashboard />;
    case 'Faculty':
      return <FacultyDashboard />;
    case 'Admin':
      return <AdminDashboard />;
    default:
      return <div>Error: Invalid role</div>;
  }
}

export default App;

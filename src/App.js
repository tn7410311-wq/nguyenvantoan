import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import DailyCompletedTasks from "./pages/DailyCompletedTasks";
import { useRef } from 'react';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{display: "flex",alignItems: "center",padding: "16px 24px",background: "linear-gradient(90deg, #4f46e5, #9333ea)",boxShadow: "0 4px 15px rgba(0,0,0,0.25)",}}>
          <Link to="/" style={{color: "white",fontWeight: "600",fontSize: "16px",padding: "8px 16px",borderRadius: "8px",backgroundColor: "rgba(255,255,255,0.15)",}}>HOME</Link> 
          <div style={{marginLeft: "auto", display: "flex", gap: "20px"}}>
            <Link to="/Register" style={{color: "white",fontWeight: "600",padding: "8px 16px",borderRadius: "8px",backgroundColor: "rgba(255,255,255,0.15)",}}>REGISTER</Link>  
            <Link to="/login" style={{color: "white",fontWeight: "600",padding: "8px 16px",borderRadius: "8px",backgroundColor: "rgba(255,255,255,0.15)",}}>LOGIN</Link></div>  
          </div>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/daily-tasks" element={<DailyCompletedTasks />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

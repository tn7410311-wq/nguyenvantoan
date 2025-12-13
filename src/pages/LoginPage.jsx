import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from "react-router-dom";
const LoginPage = () => {
  const { users, login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        onSubmit: (values) => {
            const foundUser = users.find(
              (user) =>
                user.email === values.email &&
                user.password === values.password
            );
            
            if (foundUser) {
              setError("");             
              login(foundUser);          
              navigate("/daily-tasks"); 
            } else {
              setError("Email hoặc mật khẩu không đúng"); 
            }
        },
    });
    return (
        <div style={{ maxWidth: '420px', margin: '80px auto', padding: '30px', border: '1px solid #e5e7eb',borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)",backgroundColor: "#ffffff",}}>
          <h2 style={{textAlign: "center",marginBottom: "20px",fontSize: "26px",fontWeight: "600",color: "#1f2937"}}><span style={{ marginRight: "10px" }}>LOGIN</span><span style={{ color: "#9ca3af", margin: "0 6px", }}>|</span>

            <Link
              to="/Register"
              style={{color: "#8f0000ff",textDecoration: "none",fontWeight: "500",fontSize: "px",}}>REGISTER
            </Link>
          </h2>

                {error && <div style={{ color: "#b91c1c",marginBottom: "15px", backgroundColor: "#fee2e2",padding: "10px",borderRadius: "6px",fontSize: "14px"}}>{error}</div>}
      
          <form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="example@email.com"
              style={{ width: '100%',padding: "10px 12px",borderRadius: "8px",border: "1px solid #d1d5db",outline: "none", marginTop: '5px' }}
            />
            </div>

            <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="••••••••"
              style={{ width: '100%', padding: "10px 12px",borderRadius: "8px",border: "1px solid #d1d5db",outline: "none", marginTop: '5px' }}
            />
            </div>

            <button type="submit" style={{ width: '50%',fontSize: "16px",fontWeight: "500",borderRadius: "8px", padding: "12px",backgroundColor: "#4f46e5", color: 'white', border: 'none', cursor: 'pointer' }}>
            Login
            </button>
          </form>
        </div>
    );
}

export default LoginPage;
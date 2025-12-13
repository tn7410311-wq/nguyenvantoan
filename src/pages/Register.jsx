import { useFormik } from "formik";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  
  const { users, addUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      // Check email đã tồn tại chưa
      const existedUser = users.find(
        (user) => user.email === values.email
      );

      if (existedUser) {
        setError("Email đã tồn tại");
        return;
      }
      //Check password trùng nhau
      if (values.password !== values.confirmPassword) {
        setError("Mật khẩu không khớp");
        return;
      }
      //Lưu user
      addUser({
        email: values.email,
        password: values.password,
      });
      setError("");
      alert("Đăng ký thành công");
      navigate("/login");
    },
  });
  return (
    <div
      style={{maxWidth: "420px",margin: "80px auto", padding: "30px",borderRadius: "12px",border: "1px solid #e5e7eb",boxShadow: "0 10px 25px rgba(0,0,0,0.1)",backgroundColor: "#ffffff", 
      }}
    >
      <h2
        style={{textAlign: "center",marginBottom: "20px",fontSize: "26px",fontWeight: "600",color: "#1f2937",}}>
        <span style={{ color: "#1f2937" }}>REGISTER</span>
        <span style={{ color: "#9ca3af", margin: "0 6px" }}>|</span>
        <Link
          to="/login"
          style={{color: "#8f0000ff",textDecoration: "none",fontSize: "px",marginRight: "10px",}}>LOGIN
        </Link>
      </h2>
      {error && (
        <div
          style={{color: "#b91c1c",backgroundColor: "#fee2e2",padding: "10px",borderRadius: "6px",marginBottom: "15px",fontSize: "14px",}}>
          {error}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{display: "block",marginBottom: "6px",fontSize: "14px",color: "#374151"}}>Email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="example@email.com"
            style={{width: "100%",padding: "10px 12px",borderRadius: "8px",border: "1px solid #d1d5db",outline: "none"}}/>
        </div>

        {/* Password */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{display: "block",marginBottom: "6px",fontSize: "14px",color: "#374151"}}>Password
          </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="••••••••"
            style={{width: "100%",padding: "10px 12px",borderRadius: "8px",border: "1px solid #d1d5db",outline: "none"}}/>
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "22px" }}>
          <label
            style={{display: "block",marginBottom: "6px",fontSize: "14px",color: "#374151"}}>Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="••••••••"
            style={{width: "100%",padding: "10px 12px",borderRadius: "8px",border: "1px solid #d1d5db",outline: "none"}}/>
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{width: '50%',fontSize: "16px",fontWeight: "500",borderRadius: "8px", padding: "12px",backgroundColor: "#4f46e5", color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;

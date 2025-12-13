import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{minHeight: "100vh",background: "linear-gradient(135deg, #dddee6ff, #988ca3ff)",display: "flex",alignItems: "center",justifyContent: "center",color: "white"}}>
      <div
        style={{backgroundColor: "rgba(255,255,255,0.15)",backdropFilter: "blur(10px)",padding: "50px",borderRadius: "20px",textAlign: "center",maxWidth: "520px",boxShadow: "0 25px 50px rgba(0,0,0,0.3)"}}>
        <h1
          style={{fontSize: "38px",fontWeight: "700",marginBottom: "20px"}}>
           Chào mừng bạn 
        </h1>
        <p
          style={{fontSize: "18px",lineHeight: "1.6",marginBottom: "30px",opacity: 0.95}}>
          Đây là website quản lý công việc hoàn thành trong ngày.  
          Đăng nhập để bắt đầu theo dõi hiệu suất của bạn 
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{padding: "12px 24px",borderRadius: "10px",border: "none",backgroundColor: "#22c55e",color: "white",fontSize: "16px",fontWeight: "600",cursor: "pointer"}}>
               Đăng nhập
            </button>
          </Link>

          <Link to="/Register" style={{ textDecoration: "none" }}>
            <button
              style={{padding: "12px 24px",borderRadius: "10px",border: "none",backgroundColor: "#f59e0b",color: "white",fontSize: "16px",fontWeight: "600",cursor: "pointer"}}>
               Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

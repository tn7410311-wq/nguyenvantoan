import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lưu danh sách user (có sẵn admin)
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers
      ? JSON.parse(storedUsers)
      : [{ email: "admin@example.com", password: "admin123" }];
  });
  // User đang đăng nhập
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Lưu users vào localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  // Login
  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("authToken", "logged_in");
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  // Logout
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
  };
  // Register
  const addUser = (userData) => {
    setUsers((prev) => [...prev, userData]);
  };

  return (
    <AuthContext.Provider
      value={{users,currentUser,login,logout,addUser,}}>
      {children}
    </AuthContext.Provider>
  );
};

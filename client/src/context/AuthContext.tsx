import { createContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Define the shape of the AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Provide default values for the context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode; // This explicitly types the children prop
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log("my token", token)
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();
      console.log("my decodedToken", expirationTime)
      console.log("my currentTime", currentTime)

      // If the token is expired, log out
      if (currentTime >= expirationTime) {
        console.log("my logout")
        logout();
      } else {
        setIsAuthenticated(true); // Token is valid, user is authenticated
      }
    }
  }, []);

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/auth/login")
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import {createContext, useEffect, useState} from "react"


const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  });

  const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuthStatus = localStorage.getItem("isAuthenticated");
        if (storedAuthStatus === "true") {
          setIsAuthenticated(true);
        }
      }, []);

      const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Store the status in localStorage
      };
    
      // Logout function to update the authentication state
      const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated"); // Remove the status from localStorage
      };

      return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
      
  }



export { AuthContext, AuthProvider };
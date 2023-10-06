import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../services/config"; // Import your Firebase authentication configuration here
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle Google login
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setCurrentUser(user);
      localStorage.setItem("email", user.email);
      return user;
    } catch (error) {
      throw error;
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      localStorage.removeItem("email");
    } catch (error) {
      throw error;
    }
  };

  // Effect to set the current user from Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loginWithGoogle,
    logout,
    isAuthenticated: !!currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

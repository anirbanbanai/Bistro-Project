import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthPrvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const LogOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, currentuser => {
      setUser(currentuser);

      if (currentuser) {
        axios.post(`http://localhost:5000/jwt`, { email: currentuser.email })
          .then(data => {
            console.log(data.data);
            localStorage.setItem('access-token', data.data);
            setLoading(false);

          })
      }
      else {
        localStorage.removeItem('access-token')
      }


    })
    return () => {
      return unSub();
    };
  }, [])
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    LogOut,
    updateUserProfile,
    googleSignIn,
  }
  console.log(user?.displayName);
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthPrvider;
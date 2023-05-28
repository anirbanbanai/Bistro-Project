import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthPrvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const LogOut = ()=>{
    return signOut(auth);
  }

    useEffect(()=>{
        const unSub = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            setLoading(false);
        })
        return ()=>{
            return unSub();
        };
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        LogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrvider;
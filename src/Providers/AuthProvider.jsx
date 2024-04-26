import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Register Auth
    const registerAuth = (email ,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login auth
    const loginAuth = (email ,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=> unsubscribe()
    },[])
    const userInfo ={
        user,
        registerAuth,
        loginAuth,
        setUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
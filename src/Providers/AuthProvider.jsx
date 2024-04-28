import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase";
import { TwitterAuthProvider } from "firebase/auth/cordova";


export const AuthContext = new createContext(null)
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerAuth = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider)
        
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const photoUpdate = (photo) => {
        // setLoading(true)
        window.location.reload()
        return updateProfile(auth.currentUser, {
            photoURL: photo
        })
    }
    const nameUpdate = (name) => {        
        window.location.reload()
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }


    const loginAuth = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)
        }))
        return () => {
            unSubscribe()
        }
    }, [user?.photoURL, user?.displayName])


    const authInfo = {
        user,
        setUser,
        registerAuth,
        loginAuth,
        loading,
        logOut,
        profileUpdate,
        googleLogin,        
        photoUpdate,
        nameUpdate,
        setLoading,
        twitterLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth/cordova";

const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Register Auth
    const registerAuth = (email ,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login auth
    const loginAuth = (email ,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    //twitter
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider)
    }

    //profile update
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    
    //photo update
    const photoUpdate = (photo) => {
        // setLoading(true)
        window.location.reload()
        return updateProfile(auth.currentUser, {
            photoURL: photo
        })
    }
    //name update
    const nameUpdate = (name) => {
        // setLoading(true)
        window.location.reload()
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=> {
            unsubscribe()
        }
    },[])
    const userInfo ={
        user,
        registerAuth,
        loginAuth,
        setUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        profileUpdate,
        photoUpdate,
        nameUpdate
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
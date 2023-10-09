import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

 
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user
    const createUser =(email, password)=>{
        setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)

    }

    // LogIn user
    const logInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user

    const userLogout =()=>{
        setLoading(true)
        return signOut(auth);
    }


    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    //update profile
    const updateUserProfile =(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
          })
    }


    // user observer
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
    
        })

        return()=>{
            unSubscribe();
        }

    },[]);








   const authInfo ={
    createUser,
    user,
    userLogout,
    logInUser,
    loading,
    signInWithGoogle,
    updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

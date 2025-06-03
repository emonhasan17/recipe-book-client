import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    // login via google-------------------------

    const googleUser = () =>{
        return signInWithPopup(auth,provider)
    }


    // create user via email---------------------

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // login user via email----------------------

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user------------------------------------

    const logoutUser = () =>{
        return signOut(auth)
    }

    // update user profile----------------------------

    const updateUser = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }


    // set ovserver---------------------------------

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    // authdata

    const authData = {
        createUser,
        loginUser,
        user,
        setUser,
        googleUser,
        logoutUser,
        updateUser,
        loading,
        setLoading
    }


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
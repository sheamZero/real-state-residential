import React from "react";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // load data 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    // createUsers
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //loginUser
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signIn
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // gitHub login
    const gitHubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    //Update Profile
    const updateProfilee = (name, photo) => {
        return (
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
        )
    }

    // onAuth state change
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current = ',currentUser);
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unSubcribe();
        }
    }, [])


    const authInfo = {
        data,
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin,
        updateProfilee
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
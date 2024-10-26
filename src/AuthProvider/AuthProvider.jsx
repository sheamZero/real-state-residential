import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // load data 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])

    // createUsers
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //loginUser
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signIn
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // gitHub login
    const gitHubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    // onAuth state change
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("current user = ", currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubcribe();
        }
    }, [])


    const authInfo = {
        data,
        createUser,
        loginUser,
        googleLogin,
        gitHubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
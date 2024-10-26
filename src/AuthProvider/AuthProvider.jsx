import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }



    const authInfo = {
        data,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
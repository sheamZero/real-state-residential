import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])




    const authInfo = {
        data
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
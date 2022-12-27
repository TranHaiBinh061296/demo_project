import { createContext, useState } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({chidlren}) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {chidlren}
        </AuthContext.Provider>
    )
}

export default AuthContext;
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,pass,name,accept)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass,name,accept);
    }
    const logInUser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user has logged')
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            console.log('user logOut')
            unSubscribe();
        }
    },[])
    const share = {
        user,
        createUser,
        logInUser,
        logOutUser,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={share}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
    children:PropTypes.node,
}
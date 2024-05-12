import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [User, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const [reload,setReload]=useState(false);
    const [refresh,setRefresh]=useState(false)

    // register user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleProvider = new GoogleAuthProvider();
    function google() {
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider();
    function github() {
        return signInWithPopup(auth, githubProvider)
    }
    const logout=()=>{
       return signOut(auth) 
    }


    // on auth change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
    }, [reload])
    


    return (
        <AuthContext.Provider value={{ google, github, registerUser, loginUser ,logout, User , loading , reload , setReload , refresh,setRefresh}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
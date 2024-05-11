import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // register user
    const registerUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }


    const googleProvider = new GoogleAuthProvider();
    function google() {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    function github() {
        return signInWithPopup(auth, githubProvider)
    }


    return (
        <AuthContext.Provider value={{ google , github , registerUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
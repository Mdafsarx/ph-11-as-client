import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import useAxiosUrl from "../hooks/useAxiosUrl";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [User, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const [reload,setReload]=useState(false);
    const [refresh,setRefresh]=useState(false);
    const axiosUrl=useAxiosUrl()

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
            const userEmail=user?.email;
            const logUser={email:userEmail};
            setUser(user)
            setLoading(false)
            if(user){
                axiosUrl.post('/jwt',logUser,{withCredentials:true})
                .then(data=>console.log(data.data))
                .catch(error=>console.log(error))
            }
            else{
                axiosUrl.post('/logout',logUser,{withCredentials:true})
                .then(data=>console.log(data.data))
                .then(error=>console.log(error))
            }
        })
    }, [reload])
    


    return (
        <AuthContext.Provider value={{ google, github, registerUser, loginUser ,logout, User , loading , reload , setReload , refresh,setRefresh}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
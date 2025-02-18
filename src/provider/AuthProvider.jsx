import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    //states...
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Login
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //loginWithGoogle
    const LogInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //logInWithGithub
    const logInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

    //Logout
    const LogOut =() => {
        setLoading(true)
        return signOut(auth)}

    // SetUser
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of current User in useEffect:', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{ unSubscribe();}
    },[])

    const authInfo = {
        user,
        createUser,
        singInUser,
        LogInWithGoogle,
        logInWithGithub,
        LogOut,
        loading }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
AuthProvider.propTypes = {
    children:  PropTypes.node
}
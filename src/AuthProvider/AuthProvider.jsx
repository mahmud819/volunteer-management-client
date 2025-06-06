
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const AuthInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        userLogOut,
        loading,
        setLoading
    }
    useEffect(()=>{
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            
            if(currentUser?.email){
                const user = {email : currentUser.email};
                axios.post('https://volunteer-website-server-mu.vercel.app/jwt',user,{withCredentials:true})
                .then(res=>{
                    // console.log(res);
                    setLoading(false);
                })
            }
            else{
                axios.post('https://volunteer-website-server-mu.vercel.app/logOut',{},{withCredentials:true})
                .then(res=>{
                    // console.log('log out token',res.data);
                    setLoading(false);
                })

            }
            
        });
    return()=>{
        unsubscribe()
    }

    },[])
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
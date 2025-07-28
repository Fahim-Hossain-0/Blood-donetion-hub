import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../firebase/auth.config';
import useAxiosPublic from '../Hooks/axiosPublic';
import { auth } from '../firebase/auth.config';

const AuthProvider = ({children}) => {
     const axiosPublic = useAxiosPublic();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
   
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("🚀 ~ unsubscribe ~ currentUser:", currentUser);

      if (currentUser) {
        axiosPublic
          .post("/add-user", {
            email: currentUser.email,
            role: "doner",
            status: "active",
            loginCount: 1,
          })
          .then((res) => {
            setUser(currentUser);
            console.log(res.data);
             setLoading(false);
          });
      }
      setUser(null);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);




    const userInfo = {
        user,
        setUser,
        loading,
        loginUser,
        createUser,
        signOutUser,
        
        


    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
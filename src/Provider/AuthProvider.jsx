import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user, loading);

    const createNewUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password);
      setLoading(true)
    }


    useEffect(() => {

      const unSubscribe =  onAuthStateChanged(auth, curentUser => {
            setUser(curentUser);
            setLoading(false)
           
        })

        return () => {

            unSubscribe()

        }

    },[])



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }


    // sign in logic

    const signIn  = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)

    }

    const useInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        signIn,
        loading
       
        
    }



    return <AuthContext.Provider value={useInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { auth } from "../firebase/config";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ProtectedContext = createContext();


export const ProtectedProvider = (props)=>{
    const [mount,setMount] = useState(true);
    const navigate  = useNavigate();
    // useEffect(()=>{
    //     setMount
    // },[])
    
    const [user,setUser] = useState(null);


    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setUser(user);
                setMount(false);

            }
            else{
                setMount(false);
            }
        })
    },[navigate])

    const handleLogout = async()=>{
        await signOut(auth);
        toast.success("logout success")
        navigate("/login");
    }

    const value={
        user,setUser,mount,handleLogout
    }


    return <ProtectedContext.Provider value={value}>
        {props.children}
    </ProtectedContext.Provider>
}
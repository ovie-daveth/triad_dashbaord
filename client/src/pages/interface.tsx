import React, { useContext, useEffect } from 'react'
import {AuthContext} from "@/context/AuthContext"
import { useNavigate } from 'react-router-dom';

const Interface = () => {

    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    let action;
    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated)
        if (!isAuthenticated){
            action = navigate("/auth/login")
        } else {
            action = navigate("/dashboard")
        }
    }, [])

return action
}

export default Interface
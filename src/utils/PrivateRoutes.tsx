import { Outlet, Navigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { useState } from 'react';
const PrivateRoutes = () => {
    const [isToken, setIsToken] = useState(false);
    let exiteToken: any = localStorage.getItem("token");
    let decodedToken: any = jwt_decode(exiteToken);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
    } else {
        console.log("Valid token");
        setIsToken(true);
    }

    return (
        (exiteToken) ? <Outlet /> : <Navigate to="/Login" />
    )
}

export default PrivateRoutes
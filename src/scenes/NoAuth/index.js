import React, { useEffect } from 'react';
import NoAuthScreen from "./NoAuthScreen";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const noAuth = () => {
   
    return <NoAuthScreen />
}


export default noAuth;
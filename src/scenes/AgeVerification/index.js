import React, { useEffect } from 'react';
import AgeScreen from "./AgeVerificationScreen";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const onConfirm = (history, setCookie) =>{
    const year =  new Date().getFullYear() +1;
    const oneYear = new Date().setFullYear(year);
    setCookie("ageVerify", true, {
        path: "/",
        expires: new Date(oneYear)
    });
    history.push("/Home");
}
const onCancel = (history, setCookie) =>{
    history.push("/NoAuth");
}
const AgeVerification = () => {
    const history = useHistory();
    const [cookies, setCookie] = useCookies();
    useEffect(() => {
            if(cookies.ageVerify)
            onConfirm(history, setCookie);
    }, []);
    return <AgeScreen onConfirm={() => onConfirm(history, setCookie)}  onCancel={() => onCancel(history, setCookie)} />
}


export default AgeVerification;
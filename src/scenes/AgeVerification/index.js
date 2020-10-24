import React from 'react';
import AgeScreen from "./AgeVerificationScreen";
import { useHistory } from "react-router-dom";

const onConfirm = (history) =>{
    history.push("/Home")
}
const AgeVerification = () => {
    const history = useHistory();
    return <AgeScreen onConfirm={() => onConfirm(history)} />
}


export default AgeVerification;
import React from 'react';
// import PropTypes from 'prop-types';
import './index.scss';

import Logo from '../../assets/logo.svg'
import Leaf from "../../assets/cannbisLeaf.svg";
import Card from "../../components/card";
const AgeVerification = () => {
    return <>
    <div className="container" >
    <Card circle={true}>
            <img className="logosize" src={Logo} />
        </Card>
        <span class="title">
            Age Verification
        </span>
        <div>
        <span class="sub-title">You must be </span>
        <span class="sub-title redHigllignt">19 </span>
        <span class="sub-title" >years old to enter.</span>
        </div>
        <div>
            <button className="yesButton" >Yes</button>
            <button className="noButton" >No</button>
            <img className="cannbisLeaf" src={Leaf} />
        </div>
    </div>
        </>
}



export default AgeVerification;


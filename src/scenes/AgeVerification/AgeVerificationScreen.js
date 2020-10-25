import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./index.scss";

import Logo from "../../assets/logo.svg";
import Leaf from "../../assets/cannbisLeaf.svg";
import Card from "../../components/card";

import useDimensions from "../../util/customHooks/useDimensions";
import SmokeRender from "../../util/smokeRenderer";

const AgeVerification = ({onCancel,onConfirm}) => {
  const smoke = useRef(null);
  let { height, width } = useDimensions();
  useEffect(() => {
    onmousemove = SmokeRender(smoke, height, width);
  }, [height, width] );
  return (
    <>
      <div className="container">
        <Card circle={true}>
          <img alt="" className="logosize" src={Logo} />
        </Card>
        <span className="title">Age Verification</span>
        <div>
          <span className="sub-title">You must be </span>
          <span className="sub-title redHigllignt">19 </span>
          <span className="sub-title">years old to enter.</span>
        </div>
        <div>
          <button onClick={onConfirm} className="yesButton">Yes</button>
          <button onClick={onCancel} className="noButton">No</button>
          <img alt="" className="cannbisLeaf" src={Leaf} />
        </div>
      </div>
      <canvas
        onMouseOver={onmousemove}
        id="canvas"
        className="canvas"
        ref={smoke}
      ></canvas>
    </>
  );
};

AgeVerification.propTypes = {
  onConfirm : PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default AgeVerification;

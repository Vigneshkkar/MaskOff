import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./index.scss";

import Logo from "../../assets/logo.svg";
import Leaf from "../../assets/cannbisLeaf.svg";
import Card from "../../components/card";
import SmokeMachine from "@bijection/smoke";
import useDimensions from "../../util/customHooks/useDimensions";

const AgeVerification = ({onCancel,onConfirm}) => {
  const smoke = useRef(null);
  let { height, width } = useDimensions();
  useEffect(() => {

    var canvas = smoke.current;
    var ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    var party = SmokeMachine(ctx, [255, 255, 255]);
    const setHeight = height + 100;
    party.start(); 
    let i=0;
    
        setInterval(() => {
            for(var i=0; i<10; i++){            
                party.addSmoke((width/10)*i , setHeight, Math.random()*10);
            }
        }, 1000);

    onmousemove = function (e) {
      var x = e.clientX;
      var y = e.clientY;
      var n = 2.5;
      var t = Math.floor(Math.random() * 200) + 3800;
      party.addsmoke(x, y, n, t);
    };
  }, [height, width] );
  return (
    <>
      <div className="container">
        <Card circle={true}>
          <img className="logosize" src={Logo} />
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
          <img className="cannbisLeaf" src={Leaf} />
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

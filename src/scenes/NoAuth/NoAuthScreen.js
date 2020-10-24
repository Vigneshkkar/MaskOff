import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.scss";
import Card from "../../components/card";
import useDimensions from "../../util/customHooks/useDimensions";
import NoAuthsvg from "../../assets/noAuthImage.svg";
import SmokeRender from "../../util/smokeRenderer";

const NoAuth = ({}) => {
  console.log(styles);
  const smoke = useRef(null);
  let { height, width } = useDimensions();
  useEffect(() => {
    onmousemove = SmokeRender(smoke, height, width);
  }, [height, width] );
  return (
    <>
      <div className={styles.container}>
        <Card>
          <span className={styles.title}>Sorry, You are not old enough to view this site.</span>
        </Card>
          <img className={styles.noAuthImg} src={NoAuthsvg}></img>
      </div>
      <canvas
        onMouseOver={onmousemove}
        className="canvas"
        ref={smoke}
      ></canvas>
    </>
  );
};


export default NoAuth;

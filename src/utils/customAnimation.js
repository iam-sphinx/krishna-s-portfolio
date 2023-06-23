import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
`;

function CustomAnimation({ children }) {
  return (
    <Reveal keyframes={customAnimation} triggerOnce cascade damping={0.7}>
      {children}
    </Reveal>
  );
}

export default CustomAnimation;

import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function CustomAnimation({ children }) {
  return <Reveal keyframes={customAnimation} triggerOnce>{children}</Reveal>;
}

export default CustomAnimation;

import React from "react";
import skate from "../Skateboarding.gif";
function Spinner(props) {
  return (
    <div className="text-center">
      <img src={skate} alt="Loading ..." />
    </div>
  );
}

export default Spinner;

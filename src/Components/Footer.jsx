import React, { useState } from "react";
import "../../src/index.css";
function Footer(props) {
  return (
    <div>
      <div className="footer">
        <div
          class="p-3"
          style={{
            background: props.background,
            color: props.color,
            border: "2px solid " + props.color,
          }}
        >
          © 2022 Copyright : NewsMonkey
        </div>
      </div>
    </div>
  );
}

export default Footer;

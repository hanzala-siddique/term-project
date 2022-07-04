import React from "react";

function Background(props) {
  return (
    <div
      style={{
        backgroundImage: `url("bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
}

export default Background;

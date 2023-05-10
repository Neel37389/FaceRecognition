import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "right" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa2 pointer br2 shadow-5"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "right" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa2 pointer br2 shadow-5"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa2 pointer br2 shadow-5"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;

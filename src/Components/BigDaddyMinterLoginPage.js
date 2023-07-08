import React from "react";
import '../BigDaddyCSS.css';

function BigDaddyMinterLoginPage({ bigdaddyhandleLogIn }) {
  return (
    <div className="bigDaddyContainer">
    <img src={"/bigdaddymintersite/bigdaddy-logo-quart.png"} width={"300px"} height={"150px"} alt="logo" top="0px" align="center"/>
      <h1>Welcome to the Minter Page</h1>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <button className="glow-on-hover" onClick={bigdaddyhandleLogIn}>Log In</button>
      </div>
    </div>
  );
}

export default BigDaddyMinterLoginPage;
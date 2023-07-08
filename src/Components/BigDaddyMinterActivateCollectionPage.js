import React from "react";
import '../BigDaddyCSS.css';

function BigDaddyMinterActivateAccountPage({ handleActivateBigDaddyCollection, handleLogOut}) {
  return (
    <div className="bigDaddyContainer">
    <button onClick={handleLogOut} class="glow-on-hover logout">Log Out</button>
      <img src={"/bigdaddy-logo-quart.png"} width={"300px"} height={"150px"} alt="logo"/>
      <h1>Activate your BigDaddy Collection</h1>
      <h2>In order to Mint your NFTs you have to create a collection in your blockchain Account.</h2>
      <h2>If it is not allready done, this will also create you a FUSD Wallet in order to receive payments from your NFTs sale.</h2>
      <div>
          <button class="glow-on-hover" onClick={handleActivateBigDaddyCollection}>Activate BigDaddyCollection</button>
        </div>
    </div>
  );
}

export default BigDaddyMinterActivateAccountPage;

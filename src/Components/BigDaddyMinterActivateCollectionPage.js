import React from "react";
import '../BigDaddyCSS.css';

function BigDaddyMinterActivateAccountPage({ handleActivateBigDaddyCollection}) {
  return (
<>
<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
<h1 style={{ margin: '50px'}}>Activate your BigDaddy Collection</h1>

</div>
<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
<h2>In order to Mint your NFTs you have to create a collection in your blockchain Account.</h2>
</div>
<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
  <h2>If it is not allready done, this will also create you a FUSD Wallet in order to receive payments from your NFTs sale.</h2>
</div>
<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }} >
  <button className="bigdaddy-button" onClick={handleActivateBigDaddyCollection} style={{ margin: '50px'}}>Activate your Collection</button>
</div>
</>
  );
}

export default BigDaddyMinterActivateAccountPage;

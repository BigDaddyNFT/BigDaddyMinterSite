import React, { useState, useEffect } from 'react';
import '../BigDaddyCSS.css';

function BigDaddyMinterPage({handleMintNewBigDaddyNFT,nftTemplate, handleLogOut }) {
  const [collectionName, setCollectionName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [siteId, setSiteId] = useState("");
  const [price, setPrice] = useState(0.00);
  const [minted, setMinted] = useState(0);
  const [royalties, setRoyalties] = useState(0);

  useEffect(() => {
    if (nftTemplate != null) {
      setSiteId(nftTemplate.templateKey);
      setCollectionName(nftTemplate.name);
      setPrice(nftTemplate.price);
      setMinted(nftTemplate.minted);
      setQuantity(nftTemplate.limit);
      setRoyalties(nftTemplate.royalties);
    }
  }, [nftTemplate]);

  const handleSubmit = event => {
    event.preventDefault();
    handleMintNewBigDaddyNFT(collectionName, price, quantity, royalties);
  };

  return (
    <div className="bigDaddyContainer">
    <button onClick={handleLogOut} class="glow-on-hover logout">Log Out</button>
    <img src={"/bigdaddy-logo-quart.png"} width={"300px"} height={"150px"} alt="no image"/>
      <h1>Your Private NFT Collection</h1>
      <div className="contentContainer">
        <div className="helpCard">
          <div className="cardContent">?</div>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <label className="bigdaddy-label">
              Site ID:
              <input type="text" value={siteId} disabled className="bigdaddy-input" style={{width: `${(siteId.length + 1) * 8}px`}} />
            </label>
            <label className="bigdaddy-label">
              Collection Name:
              <input type="text" value={collectionName} onChange={e => setCollectionName(e.target.value)} disabled={nftTemplate !== null} maxLength={50} pattern="[\w]+" title="Seules les lettres, les chiffres et les underscores sont autorisés" className="bigdaddy-input" />
            </label>
            <label className="bigdaddy-label">
              NFT Price:
              <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} disabled={nftTemplate !== null} className="bigdaddy-input" />
            </label>
            <label className="bigdaddy-label">
              Quantity to sell:
              <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} min={1} max={4294967294} disabled={nftTemplate !== null} className="bigdaddy-input" />
            </label>
            <label className="bigdaddy-label">
              Royalties on second hand market:
              <input type="number" value={royalties} onChange={e => setRoyalties(e.target.value)} min={0} max={99} disabled={nftTemplate !== null} className="bigdaddy-input" /> %
            </label>
            <label className="bigdaddy-label">
              Quantity allready sold:
              <input type="number" value={minted} disabled className="bigdaddy-input" />
            </label>
            {nftTemplate === null && <button type="submit" class="glow-on-hover" >Create my NFT Collection</button>}
          </form>
        </div>
      </div>
    </div>

  );
}

export default BigDaddyMinterPage;

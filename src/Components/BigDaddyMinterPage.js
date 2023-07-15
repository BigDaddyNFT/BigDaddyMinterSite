import React, { useState, useEffect } from 'react';
import '../BigDaddyCSS.css';
import { CFormInput, CContainer, CFormLabel, CRow, CCol } from '@coreui/react';

function BigDaddyMinterPage({ handleMintNewBigDaddyNFT, nftTemplate }) {
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
      setRoyalties(nftTemplate.royalties*100);
    }
  }, [nftTemplate]);

  const handleCreateBigDaddyCollection = () => {
    let finalPrice = price;
    if(Number.isInteger(Number(price))) {
      finalPrice = parseFloat(price).toFixed(1);
    }
    handleMintNewBigDaddyNFT(collectionName, finalPrice, quantity, royalties);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <h1 style={{ margin: '40px'}}>Your Private NFT Collection</h1>
      </div>
      <div className="contentContainer">
        <div className="helpCard" style={{ margin: '0px 0px 0px 100px' }}>
          <div className="cardContent">?</div>
        </div>
        <div className="formContainer">
          <CContainer >
            {nftTemplate !== null &&
              <CRow className="mb-3" xs={{ gutterX: 5 }}>
                <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Site ID:</CFormLabel>
                <CCol sm={10} className="mx-3">
                  <CFormInput type="text" value={siteId} disabled />
                </CCol>
              </CRow>
            }
            <CRow className="mb-3" xs={{ gutterX: 5 }}>
              <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Collection Name:</CFormLabel>
              <CCol sm={10} className="mx-3">
                <CFormInput type="text" value={collectionName} onChange={e => setCollectionName(e.target.value)} disabled={nftTemplate !== null}/>
              </CCol>
            </CRow>
            <CRow className="mb-3" xs={{ gutterX: 5 }}>
              <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Price :</CFormLabel>
              <CCol sm={10} className="mx-3">
                <CFormInput type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} disabled={nftTemplate !== null}/>
              </CCol>
            </CRow>
            <CRow className="mb-3" xs={{ gutterX: 5 }}>
              <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Quantity to sell:</CFormLabel>
              <CCol sm={10} className="mx-3">
                <CFormInput type="number" value={quantity} onChange={e => setQuantity(e.target.value)} disabled={nftTemplate !== null}/>
              </CCol>
            </CRow>
            <CRow className="mb-3" xs={{ gutterX: 5 }}>
              <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Royalties on second hand market in %:</CFormLabel>
              <CCol sm={10} className="mx-3">
                <CFormInput type="number" value={royalties} onChange={e => setRoyalties(e.target.value)} disabled={nftTemplate !== null}/>
              </CCol>
            </CRow>
            {nftTemplate !== null &&
              <CRow className="mb-3" xs={{ gutterX: 5 }}>
                <CFormLabel className="col-sm-8 col-form-label" style={{ color: 'purple' }}>Quantity allready sold:</CFormLabel>
                <CCol sm={10} className="mx-3">
                  <CFormInput type="text" value={minted} disabled />
                </CCol>
              </CRow>
            }
            {nftTemplate === null &&
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <button
                  class="bigdaddy-button"
                  onClick={handleCreateBigDaddyCollection} >
                  Create my NFT Collection
                </button>
              </div>}
          </CContainer>

        </div>
      </div></>

  );
}

export default BigDaddyMinterPage;

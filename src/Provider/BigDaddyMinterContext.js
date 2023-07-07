// BigDaddyContext.js

import { useState, createContext, useContext, useEffect } from 'react';
import BigDaddyMinterTransactions from '../flow/BigDaddyMinterTransactions';
import BigDaddyMinterScripts from '../flow/BigDaddyMinterScripts';

const BigDaddyMinterContext = createContext();

export function useBigDaddyMinterContext() {
  return useContext(BigDaddyMinterContext);
}

export function BigDaddyProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCollectionEnabled, setIsCollectionEnabled] = useState(false);
  const [nftTemplate, setNFTTemplate] = useState(null);
  const [user, setUser] = useState(null);
  const [isBigDaddyLoading, setIsBigDaddyLoading] = useState(false);
  const [isBigDaddyErrorModalOpen, setIsBigDaddyErrorModalOpen] = useState(false);
  const [bigDaddyErrorMessage, setBigDaddyErrorMessage] = useState("");

  const bigDaddyScripts = new BigDaddyMinterScripts();
  const bigDaddyTransactions = new BigDaddyMinterTransactions();

  useEffect(() => {
    if (user) {
      hasBigDaddyCollection();
      getBigDaddyTemplate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const validateLoggedIn = (myuser) => {

  if (myuser && (!user || myuser.cid !== user.cid)) {
      setUser(myuser);
      setIsLoggedIn(true);
    }
  };

  const disconnect = () => {
    if (user !== null) {
    setUser(null);
    setIsLoggedIn(false);
    }
  };

  const hasBigDaddyCollection = async () => {
    setIsBigDaddyLoading(true);
    try {
      const collectionExists = await bigDaddyScripts.hasBigDaddyCollection(user.addr);
      setIsCollectionEnabled(collectionExists);
    } catch (error) {
      setBigDaddyErrorMessage(error);
      setIsBigDaddyErrorModalOpen(true);
    } finally {
      setIsBigDaddyLoading(false);
    }
  };

  const getBigDaddyTemplate = async () => {
    setIsBigDaddyLoading(true);
    try {
      const template = await bigDaddyScripts.getTemplatebyAuthor(user.addr);
      setNFTTemplate(template);
    } catch (error) {
      setBigDaddyErrorMessage(error);
      setIsBigDaddyErrorModalOpen(true);
    } finally {
      setIsBigDaddyLoading(false);
    }
  };

  const handleActivateBigDaddyCollection = async () => {
    setIsBigDaddyLoading(true);
    try {
      await bigDaddyTransactions.enableBigDaddyCollection();
      setIsCollectionEnabled(hasBigDaddyCollection);
    } catch (error) {
      setBigDaddyErrorMessage(error);
      setIsBigDaddyErrorModalOpen(true);
    } finally {
      setIsBigDaddyLoading(false);
    }
  };

  const handleMintNewBigDaddyNFT = async (collectionName, price, quantity, royalties) => {
    setIsBigDaddyLoading(true);
    try {
      await bigDaddyTransactions.MintNewBigDaddyNFT(collectionName, price, quantity, royalties);
    } catch (error) {
      setBigDaddyErrorMessage(error);
      setIsBigDaddyErrorModalOpen(true);
    } finally {
      getBigDaddyTemplate();
      setIsBigDaddyLoading(false);
    }
  };

  const closeBigDaddyErrorModal = () => {
    setIsBigDaddyErrorModalOpen(false);
    setBigDaddyErrorMessage("");
  };

  return (
    <BigDaddyMinterContext.Provider value={{ bigDaddyErrorMessage, 
                                            isBigDaddyLoading, 
                                            isBigDaddyErrorModalOpen, 
                                            isLoggedIn, 
                                            isCollectionEnabled,
                                            nftTemplate, 
                                            validateLoggedIn, 
                                            disconnect,
                                            handleMintNewBigDaddyNFT, 
                                            handleActivateBigDaddyCollection, 
                                            closeBigDaddyErrorModal }}>
      {children}
    </BigDaddyMinterContext.Provider>
  );
}

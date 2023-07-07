export const MINT_NEW_NFT_TX = `import BigDaddyContract from 0xd75dc7fd8d3cd8f4

transaction(name: String, price: UFix64, quantity: UInt32, royalties : UInt8) {
  prepare(acct: AuthAccount) {
    let minterCollectionRef = acct.borrow<&BigDaddyContract.Collection{BigDaddyContract.MinterCollectionPublic}>(from: BigDaddyContract.CollectionStoragePath) ?? panic("Could not borrow a reference to the minter's collection")

    minterCollectionRef.createBigDaddyNFTTemplate(name: name, price: price, quantity: quantity, minter: acct, royalties : royalties )
  }
}`;
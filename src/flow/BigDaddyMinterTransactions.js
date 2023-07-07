import * as fcl from "@onflow/fcl"

// Importez vos transactions Cadence
import { ENABLE_BIGDADDY_COLLECTION_TX } from './transactions/EnableBigDaddyCollection'
import { MINT_NEW_NFT_TX } from './transactions/MintNewNFT'

class BigDaddyMinterTransactions {

  async sendTransaction(cadenceCode, args ) {
    const response = await fcl.send([
      fcl.transaction(cadenceCode),
      args,
      fcl.limit(9999),
      fcl.proposer(fcl.currentUser().authorization),
      fcl.payer(fcl.currentUser().authorization),
      fcl.authorizations([               // add this
        fcl.currentUser().authorization  // add this
      ]),
    ])

    const transactionId = await fcl.decode(response)

    await fcl.tx(transactionId).onceSealed()

    return transactionId
  }

  // Créez des fonctions distinctes pour chaque transaction
  async enableBigDaddyCollection() {
    let args = fcl.args([])
    return this.sendTransaction(ENABLE_BIGDADDY_COLLECTION_TX, args)
  }

  async MintNewBigDaddyNFT(name, price, quantity, royalties) {
    let args = fcl.args([
      fcl.arg(name, fcl.t.String),
      fcl.arg(price, fcl.t.UFix64),
      fcl.arg(quantity, fcl.t.UInt32),
      fcl.arg(royalties, fcl.t.UInt8)
    ])
    return this.sendTransaction(MINT_NEW_NFT_TX, args)
  }

}

export default BigDaddyMinterTransactions

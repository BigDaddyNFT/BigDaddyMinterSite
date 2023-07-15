import * as fcl from "@onflow/fcl"

// Importez vos scripts Cadence
import { GET_TEMPLATE_BY_AUTHOR_SCRIPT } from './scripts/GetTemplatebyAuthor'
import { HAS_BIGDADDY_COLLECTION_SCRIPT } from "./scripts/HasBigDaddyCollection"
import { GET_FUSD_BALANCE } from "./scripts/GetFUSDBalance"

// import { YOUR_SECOND_SCRIPT } from './path_to_your_second_script'
// import { YOUR_THIRD_SCRIPT } from './path_to_your_third_script'

class BigDaddyMinterScripts {

  async executeScript(cadenceCode, args = []) {
    const response = await fcl.send([
      fcl.script(cadenceCode),
      args,
    ])

    return fcl.decode(response)
  }

  async getFUSDBalance(addr) {
    let args = fcl.args([
      fcl.arg(addr, fcl.t.Address)
    ])
    return this.executeScript(GET_FUSD_BALANCE, args)
  }

  async getTemplatebyAuthor(addr) {
    let args = fcl.args([
      fcl.arg(addr, fcl.t.Address)
    ])
    return this.executeScript(GET_TEMPLATE_BY_AUTHOR_SCRIPT, args)
  }

  async hasBigDaddyCollection(addr) {
    let args = fcl.args([
      fcl.arg(addr, fcl.t.Address)
    ])
    return this.executeScript(HAS_BIGDADDY_COLLECTION_SCRIPT, args)
  }

}

export default BigDaddyMinterScripts

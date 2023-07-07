export const GET_TEMPLATE_BY_AUTHOR_SCRIPT = `
import BigDaddyContract from 0xd75dc7fd8d3cd8f4

pub fun main(address: Address): BigDaddyContract.Template? {

    return BigDaddyContract.getTemplatebyCreatorAdress(creator: address)
  
}
`;
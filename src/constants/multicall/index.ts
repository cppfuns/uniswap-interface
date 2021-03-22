import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TESTNET]: '0x2A16f8A9C88Ddaad5928D85Ce065940b7b25E11c'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

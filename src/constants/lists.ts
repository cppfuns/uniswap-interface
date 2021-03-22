// used to mark unsupported tokens, these are hosted lists of unsupported tokens

const COMPOUND_LIST = ''
const UMA_LIST = ''
const AAVE_LIST = ''
const SYNTHETIX_LIST = ''
const WRAPPED_LIST = ''
const SET_LIST = ''
const OPYN_LIST = ''
const ROLL_LIST = ''
const COINGECKO_LIST = ''
const CMC_ALL_LIST = ''
const CMC_STABLECOIN = ''
const KLEROS_LIST = ''
const GEMINI_LIST = ''
const BA_LIST = ''

export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  COMPOUND_LIST,
  AAVE_LIST,
  SYNTHETIX_LIST,
  UMA_LIST,
  WRAPPED_LIST,
  SET_LIST,
  OPYN_LIST,
  ROLL_LIST,
  COINGECKO_LIST,
  CMC_ALL_LIST,
  CMC_STABLECOIN,
  KLEROS_LIST,
  GEMINI_LIST,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [GEMINI_LIST]

export const ELEMENT_CLOSURE_REGEX = /<\/[\w.]+>/g
export const ELEMENT_OPENING_REGEX = /<[\w.]+>/g
export const BANK_SERVICE_START = '<BANKMSGSRSV1>'
export const BANK_SERVICE_END = '</BANKMSGSRSV1>'
export const CREDIT_CARD_SERVICE_START = '<CREDITCARDMSGSRSV1>'
export const CREDIT_CARD_SERVICE_END = '</CREDITCARDMSGSRSV1>'
export const START_STATEMENT_TRANSACION = '<STMTTRN>'
export const FINISH_STATEMENT_TRANSACTION = '</STMTTRN>'
export const QUOTE_PATTERN = '_#_'
export const QUOTE_PATTERN_REGEX = new RegExp(QUOTE_PATTERN, 'g')

export const OPENING_TAGS_INITIALLY_IGNORED = [
  BANK_SERVICE_START,
  START_STATEMENT_TRANSACION,
  CREDIT_CARD_SERVICE_START,
]

export const CLOSING_TAGS_INITIALLY_IGNORED = [
  BANK_SERVICE_END,
  CREDIT_CARD_SERVICE_END,
  FINISH_STATEMENT_TRANSACTION,
]

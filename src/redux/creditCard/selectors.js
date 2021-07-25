export const currentTxns = (state) => state.creditCard.currentStatementTxns;
export const currentBill = (state) => state.creditCard.amountToPay;
export const lastPaidBill = (state) => state.creditCard.lastPaidBill;
export const unbilledTxns = (state) => state.creditCard.unbilledTxns;

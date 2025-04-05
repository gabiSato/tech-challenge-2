import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { TransactionDTO } from "@/types/Transaction";
import { RootState } from "@/lib/store";

interface TransactionState {
  transactions: TransactionDTO[];
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    createTransaction(state, action) {
      const newTransaction = {
        id: state.transactions.length++,
        amount: action.payload.amount,
        type: action.payload.type,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };

      state.transactions = [...state.transactions, newTransaction];
    },
    updateTransaction(state, action) {
      const transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id == action.payload.id
      );

      const updatedTransaction = {
        ...state.transactions[transactionIndex],
        amount: action.payload.amount,
        type: action.payload.type,
        updatedAt: new Date().toISOString(),
      };

      state.transactions.splice(transactionIndex, 1, updatedTransaction);
    },
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id == action.payload.id
      );
    },
  },
});

const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
const selectTransactionId = (state: RootState, transactionId: number) =>
  transactionId;

export const selectAllTransactions = createSelector(
  selectTransactions,
  (transactions) => {
    return transactions.map((transaction) => {
      return {
        ...transaction,
        createdAt: new Date(transaction.createdAt),
        updatedAt: transaction.updatedAt
          ? new Date(transaction.updatedAt)
          : null,
      };
    });
  }
);

export const selectTransactionById = createSelector(
  [selectAllTransactions, selectTransactionId],
  (transactions, transactionId: number) =>
    transactions.find((transaction) => transaction.id === transactionId)
);

export const { createTransaction, updateTransaction, deleteTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;

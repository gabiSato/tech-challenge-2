export type TransactionType =
  | "deposit"
  | "withdrawal"
  | "transfer"
  | "loan"
  | "investments";

export interface TransactionDTO {
  id: number;
  amount: number;
  type: TransactionType;
  createdAt: string;
  updatedAt: string | null;
}

export type Transaction = {
  id: number;
  amount: number;
  type: TransactionType;
  createdAt: Date;
  updatedAt: Date | null;
};

export type TransactionFormData = {
  amount: number;
  transactionType: TransactionType;
};

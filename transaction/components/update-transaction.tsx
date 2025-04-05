"use client";
import { Transaction, TransactionFormData } from "@/types/Transaction";

import { updateTransaction } from "@/lib/features/transactions/transactions-slice";
import { useAppDispatch } from "@/lib/hooks/redux";

import TransactionForm from "@/components/transaction-form";

export default function UpdateTransaction({
  transaction,
}: {
  transaction: Transaction;
}) {
  const dispath = useAppDispatch();

  const handleSubmit = (data: TransactionFormData) => {
    dispath(updateTransaction({ id: transaction.id, ...data }));
  };

  return (
    <>
      <h1 className="text-xl-bold text-cyan-100 mb-32">
        Editar transação {transaction.id}
      </h1>

      <TransactionForm transaction={transaction} onSubmit={handleSubmit} />
    </>
  );
}

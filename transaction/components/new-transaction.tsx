"use client";
import { createTransaction } from "@/lib/features/transactions/transactions-slice";

import type { TransactionFormData } from "@/types/Transaction";
import { useAppDispatch } from "@/lib/hooks/redux";

import TransactionForm from "@/components/transaction-form";
import Card from "@/components/card";

export default function NewTransaction() {
  const dispatch = useAppDispatch();

  function submit(transactionData: TransactionFormData) {
    dispatch(createTransaction(transactionData));
  }

  return (
    <Card>
      <h2 className="text-xl-bold text-cyan-100 mb-32">Nova transação</h2>

      <TransactionForm onSubmit={submit} shouldReset />
    </Card>
  );
}

"use client";
import { useEffect, useState } from "react";

import { selectAllTransactions } from "@/lib/features/transactions/transactions-slice";
import { Transaction } from "@/types/Transaction";
import { formatDate } from "@/lib/formatters";

import TransactionListItem from "@/components/transaction-list-item";
import { useAppSelector } from "@/lib/hooks/redux";

export default function TransactionList() {
  const transactions = useAppSelector(selectAllTransactions);

  const [transactionsGroupedByMonth, setTransactionsGroupedByMonth] = useState<
    Partial<Record<string, Transaction[]>>
  >({});

  useEffect(() => {
    if (transactions.length) {
      const groupedTransactions = Object.groupBy(
        transactions,
        ({ createdAt }) => formatDate("MMMM", createdAt)
      );

      setTransactionsGroupedByMonth(groupedTransactions);
    }
  }, [transactions]);

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(transactionsGroupedByMonth).map(
        ([month, transactions]) => (
          <div key={month}>
            <h3 className="text-xs-semibold text-cyan-300 capitalize">
              {month}
            </h3>

            <ul>
              {transactions?.map((transaction) => (
                <TransactionListItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

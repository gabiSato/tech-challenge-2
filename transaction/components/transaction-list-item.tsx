"use client";
import Link from "next/link";

import { formatDate, formatToCurrency } from "@/lib/formatters";
import type { Transaction } from "@/types/Transaction";

interface TransactionListItemProps {
  transaction: Transaction;
}

export default function TransactionListItem({
  transaction,
}: TransactionListItemProps) {
  const formattedDate = formatDate("DD/MM", transaction.createdAt);
  const amount = transaction.amount;
  const isNegative = ["withdrawal", "transfer"].includes(transaction.type);

  return (
    <li className="group py-8 flex gap-18">
      <Link
        className="flex flex-col w-full pb-16 group-not-last-of-type:border-b group-not-last-of-type:border-b-cyan-300/80 hover:underline decoration-cyan-100"
        href={`/transaction/${transaction.id}`}
      >
        <span className="text-sm text-cyan-100">{transaction?.type}</span>

        <span className="text-sm-semibold text-cyan-100">
          {isNegative && "-"}
          {formatToCurrency(amount)}
        </span>
      </Link>

      <span className="text-xs text-neutral-400">{formattedDate}</span>
    </li>
  );
}

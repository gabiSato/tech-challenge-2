"use client";
import { useRouter } from "next/navigation";

import { deleteTransaction } from "@/lib/features/transactions/transactions-slice";
import { formatDate, formatToCurrency } from "@/lib/formatters";
import { Transaction } from "@/types/Transaction";
import { useAppDispatch } from "@/lib/hooks/redux";

import PencilIcon from "@/public/icons/pencil.svg";
import TrashIcon from "@/public/icons/trash.svg";

export default function TransactionDetail({
  transaction,
}: {
  transaction: Transaction;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formattedCreatedAtDate = formatDate(
    "DD/MM/YYYY",
    transaction?.createdAt
  );
  const amount = transaction?.amount;
  const isNegative = ["withdrawal", "transfer"].includes(transaction.type);

  const handleDelete = () => {
    dispatch(deleteTransaction(transaction.id));
  };

  const redirectToEditPage = () => {
    router.push(`/transaction/${transaction.id}/edit`);
  };

  return (
    <div className="max-w-[360px]">
      <div className="flex gap-32 mb-32 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-lg-semibold">
            Detalhe da transação {transaction?.id}
          </h1>

          <span className="text-xs text-neutral-400">
            Criada em {formattedCreatedAtDate}
          </span>
        </div>

        <div className="flex gap-8">
          <button
            className="bg-cyan-300 w-32 h-32 flex items-center justify-center rounded-full"
            onClick={redirectToEditPage}
          >
            <PencilIcon className="text-white w-16 h-16" />
          </button>

          <button
            className="bg-cyan-300 w-32 h-32 flex items-center justify-center rounded-full"
            onClick={handleDelete}
          >
            <TrashIcon className="text-white w-16 h-16" />
          </button>
        </div>
      </div>

      <div className=" border border-neutral-400 rounded px-20 py-16 mb-24">
        <div className="flex justify-between gap-24">
          <span className="text-xs">Tipo da transação</span>

          <span className="text-xs-semibold text-cyan-200">
            {transaction?.type}
          </span>
        </div>

        <div className="w-full border-t border-t-neutral-300 my-8"></div>

        <div className="flex justify-between gap-24">
          <span className="text-sm">Valor</span>

          <span className="text-sm-semibold text-cyan-200">
            {isNegative && "-"}
            {formatToCurrency(amount)}
          </span>
        </div>
      </div>
    </div>
  );
}

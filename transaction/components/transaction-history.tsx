"use client";
import TransactionList from "@/components/transaction-list";

export default function TransactionHistory() {
  return (
    <div className="bg-neutral-100 rounded px-36 lg:px-24 pt-32 lg:pt-24 pb-[42px]">
      <div className="sm:w-[232px] sm:mx-auto">
        <h2 className="text-xl-bold text-cyan-100 mb-32 sm:text-black">
          Extrato
        </h2>

        <TransactionList />
      </div>
    </div>
  );
}

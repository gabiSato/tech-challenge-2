"use client";
import { CurrencyInput } from "react-currency-mask";
import { FormEvent } from "react";

import Select from "shell/ui/select";
import Input from "shell/ui/input";
import Button from "shell/ui/button";

import type { Transaction, TransactionFormData } from "@/types/Transaction";
import { useTransactionForm } from "@/lib/hooks/useTransactionForm";

interface TransactionFormProps {
  transaction?: Transaction;
  onSubmit: (data: TransactionFormData) => void;
  shouldReset?: boolean;
}

export default function TransactionForm({
  transaction,
  onSubmit,
  shouldReset,
}: TransactionFormProps) {
  const {
    transactionType,
    transactionOptions,
    amount,
    errors,
    handleAmountChange,
    handleTransactionTypeChange,
    reset,
    validateFields,
  } = useTransactionForm(transaction);
  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const valid = await validateFields();

    if (valid) {
      onSubmit({ amount, transactionType: transactionType! });

      shouldReset && reset();
    }
  };

  return (
    <form
      className="flex flex-col gap-32 items-center sm:items-start"
      onSubmit={submit}
    >
      <Select
        className="sm:w-[355px]"
        placeholder="Selecione o tipo de transação"
        value={transactionType}
        options={transactionOptions}
        invalid={!!errors.transactionType?.length}
        error={errors.transactionType?.[0]}
        onChange={handleTransactionTypeChange}
      />

      <div className="flex flex-col gap-16 text-center sm:text-left">
        <label className="text-sm-semibold text-cyan-100">Valor</label>

        <CurrencyInput
          value={amount}
          onChangeValue={handleAmountChange}
          InputElement={
            <Input
              className="text-center"
              placeholder="00,00"
              invalid={!!errors.amount?.length}
              error={errors.amount?.[0]}
            />
          }
          hideSymbol
        />
      </div>

      <Button className="sm:w-[250px]" type="submit" onClick={submit}>
        {transaction ? "Atualizar transação" : "Concluir transação"}
      </Button>
    </form>
  );
}

import type { Transaction, TransactionType } from "@/types/Transaction";
import { ChangeEvent, useEffect, useState } from "react";
import { object, string, number } from "yup";

import { useValidation } from "@/lib/hooks/useValidation";

export function useTransactionForm(transaction?: Transaction) {
  const transactionSchema = object({
    transactionType: string()
      .oneOf(
        ["deposit", "withdrawal", "transfer", "loan", "investments"],
        "Valor inválido."
      )
      .required("Campo obrigatório."),
    amount: number()
      .moreThan(0, "Deve ser maior que 0")
      .required("Campo obrigatório"),
  });

  const { errors, validate, resetFieldErros, resetErrors } =
    useValidation(transactionSchema);

  const [transactionType, setTransactionType] = useState<
    TransactionType | undefined
  >(undefined);
  const [amount, setAmount] = useState<number>(0);

  const transactionOptions = [
    { label: "Depósito", value: "deposit" },
    { label: "Saque", value: "withdrawal" },
    { label: "Transferência", value: "transfer" },
    {
      label: "Empréstimo e Financiamento",
      value: "loan",
    },
    { label: "Investimentos", value: "investments" },
  ];

  const handleTransactionTypeChange = (value: TransactionType) => {
    setTransactionType(value);
    resetFieldErros("transactionType");
  };

  const handleAmountChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: number | string
  ) => {
    setAmount(value as number);
    resetFieldErros("amount");
  };

  const reset = () => {
    setTransactionType(undefined);
    setAmount(0);
    resetErrors();
  };

  const validateFields = async () => {
    return await validate({
      transactionType,
      amount,
    });
  };

  useEffect(() => {
    if (transaction) {
      setTransactionType(transaction.type);
      setAmount(transaction.amount);
    }
  }, [transaction]);

  return {
    transactionType,
    amount,
    transactionOptions,
    errors,
    handleTransactionTypeChange,
    handleAmountChange,
    reset,
    validateFields,
  };
}

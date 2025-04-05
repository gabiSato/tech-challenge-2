"use client";
import { Input, Button } from "shell/components";
import React, { useState } from "react";
import { object, string } from "yup";
import { toast } from "react-toastify";

import { useValidation } from "@/lib/hooks/useValidation";
import type { UserLogin } from "@/types/User";

interface UserLoginFormProps {
  onSubmit: (userLogin: UserLogin) => void;
}

export default function UserLoginForm({ onSubmit }: UserLoginFormProps) {
  const userSchema = object({
    email: string().email("Email inválido.").required("Campo obrigatório."),
    password: string().required("Campo obrigatório"),
  });

  const { errors, validate, resetFieldErros, resetErrors } =
    useValidation(userSchema);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    resetFieldErros("email");
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    resetFieldErros("password");
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    resetErrors();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = await validate({
      email,
      password,
    });

    if (isValid) {
      onSubmit({ email, password });
      resetForm();
    } else {
      toast.error("Dados inválidos");
    }
  }

  return (
    <form className="flex flex-col gap-32 items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Email</label>

          <Input
            placeholder="Digite seu email"
            value={email}
            full
            invalid={!!errors.email?.length}
            error={errors.email?.[0]}
            onChange={handleEmailChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Senha</label>

          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            invalid={!!errors.password?.length}
            error={errors.password?.[0]}
            full
            onChange={handlePasswordChange}
          />

          <a
            href="/redefinir-senha"
            className="text-sm text-green-200 underline underline-offset-2"
          >
            Esqueci a senha!
          </a>
        </div>
      </div>

      <Button type="submit" variant="green-primary">
        Acessar
      </Button>
    </form>
  );
}

"use client";
import { Checkbox, Input, Button } from "shell/components";
import { object, string, boolean } from "yup";
import { toast } from "react-toastify";
import { useState } from "react";

import { useValidation } from "@/lib/hooks/useValidation";
import type { User } from "@/types/User";

interface UserRegisterFormProps {
  onSubmit: (user: User) => void;
}

export default function UserRegisterForm({ onSubmit }: UserRegisterFormProps) {
  const userSchema = object({
    name: string().required("Campo obrigatório."),
    email: string().email("Email inválido.").required("Campo obrigatório."),
    password: string()
      .min(6, "Deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    acceptTerms: boolean()
      .required("Campo obrigatório.")
      .equals([true], "Deve aceitar os termos para continuar."),
  });

  const { errors, validate, resetFieldErros, resetErrors } =
    useValidation(userSchema);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    resetFieldErros("name");
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    resetFieldErros("email");
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    resetFieldErros("password");
  }

  function handleAcceptTermsChange(value: boolean) {
    setAcceptTerms(value);
    resetFieldErros("acceptTerms");
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setAcceptTerms(false);
    resetErrors();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = await validate({
      name,
      email,
      password,
      acceptTerms,
    });

    if (isValid) {
      onSubmit({ name, email, password });
      resetForm();
    } else {
      toast.error("Dados inválidos");
    }
  }

  return (
    <form className="flex flex-col gap-32 items-center" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-24 w-full">
        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Nome</label>

          <Input
            placeholder="Digite seu nome completo"
            value={name}
            invalid={!!errors.name?.length}
            error={errors.name?.[0]}
            full
            onChange={handleNameChange}
          />
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sm-bold">Email</label>

          <Input
            placeholder="Digite seu email"
            value={email}
            invalid={!!errors.email?.length}
            error={errors.email?.[0]}
            full
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
        </div>

        <Checkbox
          label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
          checked={acceptTerms}
          invalid={!!errors.acceptTerms?.length}
          error={errors.acceptTerms?.[0]}
          onChange={handleAcceptTermsChange}
        />
      </div>

      <Button type="submit" variant="orange-primary">
        Criar conta
      </Button>
    </form>
  );
}

"use client";
import { Button, type ButtonVariant } from "shell/components";
import { toast } from "react-toastify";
import { useState } from "react";

import { createUser } from "@/lib/features/authentication/authentication-slice";
import { useAppDispatch } from "@/lib/hooks/redux";
import type { User } from "@/types/User";

import UserRegisterForm from "@/components/user-register-form";
import Modal from "@/components/modal";

import UserAccountImage from "@/public/images/user-account.svg";

interface UserRegisterModalProps {
  triggerButtonVariant?: ButtonVariant;
}

export default function UserRegisterModal({
  triggerButtonVariant = "green-primary",
}: UserRegisterModalProps) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function onSubmit(user: User) {
    dispatch(createUser(user));

    toast.success("Usuário criado com sucesso!");
    setOpen(false);
  }

  return (
    <>
      <Button
        className="lg:w-[180px]"
        variant={triggerButtonVariant}
        onClick={openModal}
      >
        Abrir conta
      </Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Image>
          <UserAccountImage className="w-full" />
        </Modal.Image>

        <Modal.Title>
          Preencha os campos abaixo para criar sua conta corrente!
        </Modal.Title>

        <UserRegisterForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
}

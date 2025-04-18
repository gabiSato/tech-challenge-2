"use client";
import Button, { type ButtonVariant } from "shell/ui/button";
import React, { useState } from "react";

import { signIn } from "@/lib/features/authentication/authentication-slice";
import { useAppDispatch } from "@/lib/hooks/redux";
import type { UserLogin } from "@/types/User";

import UserLoginForm from "@/components/user-login-form";
import Modal from "@/components/modal";

import UserAuthImage from "@/public/images/user-auth.svg";

interface UserAuthenticationModalProps {
  triggerButtonVariant?: ButtonVariant;
}

export default function UserAuthenticationModal({
  triggerButtonVariant = "green-secondary",
}: UserAuthenticationModalProps) {
  const dispath = useAppDispatch();

  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function onSubmit(userLogin: UserLogin) {
    dispath(signIn(userLogin));
  }

  return (
    <>
      <Button
        className="lg:w-[180px]"
        variant={triggerButtonVariant}
        onClick={openModal}
      >
        Já tenho conta
      </Button>

      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Image>
          <UserAuthImage className="w-full" />
        </Modal.Image>

        <Modal.Title className="text-center">Login</Modal.Title>

        <UserLoginForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
}

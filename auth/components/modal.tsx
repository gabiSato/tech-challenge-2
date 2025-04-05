"use client";
import BaseModal from "shell/ui/modal";
import React from "react";
import clsx from "clsx";

interface Modal {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function Modal({ open, onOpenChange, children }: Modal) {
  return (
    <BaseModal open={open} onOpenChange={onOpenChange}>
      <div className="min-h-dvh w-screen pt-56 px-16 pb-16 sm:max-w-[597px] sm:pt-32 lg:max-w-[792px]">
        <div className="flex flex-col gap-32 mx-auto sm:w-[445px] lg:w-[590px]">
          {children}
        </div>
      </div>
    </BaseModal>
  );
}

function Image({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto sm:max-w-[354px]">{children}</div>;
}

function Title({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={clsx("text-lg-bold lg:text-center", className)}>
      {children}
    </h1>
  );
}

Modal.Image = Image;
Modal.Title = Title;

export default Modal;

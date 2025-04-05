"use client";
import React, { useEffect } from "react";
import clsx from "clsx";

import CloseIcon from "@/public/icons/close.svg";

interface ModalProps {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export default function Modal({ open, onOpenChange, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeModal() {
    onOpenChange(false);
  }

  return (
    <div
      className={clsx("fixed top-0 left-0 z-[1300] w-screen h-dvh", {
        invisible: !open,
      })}
    >
      <div className="fixed inset-0 bg-black/60" onClick={closeModal}></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[400px] min-h-48 max-h-dvh overflow-y-auto">
        <button
          className="absolute top-16 right-16 cursor-pointer"
          onClick={closeModal}
        >
          <CloseIcon className="h-16" />
        </button>

        {children}
      </div>
    </div>
  );
}

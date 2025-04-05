"use client";
import { useRouter } from "next/navigation";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

import NotFoundImage from "@/public/images/not-found.svg";

export default function NotFound() {
  const router = useRouter();

  function redirectToHome() {
    router.replace("/");
  }

  return (
    <div className="h-dvh pt-40 bg-linear-green">
      <Container className="flex flex-col items-center">
        <h1 className="text-xl-bold text-center mb-24">
          Ops! Não encontramos a página...
        </h1>

        <h2 className="text-sm text-center mb-16 sm:mb-24">
          E olha que exploramos o universo procurando por ela! Que tal voltar e
          tentar novamente?
        </h2>

        <Button
          className="mb-32"
          variant="orange-primary"
          onClick={redirectToHome}
        >
          Voltar ao início
        </Button>

        <NotFoundImage className="w-full sm:max-w-[474px]" />
      </Container>
    </div>
  );
}

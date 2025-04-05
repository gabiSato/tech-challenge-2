"use client";
import CustomLink from "@/components/layout/custom-link";

export default function Sidebar() {
  return (
    <aside className="bg-neutral-100 hidden lg:block rounded min-w-[180px] px-24 py-32">
      <ul>
        <li className="pb-16 mb-16 text-center not-last-of-type:border-b border-b-cyan-300">
          <CustomLink
            href="/"
            className="hover:opacity-80"
            textSize="sm"
            textColor="cyan-300"
            textWeight="regular"
            activeTextWeight="bold"
          >
            Início
          </CustomLink>
        </li>

        <li className="pb-16 mb-16 text-center not-last-of-type:border-b border-b-cyan-300">
          <CustomLink
            href="/transferencias"
            className="hover:opacity-80"
            textSize="sm"
            textColor="cyan-300"
            textWeight="regular"
            activeTextWeight="bold"
          >
            Transferências
          </CustomLink>
        </li>

        <li className="pb-16 mb-16 text-center not-last-of-type:border-b border-b-cyan-300">
          <CustomLink
            href="/investimentos"
            className="hover:opacity-80"
            textSize="sm"
            textColor="cyan-300"
            textWeight="regular"
            activeTextWeight="bold"
          >
            Investimentos
          </CustomLink>
        </li>

        <li className="pb-16 mb-16 text-center not-last-of-type:border-b border-b-cyan-300">
          <CustomLink
            href="/outros-servicos"
            className="hover:opacity-80"
            textSize="sm"
            textColor="cyan-300"
            textWeight="regular"
            activeTextWeight="bold"
          >
            Outros serviços
          </CustomLink>
        </li>
      </ul>
    </aside>
  );
}

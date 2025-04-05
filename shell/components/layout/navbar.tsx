"use client";
import CustomLink from "@/components/layout/custom-link";

export default function Navbar() {
  return (
    <div className="hidden sm:block lg:hidden">
      <ul className="flex gap-16 pt-8">
        <li>
          <CustomLink
            href="/"
            className="block min-w-[138px] text-center pb-16"
            textSize="sm"
            textColor="black"
            textWeight="regular"
            activeClassName="border-b border-b-green-200"
            activeTextColor="green-200"
            activeTextWeight="bold"
          >
            Início
          </CustomLink>
        </li>

        <li>
          <CustomLink
            href="/transferencias"
            className="block min-w-[138px] text-center pb-16"
            textSize="sm"
            textColor="black"
            textWeight="regular"
            activeClassName="border-b border-b-green-200"
            activeTextColor="green-200"
            activeTextWeight="bold"
          >
            Transferências
          </CustomLink>
        </li>

        <li>
          <CustomLink
            href="/invenstimentos"
            className="block min-w-[138px] text-center pb-16"
            textSize="sm"
            textColor="black"
            textWeight="regular"
            activeClassName="border-b border-b-green-200"
            activeTextColor="green-200"
            activeTextWeight="bold"
          >
            Investimentos
          </CustomLink>
        </li>

        <li>
          <CustomLink
            href="/outros-servicos"
            className="block min-w-[138px] text-center pb-16"
            textSize="sm"
            textColor="black"
            textWeight="regular"
            activeClassName="border-b border-b-green-200"
            activeTextColor="green-200"
            activeTextWeight="bold"
          >
            Outros serviços
          </CustomLink>
        </li>
      </ul>
    </div>
  );
}

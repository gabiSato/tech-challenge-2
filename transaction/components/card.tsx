"use client";
import Image from "next/image";

import pixels3Image from "@/public/images/pixels-3.png";
import pixels4Image from "@/public/images/pixels-4.png";
import womanWithCardImage from "@/public/images/woman-with-card.png";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="relative bg-neutral-300 px-16 py-32 sm:px-32 rounded sm:h-[478px]">
      <Image
        className="absolute top-0 left-0 sm:right-0 sm:left-auto w-[146px] h-[144px] sm:w-[180px] sm:h-[177.47px]"
        src={pixels3Image}
        alt="pixels"
        width={180}
        height={177.47}
      />

      <Image
        className="absolute bottom-0 right-0 sm:right-auto sm:left-0 w-[146px] h-[144px] sm:w-[180px] sm:h-[177.47px]"
        src={pixels4Image}
        alt="pixels"
        width={180}
        height={177.47}
      />

      <div className="relative z-1">{children}</div>

      <Image
        className="relative sm:absolute sm:bottom-24 sm:right-24 w-full mt-38 sm:w-[327.82px] lg:hidden z-1"
        src={womanWithCardImage}
        alt="Mulher carregando cartão de crédito"
        width={280}
        height={231}
      />
    </div>
  );
}

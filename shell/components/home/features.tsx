import FeatureCard from "./feature-card";

import PresentImage from "@/public/images/present.svg";
import WithdrawalImage from "@/public/images/withdrawal.svg";
import StarImage from "@/public/images/star.svg";
import MultiplatformImage from "@/public/images/multiplatform.svg";

export default function Features() {
  return (
    <section>
      <h2 className="text-lg-bold sm:text-xl-bold text-black text-center mb-40">
        Vantagens do nosso banco:
      </h2>

      <div className="flex gap-x-24 gap-y-40 flex-wrap justify-center">
        <FeatureCard
          image={PresentImage}
          title="Conta e cartão gratuitos"
          description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
            sem tarifa de manutenção."
        />

        <FeatureCard
          image={WithdrawalImage}
          title="Saques sem custo"
          description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        />

        <FeatureCard
          image={StarImage}
          title="Programa de pontos"
          description="Você pode acumular pontos com suas compras no crédito sem pagar
            mensalidade!"
        />

        <FeatureCard
          image={MultiplatformImage}
          title="Seguro Dispositivos"
          description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        />
      </div>
    </section>
  );
}

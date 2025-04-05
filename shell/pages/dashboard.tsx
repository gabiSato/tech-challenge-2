import Layout from "@/components/layout/layout";

export default function Dashboard() {
  const routeList = [
    { path: "/dashboard", label: "Ínício" },
    { path: "/transactions", label: "Transferências" },
    { path: "/investments", label: "Investimentos" },
    { path: "/services", label: "Outros serviços" },
  ];

  return (
    <Layout routes={routeList}>
      <div>dashboard</div>
    </Layout>
  );
}

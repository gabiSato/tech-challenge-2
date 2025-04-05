import { Container } from "@/components/ui";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <Container className="flex gap-24 py-24">
        <Sidebar />

        <main className="w-full">
          <div className="flex flex-col lg:flex-row gap-24 sm:gap-32 lg:gap-24">
            <Navbar />

            {children}
          </div>
        </main>
      </Container>
    </>
  );
}

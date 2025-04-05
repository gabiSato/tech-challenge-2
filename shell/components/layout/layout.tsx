"use client";
import Container from "@/components/ui/container";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";

interface LayoutProps {
  routes?: Record<string, string>[];
  children: React.ReactNode;
}

export default function Layout({ routes, children }: LayoutProps) {
  return (
    <>
      <Header routes={routes} />

      <Container className="flex gap-24 py-24">
        <Sidebar routes={routes} />

        <main className="w-full">
          <div className="flex flex-col lg:flex-row gap-24 sm:gap-32 lg:gap-24">
            <Navbar routes={routes} />

            {children}
          </div>
        </main>
      </Container>
    </>
  );
}

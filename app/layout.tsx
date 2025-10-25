import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";

import FooterSelector from "@/components/layouts/FooterSelector";

import ClientLayout from "./context/ClientLayout";
import { QuiktisProvider } from "./context/QuiktisContext";

import NewHeader from "@/components/NewHeader";
import AuthUserSync from "@/components/AuthUserSync";

export const metadata: Metadata = {
  title: "Quiktis",
  description: "Redefining access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <ClientLayout>
          <QuiktisProvider>
            <PageWrapper>
              <NewHeader containerClass="max-w-[40em]" />
              {children}
              <FooterSelector />
            </PageWrapper>
          </QuiktisProvider>
        </ClientLayout>
      </body>
    </html>
  );
}

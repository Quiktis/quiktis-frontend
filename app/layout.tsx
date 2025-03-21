import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
// import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/layouts/Footer";
import { UserProvider } from "./context/UserContext";

const spacegro = Space_Grotesk({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Quiktis",
  description: "Redifining access"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacegro.className} antialiased flex flex-col min-h-screen`}
      >
        <UserProvider>
          <PageWrapper>
            <Header/>
              {children}
            <Footer />
          </PageWrapper>
        </UserProvider>
      </body>
    </html>
  );
}

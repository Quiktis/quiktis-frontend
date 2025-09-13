import type { Metadata } from "next";
import "./globals.css";
import Header3 from "@/components/Header3";

import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import FooterSelector from "@/components/layouts/FooterSelector";

import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <UserProvider>
          <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
            <PageWrapper>
              {/*<NewHeader containerClass="max-w-[40em]" />*/}
              <Header3 />
              {children}
              <FooterSelector />
            </PageWrapper>
          </GoogleOAuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}

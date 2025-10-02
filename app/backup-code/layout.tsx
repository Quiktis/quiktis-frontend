import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header3";
import FooterOverride from "@/components/layouts/FooterOverride";
import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ClientLayout from "./context/ClientLayout";
import { Suspense } from "react";

import { EventsTabProvider } from "@/lib/EventsTabContext";

export const metadata: Metadata = {
  title: "Quiktis",
  description: "Redefining access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedInForTest: boolean = true;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Suspense fallback={<div></div>}>
          <ClientLayout>
            <UserProvider>
              <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
                <EventsTabProvider>
                  <div className="relative">
                    <Header />
                    {children}
                    <FooterOverride />
                  </div>
                </EventsTabProvider>
              </GoogleOAuthProvider>
            </UserProvider>
          </ClientLayout>
        </Suspense>
      </body>
    </html>
  );
}

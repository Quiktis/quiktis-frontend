// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header3 from "@/components/Header3";
import Footer3 from "@/components/Footer3";

import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import FooterOverride from "@/components/layouts/FooterOverride";

import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

import NewHeader from "@/components/NewHeader";
import AuthUserSync from "@/components/AuthUserSync";

// Events tab context provider (so Header3 + EventsPageClient can share activeTab state)
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
        <UserProvider>
          <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
            <EventsTabProvider>
              {/*<PageWrapper>*/}
              <div className="relative">
                <Header3 isLoggedInProp={isLoggedInForTest} />

                {children}

                {/*<FooterSelector />*/}
                <FooterOverride />
              </div>
              {/*</PageWrapper>*/}

              {/* <AuthUserSync /> */}
            </EventsTabProvider>
          </GoogleOAuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}

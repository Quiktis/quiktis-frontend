// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layouts/Header"; // your existing header
import PageWrapper from "@/components/ui/PageWrapper";

// Instead of importing a single Footer, import the selector:
import FooterSelector from "@/components/layouts/FooterSelector";

import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

// (You already have NewHeader and AuthUserSync in your setup; keeping those as-is.)
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
        <UserProvider>
          <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
            <PageWrapper>
              <NewHeader containerClass="max-w-[40em]" />

              {/* Main page content goes here */}
              {children}

              {/* This will pick the correct footer based on the current route */}
              <FooterSelector />
            </PageWrapper>
          </GoogleOAuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}

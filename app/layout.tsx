import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import Footer from "@/components/NewFooter";
import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NewHeader from "@/components/NewHeader";
import AuthUserSync from "@/components/AuthUserSync"; // <-- New client component

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
              {children}
              <Footer />
            </PageWrapper>
          </GoogleOAuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}

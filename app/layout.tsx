import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
// import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/layouts/Footer";
import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NewHeader from "@/components/NewHeader";

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
          <GoogleOAuthProvider clientId="830975869130-so9vr3687i78dr8fnqq8f61orggklv05.apps.googleusercontent.com">
          <PageWrapper>
            {/*<NewHeader />*/}
            <Header />
              {children}
            <Footer />
          </PageWrapper>
          </GoogleOAuthProvider>
        </UserProvider>
      </body>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </html>
  );
}

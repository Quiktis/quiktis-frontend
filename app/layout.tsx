import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import PageWrapper from "@/components/ui/PageWrapper";
// import NewsLetter from "@/components/NewsLetter";
//import Footer from "@/components/layouts/Footer";
import Footer from "@/components/NewFooter";
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
        className={`${spacegro.className}  antialiased flex flex-col min-h-screen`}
      >
        <UserProvider>
          <GoogleOAuthProvider clientId="305106076200-n1qka2asma7rlvpmq8nhk6lljgnd9qsq.apps.googleusercontent.com">
          <PageWrapper>
            {/*<NewHeader />*/}
            <NewHeader containerClass="max-w-[40em]"/>
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

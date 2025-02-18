import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";



const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin", "latin-ext", "vietnamese"],
  style: "normal",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${BricolageGrotesque.variable} antialiased `}>
        <div className="h-screen max-h-screen min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

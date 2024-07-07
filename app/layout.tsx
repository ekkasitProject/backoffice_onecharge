import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar/page";
import Sidebar from "./components/navigation/sidebar/page";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "OneCharge",
  description: "OneCharge Backoffice",
};

const font = Kanit({
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body className="flex"><Sidebar/>
      <div className="flex flex-col w-[1280px] h-screen ">
        <div className="flex-grow overflow-auto  bg-gray-100">
        <Navbar/>
        <div className="mt-[80px]">
        {children}
        </div>
        <Footer/>
          </div>
        </div>
          </body>
    </html>
  );
}

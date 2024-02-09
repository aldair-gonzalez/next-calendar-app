import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next calendar example",
  description: "App de calendario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen p-10 flex flex-col gap-10 items-center justify-center`}>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title : "Valaithazham",
  description: "Valaithazham is a platform for ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
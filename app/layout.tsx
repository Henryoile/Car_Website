import "./globals.css";
import { Navbar } from "@/components";
import { Footer } from "@/components";

export const metadata = {
  title: "Nairobi Cars",
  description: "Discover the best cars in nairobi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

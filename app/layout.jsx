import { Lato as FontSans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SellerPro",
  description: "Seller Pro Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen scroll-smooth font-sans antialiased",
          fontSans.className
        )}
      >
        {children}
        <ToastContainer
          autoClose={2000}
          closeOnClick={true}
          draggable={true}
          hideProgressBar={false}
          pauseOnHover={true}
          position="top-right"
          progress={undefined}
          theme="colored"
        />
      </body>
    </html>
  );
}

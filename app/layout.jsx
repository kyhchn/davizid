import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "./components/ui/navbar";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Daviz.id",
  description: "Visualize your Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen scroll-smooth bg-background font-sans antialiased",
          poppins.className
        )}
      >
        <Navbar />
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

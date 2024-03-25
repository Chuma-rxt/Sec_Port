import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

// const poppins = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Recoleta-Black.ttf",
//       weight: "400,"
//     },
//     {
//       path: "../../public/fonts/Recoleta-Medium.ttf",
//       weight: "300,"
//     },
//     {
//       path: "../../public/fonts/Recoleta-Light.ttf",
//       weight: "200,"
//     },
//   ],
//   variable: "--font-Recoleta-Black"
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

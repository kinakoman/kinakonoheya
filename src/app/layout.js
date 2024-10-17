import '@/globals.css'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "きなこの部屋",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='mainArea'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

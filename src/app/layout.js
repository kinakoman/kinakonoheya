import '@/globals.css'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollTop from './components/main/ScrollTop';


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata = {
  icons: [{ rel: 'icon', url: `${basePath}/icon.png` }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='mainArea'>
          {children}
        </div>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}

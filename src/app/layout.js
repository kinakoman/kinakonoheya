import '@/globals.css'

import Header from "@/components/Header"
import Footer from "@/components/Footer"


export const metadata = {
  icons: [{ rel: 'icon', url: '/icon.png' }]
};

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

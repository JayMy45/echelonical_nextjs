import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children, showNavBar = true }) {
  return (
    <html>
      <body className={inter.className}>
        <div className='content'>
          <div className=''>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
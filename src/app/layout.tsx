import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/antd.registry';
import Header from './components/Header';
import { Layout } from 'antd';
import { Footer } from './components';
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kho Sim',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: '0' }}>
        <script src='https://cdn.jsdelivr.net/gh/vietblogdao/js/districts.min.js' />
        <StyledComponentsRegistry>
          <Layout className="layout">
            <Header />
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>
              <div style={{ marginLeft: '16vh', backgroundColor: '#fff' }}></div>
              {children}
              <div style={{ marginRight: '16vh', backgroundColor: '#fff' }}></div>
            </div>
            <hr />
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>
              <div style={{ marginLeft: '16vh', backgroundColor: '#fff' }}></div>
              <Footer />
              <div style={{ marginRight: '16vh', backgroundColor: '#fff' }}></div>
            </div>

          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

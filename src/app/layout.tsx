import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/antd.registry';
import Header from './components/Header';
import { Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';

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
        <StyledComponentsRegistry>
          <Layout className="layout">
            <Header />
            <div style={{ display: 'flex', backgroundColor: '#fff' }}>
              <div style={{ marginLeft: '16vh', backgroundColor: '#fff' }}></div>
              {children}
              <div style={{ marginRight: '16vh', backgroundColor: '#fff' }}></div>
            </div>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

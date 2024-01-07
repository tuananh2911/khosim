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
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Layout className="layout">
            <Header />
            <Content style={{ padding: '0 50px' }}>
              {children}
            </Content>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

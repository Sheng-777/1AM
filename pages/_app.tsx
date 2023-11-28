import Layout from '@/components/Layout'
import SideNavBar from '@/components/sideNavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex">
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </main>
  
  )
}

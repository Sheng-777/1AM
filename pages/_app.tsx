import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
    <main className="flex">
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </main>
    </SessionProvider>
    </>
  
  )
}

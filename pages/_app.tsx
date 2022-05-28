import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar'
import { ApolloProvider } from '@apollo/client'
import apolloClient from "../apollo-client";
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <Head>
          <title>Reddit</title>
          <link rel="shortcut icon" href="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" type="image/x-icon" />
        </Head>
        <Toaster />
        <div className="h-screen overflow-y-scroll bg-slate-200">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp

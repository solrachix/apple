import { AppProps } from 'next/app'
import { useEffect } from 'react'

import SmoothProvider from '@/lib/react-smooth-scrolling'

import Layout from '@/components/Layout'
import Context from '@/context'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  useEffect(() => {
    console.log(
      '%cSolrachix',
      'color: blue; font-size: 120px; font-weight: 900;'
    )
  }, [])
  return (
    <Context>
      <Layout>
        <SsrComponent {...ssrPageProps} />
      </Layout>
    </Context>
  )
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'


const open_Sans = Open_Sans({
  subsets:['latin'],
  variable: '--font-Open_Sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${open_Sans.variable} font-sans`}>
       <Component {...pageProps} />
    </main>
   
  )
  }

import "@/styles/globals.css";
import "@/components/login-form/login-form.css";
import "@/components/register-form/register-form.css"
import '@/components/navbar/navbar.css'
import '@/styles/login.css'
import '@/styles/register.css'

import type { AppProps } from "next/app";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("@/components/loader/TopProgressBar");
  },
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <TopProgressBar/>
    <Component {...pageProps} />
  </>
}

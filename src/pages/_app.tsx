import "@/styles/globals.css";
import "@/components/login-form/login-form.css";
import "@/components/register-form/register-form.css"
import '@/styles/login.css'
import '@/styles/register.css'

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

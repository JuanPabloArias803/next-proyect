import Navbar from "@/components/navbar/navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  
  const router=useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('UT');
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <>
    <Navbar/>
      <h1>Informes del clima por ciudad</h1>
    </>
  );
}


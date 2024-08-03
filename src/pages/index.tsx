import Navbar from "@/components/navbar/navbar";
import { ICityReport } from "@/models/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  
  const router=useRouter();
  const [citiesArray, setCitiesArray] = useState<ICityReport[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem('UT');
    if (!token) {
      router.push("/login");
    }

    const userCities = localStorage.getItem('UC');
    if(userCities){
      setCitiesArray(JSON.parse(userCities));
    }
    
  }, []);

  return (
    <>
    <Navbar/>
      <h1>Informes del clima por ciudad</h1>
    </>
  );
}


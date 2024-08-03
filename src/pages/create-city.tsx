import CreateForm from "@/components/create-form/create-form";
import Navbar from "@/components/navbar/navbar"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {

    const router=useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('UT');
        if (!token) {
          router.push("/login");
        }
    }, []);

  return (
    <div id='create-container'>
        <Navbar/>
      <h2>Crear Reporte</h2>
      <CreateForm/>
    </div>
  );
}
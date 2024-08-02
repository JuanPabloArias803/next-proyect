import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  
  const router=useRouter();

  async function logout(){
      sessionStorage.removeItem("UT");
      router.push("/login");
  }

  useEffect(() => {
    const token = sessionStorage.getItem('UT');
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <button id="logoutBtn" onClick={logout}>Logout</button>
    </>
  );
}


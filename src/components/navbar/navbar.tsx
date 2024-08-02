import RainIcon from '@/assets/cloud-rain-alt-svgrepo-com.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar() {

    const router=useRouter();

    async function logout(){
        sessionStorage.removeItem("UT");
        router.push("/login");
    }

    return (
        <>
          <nav>
            <span>
                <h3>WeatherAPP</h3>
                <Image src={RainIcon} alt="Icon"/>
            </span>
            <ul>
                <li onClick={()=>router.push("/")}>Home</li>
                <li onClick={()=>router.push("/create-city")}>Crear</li>
                <li onClick={logout}>Cerrar Sesión</li>
            </ul>
          </nav>
        </>
      );
}
import { LoginApiInteraction } from "@/controllers/classes";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginForm() {

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const router=useRouter();
  const api=new LoginApiInteraction;

  async function loginSubmit(event:React.MouseEvent<HTMLElement>){
    event.preventDefault();
    try {
      if(!userEmail||!userPassword){
        throw "Invalid credentials";
      }
      await api.authUser({email:userEmail,password:userPassword});
    } catch (error) {
      alert(error);
    }
  }

    return (
      <>
        <form id='login-form'>
            <label htmlFor='login-userEmail'>Correo Electrónico:</label>
            <input id='login-userEmail' type='email' required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor='login-userPassword'>Contraseña:</label>
            <input id='login-userPassword' type='password' required onChange={(e) => setPassword(e.target.value)}/>
            <button id="login-submitBtn" type='submit' onClick={loginSubmit}>Iniciar Sesión</button>
        </form>
      </>
    );
}
  
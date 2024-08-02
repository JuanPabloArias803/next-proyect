import { IUser } from "@/models/interfaces";
import { useRouter } from "next/router";

export class LoginApiInteraction{
    router=useRouter();
    readonly domain: string = 'https://reqres.in/api'; //static API domain

    async authUser(user:IUser){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };

        try {
            const response: Response = await fetch(
              `${this.domain}/login`,
              options
            );
            if (!response.ok) {
              throw `Error en el servidor: (${response.status})`;
            }
            const responseData = await response.json();
            sessionStorage.setItem('UT',responseData.token); //Save token in sessionStorage
            this.router.push("/")
          } catch (error) {
            alert(error);
          }
    }

    async registerUser(user:IUser){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };

        try {
            const response: Response = await fetch(
              `${this.domain}/register`,
              options
            );
            if (!response.ok) {
              throw `Error en el servidor: (${response.status})`;
            }
            alert("Usuario registrado exitosamente");
            this.router.push("/login");
          } catch (error) {
            alert(error);
          }
    }
}
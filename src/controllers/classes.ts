import { ICity, ILoginResponse, IUser } from "@/models/interfaces";
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
            const responseData:ILoginResponse = await response.json();
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

export class WeatherApiInteraction{
  router=useRouter();
  readonly domain: string = 'https://api.openweathermap.org/data/2.5/weather';
  readonly apiKey:string='684902b30c702f03ffdc3b97317f4f92';
  readonly units:string='metric';
  readonly language:string='sp';

  async consultCity(city:ICity){
    try {
      const response: Response = await fetch(`${this.domain}?lat=${city.latitude}&lon=${city.longitude}&units=${this.units}&lang=${this.language}&appid=${this.apiKey}`);
      if (!response.ok) {
        throw `Error en el servidor. (${response.status}: ${response.statusText})`;
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      alert(error);
    }
  }
}
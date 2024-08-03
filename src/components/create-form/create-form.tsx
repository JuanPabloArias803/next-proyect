import { WeatherApiInteraction } from "@/controllers/classes";
import { createOptions } from "@/helpers/create-options";
import { ICityReport } from "@/models/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CreateForm() {

  const [cityName, setCityName] = useState("");
  const [citiesArray, setCitiesArray] = useState<ICityReport[]>([]);
  const router=useRouter();
  const api=new WeatherApiInteraction;

  useEffect(() => {
    const userCities = localStorage.getItem('UC');
    if(userCities){
      setCitiesArray(JSON.parse(userCities));
    }
  }, []);

  function createCity(event:React.MouseEvent<HTMLElement>){
    event.preventDefault();
    try {
      const selectedCity=createOptions.find(option => option.name === cityName);
      if(!selectedCity){
        throw "Por favor selecciona una ciudad";
      }
   
      if(citiesArray.some(city=>city.name===selectedCity.name)){
        throw "Ya tienes un registro creado para esta ciudad, por favor eliminalo antes de crearlo nuevamente";
      }else{
        citiesArray.push(selectedCity);
      }

      localStorage.setItem('UC',JSON.stringify(citiesArray));
      router.push('/');

    } catch (error) {
      alert(error);
    }
  }

    return (
      <>
        <form id='create-form'>
            <label htmlFor='create-cityName'>Seleccionar ciudad:</label>
            <select required onChange={(e) => setCityName(e.target.value)}>
              <option value="default" defaultChecked>Seleccionar</option>
              <option value="Medellín">Medellín</option>
              <option value="Bogota">Bogota</option>
              <option value="Cali">Cali</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Pereira">Pereira</option>
            </select>
            <button id="create-cityBtn" type='submit' onClick={createCity}>Crear ciudad</button>
        </form>
      </>
    );
}
  
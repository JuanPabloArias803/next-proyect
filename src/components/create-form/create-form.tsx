import { WeatherApiInteraction } from "@/controllers/classes";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateForm() {

  const [city, setCity] = useState("");
  const router=useRouter();
  const api=new WeatherApiInteraction;
  const options=[
    {city:"Medellín",value:{latitude:"6.25184",longitude:"-75.56359"}},
    {city:"Bogota",value:{latitude:"4.624335",longitude:"-74.063644"}},
    {city:"Cali",value:{latitude:"3.43722",longitude:"-76.5225"}},
    {city:"Cartagena",value:{latitude:"10.39972",longitude:"-75.51444"}},
    {city:"Pereira",value:{latitude:"4.8133333",longitude:"-75.6961111"}}
  ];

  async function createCity(event:React.MouseEvent<HTMLElement>){
    event.preventDefault();
    try {
      const selectedCity=options.find(option => option.city === city);
      if(!selectedCity){
        throw "Por favor selecciona una ciudad"
      }
      await api.consultCity(selectedCity.value);
    } catch (error) {
      alert(error);
    }
  }

    return (
      <>
        <form id='create-form'>
            <label htmlFor='create-cityName'>Seleccionar ciudad:</label>
            <select required onChange={(e) => setCity(e.target.value)}>
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
  
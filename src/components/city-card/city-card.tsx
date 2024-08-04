import { WeatherApiInteraction } from '@/controllers/classes';
import { ICityReport, IWeatherResponse } from '@/models/interfaces';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface CityCardProps {
  city: ICityReport;
}

export default function CityCard({city}:CityCardProps) {

    const router=useRouter();
    const api=new WeatherApiInteraction;
    const [cityInfo,setCityInfo]=useState<IWeatherResponse>();

    useEffect(() => {
      (async()=>setCityInfo(await api.consultCity(city.value)))();
    }, []);

    return (
        <div id='city-card'>
          Temperatura en {city.name}: {cityInfo?.main.temp}
        </div>
      );
}
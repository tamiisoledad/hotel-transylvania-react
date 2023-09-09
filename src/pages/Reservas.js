import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Reservas.css';

const Reservas = () => {
  const [value, onChange] = useState(new Date());

  return <div className="reservas">
    <h1>Reserva tu habitación en el Hotel Transylvania</h1>
    <h3>¿Estás buscando un lugar especial para hospedarte? ¡El Hotel Transylvania es el lugar perfecto para ti! Situado en un lugar remoto, nuestro hotel es el único lugar del mundo donde los monstruos son bienvenidos.</h3>
    <section className="info">
      <div>
        <p>Ofrecemos una variedad de habitaciones para satisfacer todas tus necesidades, desde habitaciones sencillas hasta suites de lujo. Todas nuestras habitaciones están equipadas con las últimas comodidades, como:</p>
        <ul>
          <li>Camas cómodas</li>
          <li>Baños privados</li>
          <li>Wi-Fi gratuito</li>
          <li>Televisión de pantalla plana</li>
        </ul>
      </div>
      <div>
      <p>Además de nuestras habitaciones, también ofrecemos una variedad de servicios adicionales para que tu estancia sea inolvidable. Estos servicios incluyen:</p>
        <ul>
          <li>Servicio de habitaciones</li>
          <li>Servicio de lavandería</li>
          <li>Spa</li>
          <li>Piscina</li>
          <li>Gimnasio</li>
        </ul>
      </div>
    </section>
    <section className="calendar">
      <Calendar value={value} onChange={onChange}/>
    </section>
  </div>
}

export default Reservas;
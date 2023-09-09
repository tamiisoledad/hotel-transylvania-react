import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../css/Reservas.css';
import { Button, Form } from "react-bootstrap";

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
      <div>
        <Calendar tileDisabled={({activeStartDate, date, view}) => {
          const date1 = new Date(date)
          const date2 = new Date('09/14/2023')
          return date1.getTime() === date2.getTime()
          }} value={value} selectRange={true} onChange={onChange}/>
          <small style={{ color: 'white'}}>Las fechas en gris no estan disponibles</small>
      </div>
      <Form>
        <h4>Reserva</h4>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Ingrese su nombre"/>
        </Form.Group>
        <Form.Group style={{ marginTop: '10px'}}>
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email"/>
        </Form.Group>
        <Form.Group style={{ marginTop: '10px'}}>
          <Form.Label>Cantidad de personas</Form.Label>
          <Form.Select aria-label="Personas">
            <option>Seleccionar valor</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ marginTop: '10px'}}>
          <Form.Label>Cuarto</Form.Label>
          <Form.Select aria-label="habitaciones">
            <option>Seleccionar valor</option>
            <option value='1'>Individual (cama individual) $10</option>
            <option value='2'>Doble (cama matrimonial) $15</option>
            <option value='3'>Triple (cama matrimonial + individual) $20</option>
            <option value='4'>Cuadruple (cama matrimonial + 2 individual) $25</option>
            <option value='5'>Dos cuartos dobles (2 camas matrimoniales) $30</option>
            <option value='6'>2 cuartos dobles + individual con 2 camas $35</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ marginTop: '10px'}}>
          <Form.Label>Fechas</Form.Label>
          <Form.Control placeholder="Desde" disabled value={value && value.length ? `${value[0].toLocaleString().slice(0, 2).includes('/') ? value[0].toLocaleString().slice(0, 8) : value[0].toLocaleString().slice(0, 9)}` : null}/>
          <Form.Control style={{ marginTop: '10px'}} placeholder="Hasta" disabled value={value && value.length ? `${value[1].toLocaleString().slice(0, 2).includes('/') ? value[1].toLocaleString().slice(0, 8) : value[1].toLocaleString().slice(0, 9)}` : null}/>
        </Form.Group>
        <Form.Group style={{ marginTop: '10px'}}>
          <Button variant="dark">Reservar</Button>
        </Form.Group>
      </Form>
    </section>
  </div>
}

export default Reservas;
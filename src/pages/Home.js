import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css';

const Home = () => {
  return <div className="home">
    <section className="banner">
      <img src="banner.webp" alt="banner"/>
    </section>
    <section className="welcome">
      <h1>¡Bienvenido al Hotel Transylvania!</h1>
      <h2>El único hotel del mundo donde los monstruos son bienvenidos</h2>
      <p>El Hotel Transylvania es el lugar perfecto para que los monstruos de todas las edades se relajen y se diviertan. Con sus habitaciones lujosas, sus restaurantes deliciosos y sus actividades emocionantes, el Hotel Transylvania tiene algo para todos.</p>
      <p>Reserve su habitación hoy mismo y descubra la magia del Hotel Transylvania</p>
      <div>
      <Link className="btn btn-dark" to='/reservas'>Reservar</Link>
      </div>
    </section>
  </div>
}

export default Home;
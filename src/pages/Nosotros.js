import React from "react";
import '../css/Nosotros.css'
import { Link } from "react-router-dom";

const Nosotros = () => {
  return <div className="nosotros">
    <h1>Sobre Nosotros</h1>
    <section className="history">
      <img src="hotel.jpg" alt="hotel"/>
      <div>
        <p>El Hotel Transylvania es un lugar especial. Es el único hotel del mundo donde los monstruos son bienvenidos.</p>
        <p>La historia del hotel se remonta a 1895, cuando el Conde Drácula lo construyó para que sus amigos y familiares pudieran relajarse y divertirse sin tener que preocuparse por ser cazados. Desde entonces, el hotel ha sido un destino popular para monstruos de todo el mundo.</p>
        <p>El hotel es conocido por sus habitaciones lujosas, sus restaurantes deliciosos y sus actividades emocionantes. Los monstruos pueden disfrutar de todo, desde una noche de karaoke hasta un paseo en el lago de los tiburones.</p>
        <p>El Hotel Transylvania es un lugar donde los monstruos pueden ser ellos mismos y sentirse bienvenidos. Es un lugar donde la magia es real y la diversión nunca termina.</p>
      </div>
    </section>
    <section className="values">
      <div>
        <p>El Hotel Transylvania es un hotel que cree en la inclusión, la diversidad y la aceptación. Estamos comprometidos a crear un espacio seguro y acogedor para todos los monstruos, independientemente de su especie, origen o apariencia.</p>
        <p>
          Nuestros valores son:
          <ul>
            <li>Inclusión: Creemos que todos los monstruos merecen ser tratados con respeto y dignidad.</li>
            <li>Diversidad: Creemos que la diversidad es una fuerza positiva que nos hace mejores personas.</li>
            <li>Aceptación: Creemos que todos los monstruos tienen derecho a ser ellos mismos.</li>
          </ul>
        </p>
        <p>Estos valores guían nuestro comportamiento en todos los aspectos de nuestro hotel, desde el servicio al cliente hasta las políticas de empleo. Estamos orgullosos de ser un hotel que celebra la diversidad y la inclusión.</p>
      </div>
      <img src="monsters.jpg" alt="hotel"/>
    </section>
    <section className="mision">
    <img src="mision.jpg" alt="hotel"/>
      <div>
        <p>La misión del Hotel Transylvania es proporcionar un lugar seguro y acogedor para que los monstruos de todo el mundo se reúnan, se relajen y se diviertan.</p>
        <p>Creemos que todos los monstruos merecen ser tratados con respeto y dignidad, independientemente de su especie, origen o apariencia. Estamos comprometidos a crear un hotel donde los monstruos puedan ser ellos mismos y sentirse bienvenidos.</p>
        <p>
          Para lograr nuestra misión, nos comprometemos a:
          <ul>
            <li>Ofrecer instalaciones y servicios de alta calidad que satisfagan las necesidades de nuestros huéspedes monstruos.</li>
            <li>Proporcionar un servicio al cliente excepcional que sea amable, respetuoso e informativo.</li>
            <li>Promover la inclusión y la diversidad en todos los aspectos de nuestro hotel.</li>
          </ul>
        </p>
        <p>Estamos orgullosos de ser un hotel que celebra la diversidad y la inclusión. Creemos que el Hotel Transylvania es un lugar especial donde los monstruos de todo el mundo pueden sentirse como en casa.</p>
      </div>
    </section>
    <section className="team">
      <div>
        <p>El Hotel Transylvania es un lugar especial gracias a su equipo. Nuestros empleados están comprometidos a proporcionar un servicio al cliente excepcional y a crear una experiencia inolvidable para nuestros huéspedes monstruos.</p>
        <p>Nuestro equipo está formado por monstruos de todo el mundo, cada uno con su propia experiencia y habilidades únicas. Estamos orgullosos de tener un equipo diverso que refleja la diversidad de nuestros huéspedes.</p>
        <p>
          Algunos de los miembros clave de nuestro equipo son:
          <ul>
            <li><Link>Conde Drácula:</Link> El fundador y propietario del Hotel Transylvania, el Conde Drácula es un líder visionario que está dedicado a crear un mundo donde los monstruos sean aceptados.</li>
            <li><Link>Mavis:</Link>  La gerente general del Hotel Transylvania, Mavis es una profesional experimentada con un profundo conocimiento de la industria hotelera.</li>
            <li><Link>Frank:</Link> El conserje del Hotel Transylvania, Frank es un monstruo amigable y servicial que está siempre dispuesto a ayudar a los huéspedes.</li>
            <li><Link>Eunice:</Link> La camarera del Hotel Transylvania, Eunice es una monstruo creativa y talentosa que siempre está buscando nuevas formas de hacer que la estancia de los huéspedes sea especial.</li>
            <li><Link>Wayne:</Link> El entrenador de esquí del Hotel Transylvania, Wayne es un monstruo apasionado por el esquí que siempre está dispuesto a enseñar a los huéspedes nuevos trucos.</li>
          </ul>
        </p>
        <p>Estamos orgullosos de nuestro equipo y de su compromiso con el Hotel Transylvania. Creemos que nuestros empleados son la clave de nuestro éxito.</p>
        <small>Si queres saber mas de nuestro equipo podes clickear en sus nombres</small>
      </div>
      <img src="workers.jpg" alt="hotel"/>
    </section>
  </div>
}

export default Nosotros;

import './App.css'

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          Transportes <span>Cabrera</span>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#unidades">Unidades</a>
          <a href="#opiniones">Opiniones</a>
        </nav>
      </header>

      {/* HERO */}
      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <p className="hero-tag">TRANSPORTE SEGURO Y CONFIABLE</p>

            <h1>
              Viaja con <span>Transportes Cabrera</span>
            </h1>

            <p className="hero-description">
              Tu transporte de confianza entre Trujillo, Shiran y Poroto.
              Conoce nuestras unidades y comparte tu experiencia.
            </p>

            <div className="hero-buttons">
              <a href="#unidades" className="btn-primary">
                Ver unidades
              </a>

              <a href="#opiniones" className="btn-secondary">
                Ver opiniones
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <img
              src="public/fotoEmpresa/7v.jpg"
              alt="Transportes Cabrera"
            />
          </div>

          {/*  ANTES CAMBIO DE IMAGEN *****
          <div className="hero-image">
            <div className="image-placeholder">
              <span>🚌</span>
              <p>Foto de la empresa</p>
              <small>La reemplazaremos cuando nos entreguen las fotos</small>
            </div>
          </div>  */}
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="section-title">
            <p>¿QUÉ OFRECEMOS?</p>
            <h2>Nuestros servicios</h2>
          </div>

          <div className="services">
            <article className="service-card">
              <div className="service-icon">🚌</div>
              <h3>Transporte</h3>
              <p>
                Servicio de transporte para nuestros pasajeros
                en la ruta Trujillo - Shiran - Poroto.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">⭐</div>
              <h3>Opiniones</h3>
              <p>
                Consulta las experiencias y opiniones de otros
                pasajeros sobre nuestras unidades.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <img
                  src="public/fotoEmpresa/CONDUCTOR'S.jpg"
                  alt="Conductor de Transportes Cabrera"
                 />
               </div>

               <h3>Conductores</h3>

               <p>
                 Conoce información de los conductores y
                 colaboradores asociados a cada unidad.
               </p>
              </article>
          </div>
        </section>

        {/* UNIDADES */}
        <section id="unidades" className="section section-light">
          <div className="section-title">
            <p>NUESTRA FLOTA</p>
            <h2>Conoce nuestras unidades</h2>
          </div>

          <div className="units-placeholder">
            <div>
              <span>🚌</span>
              <h3>Próximamente</h3>
              <p>
                Aquí podrás conocer nuestras unidades,
                sus características y las opiniones de los pasajeros.
              </p>
            </div>
          </div>
        </section>

        {/* OPINIONES */}
        <section id="opiniones" className="section">
          <div className="section-title">
            <p>EXPERIENCIAS</p>
            <h2>Opiniones de nuestros pasajeros</h2>
          </div>

          <div className="opinion-placeholder">
            <span>💬</span>
            <h3>Comparte tu experiencia</h3>
            <p>
              Próximamente podrás dejar opiniones sobre
              las unidades y conductores.
            </p>

            <button className="btn-primary">
              Próximamente
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h3>Transportes Cabrera</h3>
          <p>Tu transporte de confianza.</p>
        </div>

        <p>Trujillo · Shiran · Poroto</p>

        <p>© 2026 Transportes Cabrera</p>
      </footer>

    </div>
  )
}

export default App
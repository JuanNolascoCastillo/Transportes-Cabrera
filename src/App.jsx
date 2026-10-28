import { useRef, useState } from 'react'
import './App.css'

const fleetPhoto = '/fotoEmpresa/empresa.jpg'

// Número de prueba del asesor, con código de país y solo dígitos.
// Para cambiarlo, reemplaza este valor por el número real: Perú usa 51
// seguido del celular (ejemplo: 519XXXXXXXX). No incluyas +, espacios ni guiones.
const ADVISOR_WHATSAPP = '51985582667'
const ADVISOR_WHATSAPP_URL = `https://wa.me/${ADVISOR_WHATSAPP}`

// Para añadir una movilidad: guarda su foto en public/flota/ y agrega un objeto
// con id, name, route, image: '/flota/archivo.jpg', alt y status. Las rutas
// públicas empiezan con / y el cambio aparece automáticamente en la cinta.
const fleet = [
  {
    id: 'combi-ruta',
    name: 'Combi de la ruta',
    route: 'Trujillo · Shirán · Poroto',
    image: fleetPhoto,
    alt: 'Combi de Transportes Cabrera en la ruta Trujillo, Shirán y Poroto',
    status: 'Unidad en servicio',
  },
]

// Galería: guarda cada foto en public/viajes/ y agrega un objeto con id,
// type: 'image', src: '/viajes/archivo.jpg', alt, title y location. Para un
// video usa type: 'video', src: '/viajes/archivo.mp4' y poster: '/viajes/portada.jpg'.
// La cinta detecta el contenido y muestra controles nativos para reproducir videos.
const travelMoments = [
  {
    id: 'unidad-en-ruta',
    type: 'image',
    src: fleetPhoto,
    alt: 'Combi de Transportes Cabrera en una de sus rutas',
    title: 'Kilómetros que nos acercan',
    location: 'Nuestra unidad en ruta',
  },
  {
    id: 'paisaje-compartido',
    type: 'image',
    src: '/fotoEmpresa/conductor.jpg',
    alt: 'Personas al aire libre frente a un paisaje rocoso',
    title: 'Un momento al aire libre',
    location: 'Foto del archivo de la empresa',
  },
]

const services = [
  {
    number: '01',
    title: 'Transporte de pasajeros',
    description:
      'Viaja entre Trujillo, Shirán y Poroto con un servicio cercano y confiable.',
    icon: 'route',
  },
  {
    number: '02',
    title: 'Carreras privadas',
    description:
      'Coordina un traslado privado a tu destino. Cuéntanos el recorrido y la fecha.',
    icon: 'arrow',
  },
  {
    number: '03',
    title: 'Servicios y contratos',
    description:
      'Conversemos sobre traslados para grupos, empresas o servicios programados.',
    icon: 'document',
  },
]

function Icon({ name, size = 22 }) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    document: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8m-8 4h8" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
        <path d="M9 3v15m6-12v15" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="6" r="3" />
        <path d="M8.5 16.5 15.5 7.5M6 15V9a3 3 0 0 1 3-3h6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
        <path d="M8.5 9.5c.4 2.2 2.1 3.9 4.3 4.3l1.2-1.2 2.2 1.1c-.1 1.2-1 2-2.2 2-3.6-.1-6.6-3.1-6.7-6.7 0-1.2.8-2.1 2-2.2l1.1 2.2z" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Carousel({ id, label, children, className = '' }) {
  const trackRef = useRef(null)

  function scrollTrack(direction) {
    if (!trackRef.current) return

    trackRef.current.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.78,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`carousel ${className}`}>
      <div
        className="carousel-track"
        id={id}
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex="0"
      >
        {children}
      </div>
      <div className="carousel-controls" aria-label={`Controles de ${label}`}>
        <button type="button" onClick={() => scrollTrack(-1)} aria-label="Desplazar a la izquierda">
          <Icon name="chevronLeft" size={19} />
        </button>
        <button type="button" onClick={() => scrollTrack(1)} aria-label="Desplazar a la derecha">
          <Icon name="chevronRight" size={19} />
        </button>
        <span>DESLIZA PARA EXPLORAR</span>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [requestLink, setRequestLink] = useState('')

  function handleRequest(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const request = [
      'Hola, Transportes Cabrera. Quisiera consultar por un servicio.',
      `Nombre: ${formData.get('name')}`,
      `Teléfono: ${formData.get('phone')}`,
      `Tipo de servicio: ${formData.get('service')}`,
      `Destino: ${formData.get('destination')}`,
      `Fecha: ${formData.get('date') || 'Por coordinar'}`,
      `Detalles: ${formData.get('details') || 'Sin detalles adicionales'}`,
    ].join('\n')

    setRequestLink(`${ADVISOR_WHATSAPP_URL}?text=${encodeURIComponent(request)}`)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>
            <span className="status-dot" />
            Servicio local y viajes privados
          </span>
          <a href={ADVISOR_WHATSAPP_URL} rel="noreferrer" target="_blank">
            ¿Planeas un viaje? Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Transportes Cabrera, inicio" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">Transportes <strong>Cabrera</strong></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#ruta" onClick={closeMenu}>Nuestra ruta</a>
            <a href="#flota" onClick={closeMenu}>Movilidades</a>
            <a href="#galeria" onClick={closeMenu}>Galería</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <a className="nav-whatsapp" href={ADVISOR_WHATSAPP_URL} rel="noreferrer" target="_blank" onClick={closeMenu}>
              WhatsApp del asesor
            </a>
          </nav>

          <a className="header-cta" href={ADVISOR_WHATSAPP_URL} rel="noreferrer" target="_blank">
            WhatsApp del asesor <Icon name="whatsapp" size={17} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> MOVEMOS LO QUE MÁS IMPORTA</div>
              <h1>Tu camino,<br />más <span>cerca.</span></h1>
              <p className="hero-description">
                Transporte de confianza para tus viajes de todos los días y
                carreras privadas a donde necesites llegar.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#contacto">
                  Coordina tu viaje <Icon name="arrow" size={18} />
                </a>
                <a className="text-link" href="#ruta">Conoce nuestra ruta <span>↓</span></a>
              </div>
              <div className="hero-proof">
                <span className="proof-icon"><Icon name="map" size={18} /></span>
                <span><strong>Trujillo · Shirán · Poroto</strong><small>Una ruta que nos conecta</small></span>
              </div>
            </div>

            <div className="hero-visual">
              <img className="image-backdrop" src={fleetPhoto} alt="" aria-hidden="true" />
              <img className="image-foreground" src={fleetPhoto} alt="Combi de Transportes Cabrera en su ruta" />
              <div className="photo-caption">
                <span className="caption-icon"><Icon name="route" size={19} /></span>
                <span><strong>De aquí, para donde vayas</strong><small>Viajes coordinados a tu medida</small></span>
              </div>
              <div className="photo-index"><span>01</span> / NUESTRA FLOTA</div>
              <div className="hero-stamp" aria-hidden="true">
                <Icon name="shield" size={25} />
                <span>VIAJA<br />TRANQUILO</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>TRANSPORTE PÚBLICO Y PRIVADO</span>
            <span className="hero-bottom-line" />
            <span>LA LIBERTAD, PERÚ</span>
          </div>
        </section>

        <section className="services-section section-pad" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> CÓMO PODEMOS AYUDARTE</p>
                <h2>Un viaje para cada plan.</h2>
              </div>
              <p className="heading-note">
                Desde tu traslado diario hasta un viaje coordinado especialmente para ti.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon name={service.icon} size={22} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contacto" aria-label={`Consultar por ${service.title}`}>
                    Consultar <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="route-section" id="ruta">
          <div className="container route-layout">
            <div className="route-copy">
              <p className="eyebrow"><span /> UNA RUTA QUE CONOCEMOS</p>
              <h2>Conectamos<br />tu día a día.</h2>
              <p>
                Recorremos la ruta Trujillo–Shirán–Poroto. ¿Necesitas llegar
                más lejos? Cuéntanos tu destino y coordinamos tu carrera.
              </p>
              <a className="button button-light" href="#contacto">
                Consultar por un viaje <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="route-map" aria-label="Ruta: Trujillo, Shirán y Poroto">
              <div className="route-map-label"><Icon name="map" size={17} /> NUESTRA RUTA</div>
              <div className="route-stops">
                <div className="route-stop">
                  <span className="stop-dot stop-start" />
                  <span className="stop-copy"><small>PUNTO DE PARTIDA</small><strong>Trujillo</strong></span>
                  <span className="stop-tag">Ciudad</span>
                </div>
                <div className="route-connector"><span /></div>
                <div className="route-stop">
                  <span className="stop-dot" />
                  <span className="stop-copy"><small>EN EL CAMINO</small><strong>Shirán</strong></span>
                  <span className="stop-tag">Parada</span>
                </div>
                <div className="route-connector"><span /></div>
                <div className="route-stop">
                  <span className="stop-dot stop-end" />
                  <span className="stop-copy"><small>NUESTRO DESTINO</small><strong>Poroto</strong></span>
                  <span className="stop-tag">Destino</span>
                </div>
              </div>
              <div className="route-map-footer"><Icon name="clock" size={16} /> Consulta horarios y disponibilidad al coordinar.</div>
              <span className="map-decoration map-decoration-one" />
              <span className="map-decoration map-decoration-two" />
            </div>
          </div>
        </section>

        <section className="fleet-section section-pad" id="flota">
          <div className="container">
            <div className="section-heading fleet-heading">
              <div>
                <p className="eyebrow"><span /> NUESTRA FLOTA</p>
                <h2>Movilidades que te llevan.</h2>
              </div>
              <p className="heading-note">
                Conoce las unidades del servicio. Desliza la cinta para ver más.
              </p>
            </div>
            <Carousel id="fleet-carousel" label="Movilidades de Transportes Cabrera" className="fleet-carousel">
              {fleet.map((vehicle) => (
                <article className="fleet-card" key={vehicle.id}>
                  <div className="fleet-card-image">
                    <img className="image-backdrop" src={vehicle.image} alt="" aria-hidden="true" loading="lazy" />
                    <img className="image-foreground" src={vehicle.image} alt={vehicle.alt} loading="lazy" />
                    <span className="fleet-status"><span /> {vehicle.status}</span>
                    <span className="fleet-card-number">TC / {vehicle.id.toUpperCase()}</span>
                  </div>
                  <div className="fleet-card-copy">
                    <div>
                      <span className="fleet-card-kicker">TRANSPORTE DE PASAJEROS</span>
                      <h3>{vehicle.name}</h3>
                      <p><Icon name="map" size={15} /> {vehicle.route}</p>
                    </div>
                    <a href="#contacto" aria-label={`Consultar disponibilidad para ${vehicle.name}`}>
                      <Icon name="arrow" size={18} />
                    </a>
                  </div>
                </article>
              ))}
              <a className="fleet-add-card" href="#contacto">
                <span className="add-card-icon">+</span>
                <span className="add-card-label">MÁS UNIDADES</span>
                <strong>¿Buscas una movilidad<br />para tu próximo viaje?</strong>
                <span className="add-card-link">Consulta disponibilidad <Icon name="arrow" size={16} /></span>
              </a>
            </Carousel>
            <div className="fleet-trust-note">
              <span><Icon name="shield" size={18} /></span>
              <p><strong>Información clara, viaje coordinado.</strong> Consulta disponibilidad y detalles directamente con el encargado.</p>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="galeria">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> POSTALES DEL CAMINO</p>
                <h2>Momentos para compartir.</h2>
              </div>
              <p className="heading-note">
                Fotos y videos de nuestros viajes. Desliza para descubrir más.
              </p>
            </div>
            <Carousel id="travel-carousel" label="Fotos y videos de viajes" className="gallery-carousel">
              {travelMoments.map((moment, index) => (
                <article className={`gallery-card gallery-card-${index + 1}${moment.type === 'video' ? ' gallery-card-video' : ''}`} key={moment.id} aria-label={`${moment.title}: ${moment.location}`}>
                  {moment.type === 'image' && (
                    <img className="image-backdrop" src={moment.src} alt="" aria-hidden="true" loading="lazy" />
                  )}
                  {moment.type === 'video' ? (
                    <video className="image-foreground" aria-label={`${moment.title}. ${moment.location}`} controls preload="metadata" poster={moment.poster}>
                      <source src={moment.src} type="video/mp4" />
                      Tu navegador no puede reproducir este video.
                    </video>
                  ) : (
                    <img className="image-foreground" src={moment.src} alt={moment.alt} loading="lazy" />
                  )}
                  <div className="gallery-card-overlay">
                    <span>{moment.type === 'video' ? 'VIDEO' : 'FOTOGRAFÍA'}</span>
                    <h3>{moment.title}</h3>
                    <p><Icon name="map" size={14} /> {moment.location}</p>
                  </div>
                </article>
              ))}
              <a className="gallery-add-card" href="#contacto">
                <span className="gallery-add-icon"><Icon name="arrow" size={22} /></span>
                <span className="add-card-label">EL PRÓXIMO DESTINO</span>
                <strong>¿A dónde<br />nos llevará el camino?</strong>
                <span className="add-card-link">Coordina tu viaje <Icon name="arrow" size={16} /></span>
              </a>
            </Carousel>
          </div>
        </section>

        <section className="contact-section section-pad" id="contacto">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><span /> HAGAMOS PLANES</p>
              <h2>Cuéntanos<br />a dónde vas.</h2>
              <p>
                Déjanos los detalles de tu viaje o contrato. Prepararemos un
                mensaje para que lo compartas por WhatsApp y coordinemos contigo.
              </p>
              <a className="contact-note" href={ADVISOR_WHATSAPP_URL} rel="noreferrer" target="_blank">
                <span><Icon name="whatsapp" size={21} /></span>
                <p><strong>Habla directamente con el asesor</strong><small>Abre el chat de Transportes Cabrera en WhatsApp.</small></p>
              </a>
            </div>
            <form className="contact-form" onSubmit={handleRequest}>
              <div className="form-heading">
                <span>FORMULARIO DE VIAJE</span>
                <small>Completa los datos para empezar</small>
              </div>
              <div className="form-row">
                <label>
                  Tu nombre
                  <input autoComplete="name" name="name" placeholder="¿Cómo te llamas?" required />
                </label>
                <label>
                  Tu teléfono
                  <input autoComplete="tel" name="phone" placeholder="Tu número de contacto" required type="tel" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Tipo de servicio
                  <select name="service" defaultValue="" required>
                    <option disabled value="">Selecciona una opción</option>
                    <option>Transporte de pasajeros</option>
                    <option>Carrera privada</option>
                    <option>Servicio para grupo o empresa</option>
                    <option>Otro servicio</option>
                  </select>
                </label>
                <label>
                  Fecha del viaje
                  <input name="date" type="date" />
                </label>
              </div>
              <label>
                ¿A dónde necesitas ir?
                <input name="destination" placeholder="Escribe tu destino o recorrido" required />
              </label>
              <label>
                Cuéntanos un poco más <span className="optional">(opcional)</span>
                <textarea name="details" placeholder="Pasajeros, horario, tipo de contrato..." rows="3" />
              </label>
              <button className="button button-dark form-submit" type="submit">
                Preparar mensaje <Icon name="arrow" size={18} />
              </button>
              {requestLink && (
                <div className="request-ready" role="status">
                  <p>Tu mensaje está listo. Se abrirá el chat del asesor; recuerda pulsar enviar en WhatsApp.</p>
                  <a className="button button-whatsapp" href={requestLink} rel="noreferrer" target="_blank">
                    <Icon name="whatsapp" size={19} /> Continuar a WhatsApp
                  </a>
                </div>
              )}
              <p className="form-privacy">Tus datos se incluirán únicamente en el mensaje que decidas enviar.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#inicio">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-name">Transportes <strong>Cabrera</strong></span>
          </a>
          <p>Conectando personas, acercando destinos.</p>
          <a href="#inicio" className="back-top">Volver arriba ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Transportes Cabrera</span>
          <span>Trujillo · Shirán · Poroto, La Libertad</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={ADVISOR_WHATSAPP_URL}
        rel="noreferrer"
        target="_blank"
        aria-label="Contactar directamente al asesor por WhatsApp"
      >
        <Icon name="whatsapp" size={23} />
        <span>Escríbenos</span>
      </a>
    </div>
  )
}

export default App

// import ratingstar from '../../assets/ratingstar.svg';
// import lightbluetimelogo from '../../assets/lightbluetimelogo.svg';
import './SideBar.css';

function SideBar({ user_image, user_name }) {
  return (
    <div className="navbar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,-25"
      />
      {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> */}
      <div className="top-profile">
        <img className="rounded" src={user_image} />
        <div>
          <a href="" className="username-text">
            ¡Bienvenido, {user_name}!
          </a>
        </div>
      </div>

      <div className="options">
        <div>
          <a href="" className="option-text">
            <i class="material-symbols-outlined" style={{ color: '#fff' }}>
              description
            </i>
            Mis Ordenes
          </a>
        </div>

        <div>
          <a href="" className="option-text">
            <i class="material-symbols-outlined" style={{ color: '#fff' }}>
              person
            </i>
            Mi Perfil
          </a>
        </div>

        <a href="" className="option-text">
          <span class="material-symbols-outlined" style={{ color: '#fff' }}>
            settings
          </span>
          Configuracion
        </a>
        <a href="" className="option-text">
          <span class="material-symbols-outlined" style={{ color: '#fff' }}>
            contact_support
          </span>
          Preguntas Frecuentes
        </a>
        <a href="" className="option-text">
          <span class="material-symbols-outlined" style={{ color: '#fff' }}>
            logout
          </span>
          Cerrar Sesión
        </a>
      </div>

      {/* <div className="product-card-top-cont" style={{ backgroundImage: `url(${image})` }}>
        <div className="product-card-rating-cont">
          <span className="product-card-rating">{rating}</span>
          <img className="product-card-timelogo" src={ratingstar}></img>
        </div>
      </div>
      <div className="product-card-bottom-cont">
        <span className="product-card-name">{name}</span>
        <div className="product-card-info-cont">
          <span className="product-card-dtime-sample-text">Tiempo de envío:</span>
          <img className="product-card-timeicon" src={lightbluetimelogo}></img>
          <span className="product-card-dtime">{dtime} días</span>
        </div>
        <div className="product-card-tags-cont">
          {tags.map((tag) => {
            return <div className="product-card-tag">{tag}</div>;
          })}
        </div>
      </div> */}
    </div>
  );
}

export default SideBar;

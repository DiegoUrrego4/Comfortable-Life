import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <h1 className='nombre-sitio'>
          Comfortable <span>Life</span>
        </h1>
      </header>
      <div className='contenedor-navegacion'>
        <nav className='nav-principal contenedor'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Inicio
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Nosotros
          </NavLink>
          <NavLink
            to='/store'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Tienda
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Blog
          </NavLink>
          <NavLink
            to='/gallery'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Galería
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </>
  );
};

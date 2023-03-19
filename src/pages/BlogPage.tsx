import { NavLink } from 'react-router-dom';
import { BasePage, Publication } from '../components';
import { blogs } from '../fixtures';

export const BlogPage = () => {
  return (
    <BasePage pageTitle='Nuestro Blog'>
      <section className='contenedor-blog'>
        <div className='blog'>
          {blogs.map((blog) => (
            <Publication key={blog.id} {...blog} hasButton />
          ))}
        </div>

        <aside>
          <h3>Otras entradas de blog</h3>
          <ul>
            <li>
              <NavLink to='/blog/1'>Guía de colores</NavLink>
            </li>
            <li>
              <NavLink to='/blog/2'>Nuevos modelos 2022</NavLink>
            </li>
            <li>
              <NavLink to='/blog/3'>Guía para diseño de interiores</NavLink>
            </li>
            <li>
              <NavLink to='/blog/4'>Guía para diseño de exteriores</NavLink>
            </li>
          </ul>
        </aside>
      </section>
    </BasePage>
  );
};

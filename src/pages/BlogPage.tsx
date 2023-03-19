import { BasePage, IndividualBlog } from '../components';
import { blogs } from '../fixtures';

export const BlogPage = () => {
  return (
    <BasePage pageTitle='Nuestro Blog'>
      <section className='contenedor-blog'>
        <div className='blog'>
          {blogs.map((blog) => (
            <IndividualBlog key={blog.id} {...blog} />
          ))}
        </div>

        <aside>
          <h3>Otras entradas de blog</h3>
          <ul>
            <li>
              <a href='#'>Guía de colores</a>
            </li>
            <li>
              <a href='#'>Nuevos modelos 2022</a>
            </li>
            <li>
              <a href='#'>Guía para diseño de interiores</a>
            </li>
            <li>
              <a href='#'>Guía para diseño de exteriores</a>
            </li>
          </ul>
        </aside>
      </section>
    </BasePage>
  );
};

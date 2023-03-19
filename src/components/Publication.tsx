import { NavLink } from 'react-router-dom';
import { BlogProps } from '../interfaces/interfaces';

export const Publication = ({
  altTitle,
  author,
  blogDescription,
  blogTitle,
  date,
  img,
  id,
  className,
  hasButton,
}: BlogProps) => {
  return (
    <article className={`entrada ${className} `}>
      <header>
        <h2>{blogTitle}</h2>
      </header>
      <div className='imagen'>
        <img src={img} alt={altTitle} />
      </div>
      <div className='entrada-meta'>
        <p>
          Fecha: <span>{date}</span>
        </p>
        <p>
          Escrito por: <span>{author}</span>
        </p>
      </div>

      <div className='entrada-blog'>
        <p>{blogDescription}</p>
      </div>
      {hasButton && (
        <NavLink to={`/blog/${id}`} className='btn max-width-30 '>
          Leer
        </NavLink>
      )}
    </article>
  );
};

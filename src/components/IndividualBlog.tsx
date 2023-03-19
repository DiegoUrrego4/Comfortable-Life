import { BlogProps } from '../interfaces/interfaces';

export const IndividualBlog = ({
  altTitle,
  author,
  blogDescription,
  blogTitle,
  date,
  img,
}: BlogProps) => {
  return (
    <article className='entrada'>
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
      <a href='#' className='btn max-width-30 '>
        Leer
      </a>
    </article>
  );
};

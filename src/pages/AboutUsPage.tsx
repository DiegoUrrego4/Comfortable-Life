import { BasePage } from '../components';

export const AboutUsPage = () => {
  return (
    <BasePage pageTitle='Sobre Nosotros'>
      <div className='contenido-nosotros'>
        <div className='imagen'>
          <img src='../../src/assets/img/nosotros.jpg' alt='nosotros' />
        </div>
        <div className='informacion-nosotros'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            voluptatem, vero atque error officiis tenetur distinctio ea dicta
            dolore quidem corporis optio. Maxime voluptatem recusandae minus?
            Sit, incidunt facilis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            corrupti dolor quisquam aperiam laboriosam nihil quo natus
            temporibus iure sequi asperiores quam labore odio, quod incidunt
            hic. Pariatur, eaque suscipit.
          </p>
        </div>
      </div>
    </BasePage>
  );
};

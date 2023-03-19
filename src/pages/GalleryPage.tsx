import { BasePage } from '../components';
import { galleryImages } from '../fixtures';

export const GalleryPage = () => {
  return (
    <BasePage pageTitle='Galería'>
      <ul className='galeria'>
        {galleryImages.map(({ altTitle, id, img }) => (
          <li key={id}>
            <a href={img}>
              <img src={img} alt={altTitle} />
            </a>
          </li>
        ))}
      </ul>
    </BasePage>
  );
};

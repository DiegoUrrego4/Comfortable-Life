import { footerItems } from '../fixtures';
import { FooterItem } from './FooterItem';

export const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='grid-footer contenedor'>
        {footerItems.map((footerItem) => (
          <FooterItem key={footerItem.id} {...footerItem} />
        ))}
      </div>
      <p className='copyright'>
        Todos los derechos reservados - Comfortable Life
      </p>
    </footer>
  );
};

import { FooterProps } from '../interfaces';

export const FooterItem = ({ items, title }: FooterProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <nav className='footer-menu'>
        {items.map((item) => (
          <a href='#' key={item}>
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

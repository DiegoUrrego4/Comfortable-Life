import { NavLink } from 'react-router-dom';
import { CategoryCardProps } from '../interfaces/interfaces';

export const CategoryCard = ({
  altTitle,
  categoryName,
  img,
}: CategoryCardProps) => {
  return (
    <div className='categoria'>
      <img src={img} alt={altTitle} />
      <NavLink to='/store'>{categoryName}</NavLink>
    </div>
  );
};

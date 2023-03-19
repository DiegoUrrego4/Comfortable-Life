import { CategoryCardProps } from '../interfaces';
import categoryOneImage from '../assets/img/categoria1.jpg';
import categoryTwoImage from '../assets/img/categoria2.jpg';
import categoryThreeImage from '../assets/img/categoria3.jpg';

export const categories: CategoryCardProps[] = [
  {
    id: '1',
    altTitle: 'imagenCategoría1',
    img: categoryOneImage,
    categoryName: 'Oficina',
  },
  {
    id: '2',
    altTitle: 'imagenCategoría1',
    img: categoryTwoImage,
    categoryName: 'Hogar',
  },
  {
    id: '3',
    altTitle: 'imagenCategoría1',
    img: categoryThreeImage,
    categoryName: 'Cocina',
  },
];

import { categories } from '../fixtures';
import { CategoryCard } from './CategoryCard';

export const Categories = () => {
  return (
    <section className='contenedor categorias'>
      <h2 className='text-center'>Categorías de productos</h2>
      <div className='listado-categorias'>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

import { productsToShow } from '../fixtures';
import { ProductCard } from './ProductCard';

export const OurProducts = () => {
  return (
    <main className='contenido-principal contenedor'>
      <h2 className='text-center'>Nuestros productos</h2>
      {/* Inicio de listado de productos */}
      <div className='listado-productos'>
        {productsToShow.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

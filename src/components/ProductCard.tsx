import { ProductCardProps } from '../interfaces';

export const ProductCard = ({
  altTitle,
  img,
  productDescription,
  productName,
  productPrice,
}: ProductCardProps) => {
  return (
    <div className='producto'>
      <img src={img} alt={altTitle} />
      <div className='texto-producto'>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <p className='precio'>${productPrice}</p>
        <a className='btn' type='button'>
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

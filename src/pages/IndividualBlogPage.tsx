import { useNavigate, useParams } from 'react-router-dom';
import { BasePage, Publication } from '../components';
import { blogs } from '../fixtures/blogs';

export const IndividualBlogPage = () => {
  const navigate = useNavigate();
  const { id = 0 } = useParams();

  const onClickBack = () => {
    navigate(-1);
  };

  const blog = blogs[+id - 1];
  console.log(blog)

  return (
    <BasePage pageTitle='Entrada Blog'>
      <Publication {...blog} className='contenido-entrada-blog' />
      <button type='button' onClick={onClickBack} className='btn'>
        Volver
      </button>
    </BasePage>
  );
};

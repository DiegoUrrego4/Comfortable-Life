import { ReactElement } from 'react';

interface Props {
  children?: ReactElement | ReactElement[];
  pageTitle: string;
}

export const BasePage = ({ children, pageTitle }: Props) => {
  return (
    <main className='contenido-principal contenedor'>
      <h2 className='text-center'>{pageTitle}</h2>
      {children}
    </main>
  );
};

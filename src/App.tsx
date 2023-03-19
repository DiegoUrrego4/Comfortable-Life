import { BrowserRouter } from 'react-router-dom';
import { AboutUs, Categories, Footer, Header } from './components';
import { OurProducts } from './components/OurProducts';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import {
  AboutUsPage,
  BlogPage,
  ContactPage,
  GalleryPage,
  HomePage,
  StorePage,
} from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='store' element={<StorePage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

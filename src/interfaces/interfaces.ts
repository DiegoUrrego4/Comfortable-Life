interface Image {
  id: string;
  altTitle: string;
  img: string;
}

export interface CategoryCardProps extends Image {
  categoryName: string;
}

export interface ProductCardProps extends Image {
  productName: string;
  productDescription: string;
  productPrice: string;
}

export interface FooterProps {
  id: string;
  title: string;
  items: string[];
}

export interface BlogProps {
  id: number;
  altTitle: string;
  img: string;
  blogTitle: string;
  date: string;
  author: string;
  blogDescription: string;
  hasButton?: boolean;
  className?: string;
}

export interface GalleryProps extends Image {

}

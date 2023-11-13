import React, { useState, useEffect } from 'react';
import Image from 'next/image'

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className='backgroundColor: red'>
      <h1 className='text-xl font-bold text-red-600 sm:text-3xl text-center max-w-md mx-auto mt-7'>Productos</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Todas las categorias</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyas</option>
        <option value="men's clothing">Ropa de Hombre</option>
        <option value="women's clothing">Ropa de Mujer</option>
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Categoría: {product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
            <Image src={product.image} alt={product.title} width={200} height={200} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

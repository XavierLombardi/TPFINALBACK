import { useEffect, useState } from 'react';
import { searchProducts } from '../services/productService';

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
}

export default function ProductList({ query }: { query: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;          // muestra todos si prefieres
    setLoading(true);
    searchProducts(query)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p>Cargando...</p>;
  if (!products.length) return <p>No hay resultados</p>;

  return (
    <ul className="space-y-2">
      {products.map(p => (
        <li key={p._id} className="border p-2 rounded">
          <strong>{p.name}</strong> · ${p.price} · {p.category}
        </li>
      ))}
    </ul>
  );
}

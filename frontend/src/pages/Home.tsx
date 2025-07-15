import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

export default function Home() {
  const [query, setQuery] = useState('');
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <SearchBar onSearch={setQuery} />
      {query && <ProductList query={query} />}
    </main>
  );
}

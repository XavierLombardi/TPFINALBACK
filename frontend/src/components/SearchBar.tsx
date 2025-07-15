import { useState } from 'react';

interface Props {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [term, setTerm] = useState('');

  return (
    <form
      className="flex gap-2 mb-4"
      onSubmit={e => {
        e.preventDefault();
        onSearch(term.trim());
      }}
    >
      <input
        type="text"
        placeholder="Buscar producto..."
        className="border rounded px-3 py-1 flex-1"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 rounded">Buscar</button>
    </form>
  );
}

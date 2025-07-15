const API = import.meta.env.VITE_API_URL;

export const searchProducts = async (query: string) => {
  const res = await fetch(`${API}/products/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Error fetching products');
  return res.json();
};

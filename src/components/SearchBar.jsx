export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex w-full max-w-md gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border rounded-lg outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

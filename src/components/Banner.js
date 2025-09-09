export default function Banner() {
  return (
    <div className="relative h-[80vh] text-white">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://image.tmdb.org/t/p/original/7AJkrXDDyWaOqHRRYupsyNPGNWI.jpg"
        alt="Banner Background"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute top-1/3 left-8">
        <h1 className="text-5xl font-bold mb-4">Stranger Things</h1>
        <p className="max-w-lg mb-6">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

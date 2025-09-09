export default function Row({ title, movies }) {
  return (
    <div className="text-white px-6 my-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>

      {/* Center Row */}
      <div className="flex justify-center">
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide max-w-5xl">
          {movies.map((movie, index) => (
            <div key={index} className="relative flex-shrink-0 w-40">
              {/* Poster */}
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-60 object-cover rounded hover:scale-105 transition-transform duration-300"
              />
              {/* Number Overlay */}
              <span className="absolute bottom-2 left-2 text-4xl font-bold text-white drop-shadow-lg">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

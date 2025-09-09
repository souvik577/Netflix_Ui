
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function App() {
  const trendingMovies = [
    { name: "Wednesday", image: "/images/download1.jpeg" },
    { name: "The Great Indian Kapil Show", image: "/images/download2.jpeg" },
    { name: "Kingdom", image: "/images/download3.jpeg" },
    { name: "Raid 2", image: "/images/download4.jpg" },
    { name: "Maareesan", image: "/images/download5.jpeg" },
    { name: "Another Movie", image: "https://m.media-amazon.com/images/M/MV5BMGMwMzFiZjAtNTVhZi00YTIwLWEzNTAtNzg0Nzg4ZWQ2OGYyXkEyXkFqcGc@._V1_.jpg" },
  ];

  return (
    
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Row title="Trending Now" movies={trendingMovies} />
      <Features />
      <FAQ />
      <Footer />
    </div>
    
  );
}

export default App;

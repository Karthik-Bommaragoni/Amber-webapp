import "./Hero.css";

function Hero({ setSearch }) {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1>Home away from home</h1>
        <p>Find your perfect student accommodation</p>

        <div className="search-bar">
          <input
            placeholder="Search city..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
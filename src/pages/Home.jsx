import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Card from "../components/Card";
import Footer from "../components/Footer";
import staysData from "../data/stays";

function Home() {
  const [search, setSearch] = useState("");
  const [stays] = useState(staysData);

  // 🔍 filter logic
  const filteredStays = stays.filter((stay) =>
    stay.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* pass search */}
      <Hero setSearch={setSearch} />

      <Stats />

      <div className="grid">
       {filteredStays.map((stay) => (
    <Card
      key={stay.id}
      title={stay.title}
      price={stay.price}
      image={stay.image}  
    />
    ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;


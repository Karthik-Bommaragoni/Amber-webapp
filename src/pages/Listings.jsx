import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Listings() {
  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Listings</h2>
      <div className="grid">
        <Card title="Berlin Stay" price="$180/week" />
        <Card title="Paris Room" price="$220/week" />
      </div>
    </>
  );
}

export default Listings;
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Showcase from "./components/showcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Showcase />
        <Footer />
      </div>
    </div>
  );
}

export default App;

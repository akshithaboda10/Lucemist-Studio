import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
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

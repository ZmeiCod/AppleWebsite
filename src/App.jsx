import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preveiw from "./components/Preveiw";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />
      <Preveiw />
      {/* <Highlights /> */}
      {/* <Model /> */}
      {/* <Features />
      <HowItWorks /> */}
      {/* <Footer /> */}
    </main>
  );
}
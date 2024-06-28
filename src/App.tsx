import react from "react";
import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <main className="text-[#FEF7EE]">
      <Banner />
      <div className="xl:w-[1000px] w-5/6 bg-[#1B1D1F] mx-auto z-10 rounded-xl mt-[-140px] relative py-[70px] flex flex-col items-center">
        <Hero />
        <Products />
      </div>
    </main>
  );
}

export default App;

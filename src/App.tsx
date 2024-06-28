import react from "react";
import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <main className="text-[#afa18f]">
      <Banner />
      <div className="xl:w-[1150px] w-5/6 m bg-[#1B1D1F] mx-auto z-10 rounded-xl mt-[-150px] relative py-[50px] flex flex-col items-center">
        <Hero />
        <Products />
      </div>
    </main>
  );
}

export default App;

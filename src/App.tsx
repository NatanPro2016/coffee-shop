import react, { Suspense, useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import Products from "./components/Products";
import Preloader from "./components/Preloader";

function App() {
  const [selected, setSlected] = useState("all");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Use `document.readyState` to check if the document is already fully loaded
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Attach the load event listener
      window.addEventListener("load", handleLoad);
    }

    // Clean up the event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <main className="text-[#FEF7EE]">
      {loading && <Preloader />} 
      <Suspense fallback={<Preloader />}>
        <Banner />
        <div className="xl:w-[1000px] w-5/6 bg-[#1B1D1F] mx-auto z-10 rounded-xl mt-[-140px] relative py-[70px] flex flex-col items-center">
          <Hero setSelected={setSlected} selected={selected} />
          <Products selected={selected} />
        </div>
      </Suspense>
    </main>
  );
}

export default App;

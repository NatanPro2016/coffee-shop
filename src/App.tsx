import react, { Suspense, useEffect, useState } from "react";
import { Banner } from "./components/Banner";
import { Hero } from "./components/Hero";
import Products from "./components/Products";
import Preloader from "./components/Preloader";

function App() {
  const [selected, setSlected] = useState("all");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleImagesLoad = () => {
      // Select all images in the document
      const images = Array.from(document.images);
      const promises = images.map((image) => {
        // If the image is already loaded, resolve immediately
        if (image.complete) return Promise.resolve();

        // Otherwise, create a promise that resolves when the image loads
        return new Promise<void>((resolve) => {
          image.onload = () => resolve();
          image.onerror = () => resolve(); // resolve even if there's an error
        });
      });

      // Wait for all images to load
      Promise.all(promises).then(() => {
        setLoading(false);
      });
    };

    // Use `document.readyState` for checking if images are already loaded
    if (document.readyState === "complete") {
      handleImagesLoad();
    } else {
      window.addEventListener("load", handleImagesLoad);
    }

    // Clean up the event listener
    return () => window.removeEventListener("load", handleImagesLoad);
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

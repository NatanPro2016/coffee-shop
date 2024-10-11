import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {});
  return (
    <div className="fixed h-screen w-full flex items-center justify-center z-50 bg-[#111315]">
      <div className="cup">
        <span className="steam"></span>
        <span className="steam"></span>
        <span className="steam"></span>
        <div className="cup-handle"></div>
      </div>
    </div>
  );
};

export default Preloader;

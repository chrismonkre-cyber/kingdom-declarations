import { useState, useEffect } from "react";

export default function PageWrapper({ images, children, overlay = "rgba(0,0,0,0.25)" }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const bgImage = isMobile ? images.mobile : images.desktop;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative z-10 pb-24 md:pb-8">
        {children}
      </div>
    </div>
  );
}
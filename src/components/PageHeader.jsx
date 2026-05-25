export default function PageHeader({ title }) {
  const LOGO_URL = "https://media.base44.com/images/public/6a14b4612922ae0aa777f0ce/214e1a5c8_icon-512.png";

  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8">
      <img
        src={LOGO_URL}
        alt="Kingdom Mandate Ministry Logo"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
      />
      <h1
        className="text-3xl md:text-5xl font-black text-center drop-shadow-lg"
        style={{ color: "#d4a843", textShadow: "0 2px 16px rgba(212,168,67,0.5), 0 4px 8px rgba(0,0,0,0.8)" }}
      >
        {title}
      </h1>
    </div>
  );
}
export default function KCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-amber-500/35 p-5 md:p-6 backdrop-blur-md shadow-xl shadow-amber-900/20 ${className}`}
      style={{ background: "rgba(50, 8, 18, 0.72)" }}
    >
      {children}
    </div>
  );
}
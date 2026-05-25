export default function KCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-amber-500/30 p-5 md:p-6 backdrop-blur-md shadow-xl shadow-amber-900/20 ${className}`}
      style={{ background: "rgba(60, 10, 20, 0.82)" }}
    >
      {children}
    </div>
  );
}
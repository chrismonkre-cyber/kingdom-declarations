import { useState, useEffect } from "react";
import { Download, Smartphone } from "lucide-react";
import KCard from "./KCard";

export default function InstallApp() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setInstalled(true));
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
  };

  const steps = [
    "Open this app in your browser (Chrome, Safari, Edge, etc.).",
    "Tap your browser menu (the ⋮ or share icon).",
    'Choose "Add to Home Screen" or "Install App."',
    "Open it anytime like a normal app — no app store needed.",
  ];

  return (
    <KCard className="space-y-4">
      <div className="flex items-center gap-3 mb-1">
        <Smartphone className="w-6 h-6 text-amber-400 flex-shrink-0" />
        <h3 className="font-black text-lg" style={{ color: "#f0c040", textShadow: "0 1px 8px rgba(212,168,67,0.4)" }}>
          Install This Free Kingdom App
        </h3>
      </div>

      <p className="text-amber-100/90 text-sm leading-relaxed">
        You can install Kingdom Declarations on your phone, tablet, or computer without using an app store.
      </p>

      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-amber-100/90 leading-relaxed">
            <span
              className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-black text-black mt-0.5"
              style={{ background: "linear-gradient(135deg, #d4a843, #f5d076)" }}
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      {installed ? (
        <p className="text-green-400 font-semibold text-sm text-center">✅ App installed! Open it from your home screen.</p>
      ) : deferredPrompt ? (
        <button
          onClick={handleInstall}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-black shadow-lg transition-transform hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, #d4a843, #f5d076)" }}
        >
          <Download className="w-4 h-4" /> Install / Add to Home Screen
        </button>
      ) : (
        <div
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-amber-500/40 text-amber-200 text-sm font-semibold text-center"
          style={{ background: "rgba(212,168,67,0.08)" }}
        >
          <Download className="w-4 h-4 text-amber-400" />
          Follow the steps above to install on your device
        </div>
      )}
    </KCard>
  );
}
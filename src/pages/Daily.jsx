import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../data/images";
import { DAILY_DECLARATIONS } from "../data/declarations";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Daily() {
  const dayIndex = new Date().getDay(); // 0-6
  const [index, setIndex] = useState(dayIndex % DAILY_DECLARATIONS.length);
  const d = DAILY_DECLARATIONS[index];

  const prev = () => setIndex((i) => (i === 0 ? DAILY_DECLARATIONS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === DAILY_DECLARATIONS.length - 1 ? 0 : i + 1));

  return (
    <PageWrapper images={IMAGES.daily} overlay="rgba(0,0,0,0.10)">
      <div className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 pb-12">
        <PageHeader title="Daily Declaration" />
        <p className="text-amber-100/80 text-center text-sm mb-6">Rotate through 7 powerful declarations — or browse them all.</p>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={prev} className="p-2 rounded-full bg-black/50 border border-amber-500/30 text-amber-300 hover:bg-black/70 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-amber-200 font-bold text-sm">{index + 1} / {DAILY_DECLARATIONS.length}</span>
          <button onClick={next} className="p-2 rounded-full bg-black/50 border border-amber-500/30 text-amber-300 hover:bg-black/70 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <KCard className="space-y-5">
          <h2 className="text-2xl font-black" style={{ color: "#d4a843" }}>{d.title}</h2>

          <div>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">📖 {d.scripture}</p>
            <p className="text-amber-100/90 text-sm italic leading-relaxed">"{d.scriptureText}"</p>
          </div>

          <div>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Encouragement</p>
            <p className="text-amber-100/85 text-sm leading-relaxed">{d.encouragement}</p>
          </div>

          <div>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">🙏 Prayer</p>
            <p className="text-amber-100/85 text-sm leading-relaxed italic">{d.prayer}</p>
          </div>

          <div className="border border-amber-500/20 rounded-xl p-4" style={{ background: "rgba(212,168,67,0.08)" }}>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">🔥 Declaration</p>
            <p className="text-amber-100 font-semibold text-sm leading-relaxed">{d.declaration}</p>
          </div>

          <div>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">⚡ Action Step</p>
            <p className="text-amber-100/85 text-sm leading-relaxed">{d.actionStep}</p>
          </div>

          <div>
            <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">💭 Reflection</p>
            <p className="text-amber-100/85 text-sm leading-relaxed italic">{d.reflection}</p>
          </div>
        </KCard>
      </div>
    </PageWrapper>
  );
}
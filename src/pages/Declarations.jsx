import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../data/images";
import { DECLARATION_CATEGORIES } from "../data/declarations";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Declarations() {
  const [openId, setOpenId] = useState(null);

  return (
    <PageWrapper images={IMAGES.declarations} overlay="rgba(0,0,0,0.10)">
      <div className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 pb-12">
        <PageHeader title="Declaration Categories" />
        <p className="text-amber-200 text-center text-sm mb-8">Choose a category and declare God's Word with boldness.</p>

        <div className="space-y-3">
          {DECLARATION_CATEGORIES.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="w-full flex items-center justify-between rounded-xl border border-amber-500/30 px-5 py-4 backdrop-blur-md shadow-lg transition-all hover:border-amber-400/50"
                  style={{ background: "rgba(60, 10, 20, 0.82)" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-black text-base" style={{ color: "#d4a843" }}>{cat.title}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-amber-400" />}
                </button>

                {isOpen && (
                  <KCard className="mt-1 space-y-4 animate-in fade-in duration-200">
                    <div>
                      <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">📖 {cat.scripture}</p>
                      <p className="text-amber-100/90 text-sm italic">"{cat.scriptureText}"</p>
                    </div>

                    <p className="text-amber-100/85 text-sm leading-relaxed">{cat.encouragement}</p>

                    <div className="space-y-2">
                      <p className="text-amber-400 font-bold text-xs uppercase tracking-wider">🔥 Declarations</p>
                      {cat.declarations.map((dec, i) => (
                        <div
                          key={i}
                          className="border border-amber-500/15 rounded-lg p-3"
                          style={{ background: "rgba(212,168,67,0.06)" }}
                        >
                          <p className="text-amber-100 text-sm font-semibold leading-relaxed">{dec}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">🙏 Prayer</p>
                      <p className="text-amber-100/85 text-sm italic leading-relaxed">{cat.prayer}</p>
                    </div>

                    <div>
                      <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">⚡ Action Step</p>
                      <p className="text-amber-100/85 text-sm leading-relaxed">{cat.actionStep}</p>
                    </div>
                  </KCard>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
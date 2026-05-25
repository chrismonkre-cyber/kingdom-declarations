import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../data/images";
import { Flame, BookOpen, PenLine, Heart } from "lucide-react";

const SECTIONS = [
  { icon: "📖", title: "Speak the Word", text: "Your words carry power when they are rooted in Scripture. Open your mouth and declare what God has said." },
  { icon: "⚓", title: "Stand in Faith", text: "Faith is not passive — it stands. It holds the line. It refuses to move when the world says otherwise." },
  { icon: "🧠", title: "Renew Your Mind", text: "Romans 12:2 — Be transformed by the renewing of your mind. Replace lies with truth. Replace fear with faith." },
  { icon: "🔥", title: "Release Kingdom Fire", text: "When you speak the Word in faith, you release the fire of God — healing, breakthrough, provision, and power." },
];

export default function Home() {
  return (
    <PageWrapper images={IMAGES.home} overlay="rgba(0,0,0,0.20)">
      <div className="max-w-4xl mx-auto px-4 pt-16 md:pt-24 pb-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <PageHeader title="Kingdom Declarations" />
          <p className="text-amber-100 text-lg md:text-xl font-semibold mb-3 drop-shadow-md">
            Speak the Word. Stand in Faith. Release Kingdom Fire.
          </p>
          <p className="text-amber-100/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A Spirit-filled declaration companion to help you speak Scripture, stand on God's promises, and release faith-filled words over every area of life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-14">
          <Link
            to="/daily"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-black shadow-lg transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #d4a843, #f5d076)" }}
          >
            <Flame className="w-4 h-4" /> Start Today
          </Link>
          <Link
            to="/declarations"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-amber-200 border border-amber-500/40 bg-black/50 backdrop-blur-sm shadow-lg transition-transform hover:scale-105"
          >
            <BookOpen className="w-4 h-4" /> Categories
          </Link>
          <Link
            to="/journal"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-amber-200 border border-amber-500/40 bg-black/50 backdrop-blur-sm shadow-lg transition-transform hover:scale-105"
          >
            <PenLine className="w-4 h-4" /> Journal
          </Link>
          <a
            href="https://kingdommandateministry.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-amber-200 border border-amber-500/40 bg-black/50 backdrop-blur-sm shadow-lg transition-transform hover:scale-105"
          >
            <Heart className="w-4 h-4" /> Partner / Sow
          </a>
        </div>

        {/* Why Declarations Matter */}
        <KCard className="mb-8 text-center">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#d4a843" }}>Why Declarations Matter</h2>
          <p className="text-amber-100/90 text-sm leading-relaxed">
            Proverbs 18:21 says, "Death and life are in the power of the tongue." What you speak matters. 
            Declarations are not wishful thinking — they are the Word of God spoken in faith, releasing 
            His power, promises, and purpose over your life.
          </p>
        </KCard>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {SECTIONS.map((s) => (
            <KCard key={s.title}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="text-lg font-black mb-2" style={{ color: "#d4a843" }}>{s.title}</h3>
              <p className="text-amber-100/80 text-sm leading-relaxed">{s.text}</p>
            </KCard>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
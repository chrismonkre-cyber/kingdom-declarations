import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../data/images";
import { Save, Trash2 } from "lucide-react";

const FIELDS = [
  { key: "todayDeclaration", label: "Today's Declaration", placeholder: "What are you declaring today?" },
  { key: "speakingOver", label: "What I Am Speaking Over My Life", placeholder: "Write what you are speaking in faith..." },
  { key: "scriptureStanding", label: "What Scripture Am I Standing On?", placeholder: "e.g., Philippians 4:13..." },
  { key: "godRenewing", label: "What Is God Renewing in My Mind?", placeholder: "What is He transforming?" },
  { key: "breakthrough", label: "What Breakthrough Am I Believing For?", placeholder: "Name your breakthrough..." },
  { key: "notes", label: "Notes / Reflection", placeholder: "Write your reflections..." },
];

const STORAGE_KEY = "kingdom-declarations-journal";

function loadEntries() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [form, setForm] = useState({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleSave = () => {
    if (!Object.values(form).some((v) => v && v.trim())) return;
    const entry = { ...form, id: Date.now(), date: new Date().toLocaleDateString() };
    setEntries([entry, ...entries]);
    setForm({});
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <PageWrapper images={IMAGES.journal} overlay="rgba(0,0,0,0.25)">
      <div className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 pb-12">
        <PageHeader title="Declaration Journal" />
        <p className="text-amber-100/80 text-center text-sm mb-8">Write, save, and reflect on your declarations. Saved in your browser.</p>

        {/* Form */}
        <KCard className="space-y-4 mb-8">
          {FIELDS.map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">{label}</label>
              <textarea
                value={form[key] || ""}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                placeholder={placeholder}
                rows={2}
                className="w-full rounded-lg border border-amber-500/20 bg-black/30 text-amber-100 placeholder-amber-100/30 text-sm p-3 focus:outline-none focus:border-amber-400/50 resize-none"
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-black shadow-lg transition-transform hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #d4a843, #f5d076)" }}
          >
            <Save className="w-4 h-4" /> Save Entry
          </button>
        </KCard>

        {/* Entries */}
        {entries.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-black" style={{ color: "#d4a843" }}>Saved Entries</h2>
            {entries.map((entry) => (
              <KCard key={entry.id} className="space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-amber-400 text-xs font-bold">{entry.date}</p>
                  <button onClick={() => handleDelete(entry.id)} className="text-red-400/60 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {FIELDS.map(({ key, label }) =>
                  entry[key] ? (
                    <div key={key}>
                      <p className="text-amber-400/70 text-xs font-semibold">{label}</p>
                      <p className="text-amber-100/85 text-sm">{entry[key]}</p>
                    </div>
                  ) : null
                )}
              </KCard>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
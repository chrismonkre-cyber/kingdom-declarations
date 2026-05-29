import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import InstallApp from "../components/InstallApp";
import { IMAGES } from "../data/images";
import { RESOURCES } from "../data/declarations";
import { ExternalLink, Mail } from "lucide-react";

export default function Resources() {
  return (
    <PageWrapper images={IMAGES.resources} overlay="rgba(0,0,0,0.10)">
      <div className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 pb-12">
        <PageHeader title="Kingdom Resources" />
        <p className="text-amber-100/80 text-center text-sm mb-8">Connect with the Kingdom Mandate Ministry ecosystem.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer">
              <KCard className="hover:border-amber-400/50 transition-all group h-full">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-black text-base" style={{ color: "#d4a843" }}>{r.title}</h3>
                  <ExternalLink className="w-4 h-4 text-amber-400/50 group-hover:text-amber-300 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-amber-100/80 text-sm">{r.description}</p>
              </KCard>
            </a>
          ))}
        </div>

        {/* Contact */}
        <KCard className="text-center mb-4">
          <Mail className="w-6 h-6 text-amber-400 mx-auto mb-2" />
          <h3 className="font-black text-base mb-1" style={{ color: "#d4a843" }}>Contact</h3>
          <a
            href="mailto:kingdommm.chris@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-200 hover:text-amber-100 text-sm underline underline-offset-2 transition-colors"
          >
            kingdommm.chris@gmail.com
          </a>
        </KCard>

        {/* Partner */}
        <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="block mb-4">
          <KCard className="text-center hover:border-amber-400/50 transition-all">
            <h3 className="font-black text-base mb-1" style={{ color: "#d4a843" }}>❤️ Partner / Sow</h3>
            <p className="text-amber-100/90 text-sm">Support the ministry and help advance the Kingdom.</p>
          </KCard>
        </a>

        <InstallApp />
      </div>
    </PageWrapper>
  );
}
import PageWrapper from "../components/PageWrapper";
import KCard from "../components/KCard";
import PageHeader from "../components/PageHeader";
import InstallApp from "../components/InstallApp";
import { IMAGES } from "../data/images";
import { ExternalLink } from "lucide-react";

const LINKS = [
  { label: "Main Ministry Site", url: "https://kingdommandateministry.com" },
  { label: "The Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" },
  { label: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com" },
  { label: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com" },
  { label: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com" },
  { label: "Kingdom Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
  { label: "Kingdom Identity", url: "https://identity.kingdommandateministry.com" },
  { label: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { label: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { label: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { label: "Kingdom Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { label: "Kingdom Family Altar", url: "https://family.kingdommandateministry.com" },
  { label: "Kingdom Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { label: "Kingdom Freedom", url: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function About() {
  return (
    <PageWrapper images={IMAGES.resources} overlay="rgba(0,0,0,0.10)">
      <div className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 pb-12">
        <PageHeader title="About" />
        <p className="text-amber-100/80 text-center text-sm mb-8">Kingdom Mandate Ministry</p>

        <KCard className="space-y-5 mb-8">
          <p className="text-amber-100/90 text-sm leading-relaxed">
            <strong className="text-amber-300">Kingdom Declarations</strong> is a Kingdom Mandate Ministry resource created to help believers speak the Word, renew the mind, stand in faith, and declare God{"'"}s truth with boldness and power.
          </p>
          <div className="border-t border-amber-500/20 pt-4">
            <h3 className="font-black text-base mb-2" style={{ color: "#d4a843" }}>Our Mission</h3>
            <p className="text-amber-100/85 text-sm italic leading-relaxed">
              Kingdom Mandate Ministry exists to advance the Kingdom through The Holy Spirit, Healing {"&"} Power.
            </p>
          </div>
        </KCard>

        <KCard className="mb-6">
          <h3 className="font-black text-base mb-4" style={{ color: "#d4a843" }}>Kingdom Mandate Ministry Ecosystem</h3>
          <div className="space-y-2">
            {LINKS.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 rounded-lg border border-amber-500/15 hover:border-amber-400/40 transition-all group"
                style={{ background: "rgba(212,168,67,0.05)" }}
              >
                <span className="text-amber-100 text-sm font-semibold">{label}</span>
                <ExternalLink className="w-4 h-4 text-amber-400/40 group-hover:text-amber-300 transition-colors" />
              </a>
            ))}
          </div>
        </KCard>

        <InstallApp />
      </div>
    </PageWrapper>
  );
}
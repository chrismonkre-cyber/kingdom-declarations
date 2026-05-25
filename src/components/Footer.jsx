export default function Footer() {
  const links = [
    { label: "Main Site", url: "https://kingdommandateministry.com" },
    { label: "Bible Companion", url: "https://thebiblecompanion.online" },
    { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
    { label: "Fire Companion", url: "https://fire.kingdommandateministry.com" },
    { label: "Pathway", url: "https://pathway.kingdommandateministry.com" },
    { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
    { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
    { label: "Partner / Sow", url: "https://kingdommandateministry.com" },
  ];

  return (
    <footer className="bg-black/70 backdrop-blur-md border-t border-amber-500/20 py-6 px-4 text-center">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {links.map(({ label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300/80 hover:text-amber-200 text-xs font-medium transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
      <p className="text-amber-100/50 text-xs">
        © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
      </p>
    </footer>
  );
}
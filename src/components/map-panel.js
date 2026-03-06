export default function MapPanel() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between bg-sky-950 px-4 py-3 text-white">
        <h2 className="font-bold">
          Live Traffic Map -{" "}
          <span className="font-semibold text-white/80">Mogadishu</span>
        </h2>
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
          <span>📍</span>
          <span>7pm</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 px-4 py-3 text-sm">
        <LegendDot color="bg-red-600" label="Heavy Traffic" />
        <LegendDot color="bg-yellow-500" label="Moderate Traffic" />
        <LegendDot color="bg-green-600" label="Clear Road" />

        <div className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-slate-700 font-semibold">
          Best Route: 25 mins to KM4
        </div>
      </div>

      {/* “Map” placeholder (UI only) */}
      <div className="relative h-[440px] bg-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.35),rgba(0,0,0,0.05))]" />

        {/* Fake traffic roads */}
        <div className="absolute left-10 top-44 h-2 w-[80%] -rotate-12 rounded-full bg-red-600/80" />
        <div className="absolute left-24 top-56 h-2 w-[70%] rotate-[10deg] rounded-full bg-yellow-500/80" />
        <div className="absolute left-40 top-64 h-2 w-[60%] -rotate-6 rounded-full bg-green-600/80" />

        {/* Labels */}
        <Label x="34%" y="40%" text="Hodan" />
        <Label x="18%" y="55%" text="Waberi" />
        <Label x="70%" y="52%" text="Lido Beach" />
        <Label x="56%" y="80%" text="Airport" />
      </div>
    </section>
  );
}

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span className="font-semibold text-slate-700">{label}</span>
    </div>
  );
}

function Label({ x, y, text }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/70 px-2 py-1 text-xs font-bold text-slate-800 shadow"
      style={{ left: x, top: y }}
    >
      {text}
    </div>
  );
}

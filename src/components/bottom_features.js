export default function BottomFeatures() {
  const items = [
    {
      title: "Real-Time Alerts",
      desc: "Get live traffic updates from users.",
      icon: "⚠️",
    },
    {
      title: "Alternate Routes",
      desc: "Find the fastest detour options.",
      icon: "🗺️",
    },
    {
      title: "Traffic Statistics",
      desc: "View congestion trends and reports.",
      icon: "📊",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((x) => (
        <div
          key={x.title}
          className="rounded-xl bg-sky-950 p-5 text-white shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">{x.icon}</div>
            <div className="text-lg font-extrabold">{x.title}</div>
          </div>
          <p className="mt-2 text-white/80">{x.desc}</p>
        </div>
      ))}
    </div>
  );
}

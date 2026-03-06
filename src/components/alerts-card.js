const ALERTS = [
  {
    place: "Bakara Market",
    status: "Heavy Traffic",
    time: "5 mins ago",
    icon: "🚦",
    tone: "text-red-600",
  },
  {
    place: "Maka Al Mukarama Rd",
    status: "Road Blockage",
    time: "15 mins ago",
    icon: "⛔",
    tone: "text-orange-600",
  },
  {
    place: "Lido Beach Area",
    status: "Clear Roads",
    time: "20 mins ago",
    icon: "✅",
    tone: "text-green-600",
  },
];

export default function AlertsCard() {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="font-bold text-slate-800">Latest Alerts</h2>
      </div>

      <div className="p-3">
        <ul className="space-y-2">
          {ALERTS.map((a) => (
            <li
              key={a.place + a.status}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
            >
              <div className="text-xl">{a.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-800">
                  {a.place}: <span className={a.tone}>{a.status}</span>
                </div>
                <div className="text-xs text-slate-500">{a.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

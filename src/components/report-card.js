"use client";

import { useState } from "react";

const LOCATIONS = [
  "KM4 Junction",
  "Bakara Market",
  "Maka Al Mukarama Rd",
  "Lido Beach",
  "Airport",
];

export default function ReportCard() {
  const [location, setLocation] = useState("KM4 Junction");
  const [level, setLevel] = useState("Heavy");

  function onSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${location} — ${level}`);
  }

  const levelBtn = (name) => {
    const active = level === name;
    const base =
      "rounded-md border px-3 py-2 text-sm font-semibold transition active:scale-[0.99]";
    const inactive =
      "border-slate-300 bg-white text-slate-700 hover:bg-slate-50";

    const activeStyle =
      name === "Heavy"
        ? "border-red-700 bg-red-600 text-white"
        : name === "Moderate"
          ? "border-yellow-600 bg-yellow-500 text-slate-900"
          : "border-green-700 bg-green-600 text-white";

    return (
      <button
        type="button"
        onClick={() => setLevel(name)}
        className={`${base} ${active ? activeStyle : inactive}`}
      >
        {name}
      </button>
    );
  };

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="font-bold text-slate-800">Report Traffic Jam</h2>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 p-4">
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 bg-blue-900 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Traffic Level
          </label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {levelBtn("Heavy")}
            {levelBtn("Moderate")}
            {levelBtn("Clear")}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Upload Photo <span className="text-slate-500">(optional)</span>
          </label>
          <input
            type="file"
            className="mt-2 w-full rounded-md border border-slate-300 b-white px-3 py-2 text-sm"
          />
        </div>

        <button className="w-full rounded-md bg-yellow-500 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-400 active:scale-[0.99]">
          Submit Report
        </button>

        <p className="text-xs text-slate-500">
          Tip: Choose a location, select the level, and submit.
        </p>
      </form>
    </section>
  );
}

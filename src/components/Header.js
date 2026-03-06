export default function Header() {
  return (
    <header className="bg-gradient-to-t from-sky-950 to-sky-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-xl">
            🚗
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-wide sm:text-xl">
              MOGADISHU <span className="text-yellow-400">TRAFFIC</span>{" "}
              DETECTIVE
            </h1>
            <p className="text-sm text-white/75">
              Stay Ahead of the Jam in Mogadishu
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-yellow-400 active:scale-[0.99]">
            Report Traffic
          </button>
          <button className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/10 active:scale-[0.99]">
            Sign In
          </button>
        </div>
      </div>

      <div className="h-1 w-full bg-yellow-500" />
    </header>
  );
}

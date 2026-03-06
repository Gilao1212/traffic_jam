import Header from "../components/Header";
import ReportCard from "../components/report-card";
import MapPanel from "../components/map-panel";
import AlertsCard from "../components/alerts-card";
import BottomFeatures from "../components/bottom_features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <ReportCard />
            <AlertsCard />
          </div>

          <div className="lg:col-span-2">
            <MapPanel />
          </div>
        </div>

        <div className="mt-6">
          <BottomFeatures />
        </div>
      </main>
    </div>
  );
}

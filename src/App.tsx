import { DownloadApp } from "./components/landing/DownloadApp";
import { Footer } from "./components/landing/Footer";
import { GamesGrid } from "./components/landing/GamesGrid";
import { Hero } from "./components/landing/Hero";
import { HowItWorks } from "./components/landing/HowItWorks";
import { LatestResults } from "./components/landing/LatestResults";
import { Nav } from "./components/landing/Nav";
import { TrustBar } from "./components/landing/TrustBar";
import { WinCalculator } from "./components/landing/WinCalculator";
import { Winners } from "./components/landing/Winners";
import { InstallPrompt } from "./pwa/InstallPrompt";
import { UpdateToast } from "./pwa/UpdateToast";

export default function App() {
  return (
    <div className="overflow-x-clip bg-cloud">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <GamesGrid />
        <WinCalculator />
        <HowItWorks />
        <LatestResults />
        <DownloadApp />
        <Winners />
      </main>
      <Footer />
      <InstallPrompt />
      <UpdateToast />
    </div>
  );
}

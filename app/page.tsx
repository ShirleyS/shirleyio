import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhyAnthropic } from "@/components/WhyAnthropic";
import { Timeline } from "@/components/Timeline";
import { Entrepreneurial } from "@/components/Entrepreneurial";
import { Systems } from "@/components/Systems";
import { Closing } from "@/components/Closing";
import { Coda } from "@/components/Coda";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="grain relative min-h-dvh">
      <Nav />
      <Hero />
      <WhyAnthropic />
      <Closing />
      <Systems />
      <Timeline />
      <Entrepreneurial />
      <Coda />
      <Footer />
    </main>
  );
}

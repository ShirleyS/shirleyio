import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Why } from "@/components/Why";
import { Timeline } from "@/components/Timeline";
import { Systems } from "@/components/Systems";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="grain relative min-h-dvh">
      <Nav />
      <Hero />
      <Closing />
      <Timeline />
      <Why />
      <Systems />
      <Footer />
    </main>
  );
}

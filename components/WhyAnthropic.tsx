import { Section, Eyebrow } from "@/components/ui/Section";

export function WhyAnthropic() {
  return (
    <Section id="why" className="border-t border-[var(--color-line)]">
      <Eyebrow index="02" label="On the work" />

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h2 className="serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-normal leading-[1.08] tracking-[-0.018em] text-[var(--color-ink)]">
            What I keep being drawn to is the operational shape of the work.
          </h2>
          <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            On systems, ambiguity, and trustworthy AI
          </p>
        </div>

        <div className="prose-editorial md:col-span-8">
          <p>
            Most of my career has been spent at the layer where intent meets
            infrastructure. At Clearbit and Demandbase, that meant translating
            what marketing and sales leaders <em>thought</em> they wanted into
            data flows, integrations, and reporting systems that actually held
            up in production. The work I&rsquo;m proudest of was rarely the
            launch &mdash; it was the renewal, twelve months in, when the
            customer signed again because the system had actually delivered.
            We didn&rsquo;t just sell the dream. We proved it.
          </p>

          <p>
            That&rsquo;s also the part of AI I find most interesting. Not the
            demos, but the operational layer underneath: the prompts that hold
            up across edge cases, the human-review checkpoints that catch the
            five percent of outputs that need a second look, the eval loops
            that tell you whether last week&rsquo;s change actually moved the
            metric you care about. The LLM is the easy part. Making it{" "}
            <em>reliable</em> in someone else&rsquo;s workflow is the
            interesting part.
          </p>

          <p>
            That&rsquo;s the work I want to do next, and I&rsquo;d like to do
            it on infrastructure I already trust.
          </p>
        </div>
      </div>

      <style>{`
        .prose-editorial p {
          font-family: var(--font-serif);
          font-size: clamp(17px, 1.45vw, 19.5px);
          line-height: 1.62;
          letter-spacing: -0.005em;
          color: var(--color-ink-2);
          margin-bottom: 1.35em;
        }
        .prose-editorial p:last-child { margin-bottom: 0; }
        .prose-editorial em {
          font-style: italic;
          color: var(--color-ink);
        }
      `}</style>
    </Section>
  );
}

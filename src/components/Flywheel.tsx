import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow } from './primitives';
import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'We build the website',
    body: 'A fast, professional site — planned, designed, launched and hosted.',
  },
  {
    n: '02',
    title: 'It starts collecting data',
    body: 'Analytics and a chatbot capture how real customers actually behave.',
  },
  {
    n: '03',
    title: 'We automate the repetitive',
    body: 'The patterns in that data reveal what to hand off to AI.',
  },
  {
    n: '04',
    title: 'One dashboard, one view',
    body: 'Everything comes together in a single place instead of scattered tools.',
  },
];

export default function Flywheel() {
  return (
    <section className="grid-bg border-b border-line bg-paper-2 py-24 md:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>From complexity to clarity</Eyebrow>
          <h2 className="poster mt-6 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
            We bring everything <br className="hidden md:block" />
            together in one place.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className="relative flex flex-col bg-paper p-7"
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-sm font-bold text-blue">{s.n}</span>
                <span className="h-px flex-1 bg-line" />
                {i < STEPS.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-ink/30" />
                )}
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ink/60">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

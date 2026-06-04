import { Globe, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react';
import { Container, Eyebrow } from './primitives';
import Reveal from './Reveal';

const SERVICES = [
  {
    icon: Globe,
    title: 'Websites',
    body: 'Custom-built, fast and easy to manage — from first plan through to launch and hosting. Sites that look great and get results.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    body: 'We wire analytics and a chatbot into your site, then turn the data into plain-language insight: where customers come from and where they drop off.',
  },
  {
    icon: Sparkles,
    title: 'AI Automation',
    body: 'We find the repetitive work that eats your week and automate it with AI — so your time goes to customers, not busywork.',
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>How we help</Eyebrow>
              <h2 className="poster mt-6 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
                Three things.
                <br />
                One solution.
              </h2>
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-ink/60">
                Websites that convert. Data that tells you what to do next.
                Automation that gives you your time back. Together, not in
                separate silos.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-1">
              {SERVICES.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.08}
                  className="group flex items-start gap-5 bg-paper p-7 transition-colors hover:bg-paper-2"
                >
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-xl font-semibold text-ink">
                        {s.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-ink/25 transition-colors group-hover:text-blue" />
                    </div>
                    <p className="mt-2 font-body text-[15px] leading-relaxed text-ink/60">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

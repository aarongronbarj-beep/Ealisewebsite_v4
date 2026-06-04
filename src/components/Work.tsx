import { ArrowUpRight } from 'lucide-react';
import { Container, Eyebrow } from './primitives';
import Reveal from './Reveal';
import { IMG } from '../lib/assets';

const PROJECTS = [
  { name: 'KOTI Pizza', tag: 'Website', img: IMG.work[0] },
  { name: 'Helsinki Bikes', tag: 'Website & Analytics', img: IMG.work[1] },
  { name: 'Nordic Clean', tag: 'Website & Automation', img: IMG.work[2] },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-line bg-paper py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Recent work</Eyebrow>
            <h2 className="poster mt-6 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
              Built for businesses
              <br className="hidden md:block" /> across Finland.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-body text-sm text-ink/70 transition-colors hover:text-blue"
          >
            See all work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a href="#contact" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-paper-2">
                  <img
                    src={p.img}
                    alt={`${p.name}: ${p.tag}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {p.name}
                  </h3>
                  <span className="font-body text-sm text-ink/50">{p.tag}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

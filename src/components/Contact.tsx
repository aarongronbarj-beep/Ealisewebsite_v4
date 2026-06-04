import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Container, Eyebrow } from './primitives';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-blue py-28 md:py-36">
      {/* faint engineering grid on the cobalt field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow dark>Let's talk</Eyebrow>
              <h2 className="poster mt-6 text-[clamp(2.5rem,7vw,5rem)] text-white">
                Let's build something great together.
              </h2>
              <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-white/80">
                Book a free 15-minute call. We'll tell you exactly what your
                business needs — no commitment, no pressure.
              </p>
              <div className="mt-9">
                <a
                  href="mailto:hello@ealize.fi"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-white px-6 py-3.5 font-body text-sm font-medium text-blue transition-colors hover:bg-paper-2"
                >
                  Book a free call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1} className="flex flex-col gap-5 md:items-end md:text-right">
              <a
                href="mailto:hello@ealize.fi"
                className="inline-flex items-center gap-3 font-body text-white/90 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                hello@ealize.fi
              </a>
              <span className="inline-flex items-center gap-3 font-body text-white/90">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
                Helsinki, Finland
              </span>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

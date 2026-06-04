import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container, Button, Eyebrow } from './primitives';
import BlurLines from './BlurText';
import { reveal, useStatic } from '../lib/motion';
import { IMG } from '../lib/assets';

const POSTER = ['Websites.', 'Data.', 'Automation.', 'Growth.'];

export default function Hero() {
  const isStatic = useStatic();
  const fadeProps = (delay: number) => ({
    variants: reveal,
    initial: isStatic ? false : ('hidden' as const),
    animate: 'show' as const,
    transition: { delay: isStatic ? 0 : delay, duration: 0.6 },
  });
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Blue-noise signal field bleeding from the top-right.
          Generated Higgsfield asset, masked to fade into the white canvas. */}
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[58%] bg-cover bg-right-top bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${IMG.heroNoise})`,
          WebkitMaskImage: 'linear-gradient(to left, #000 50%, transparent 92%)',
          maskImage: 'linear-gradient(to left, #000 50%, transparent 92%)',
        }}
        aria-hidden
      />

      <Container className="relative">
        <div className="grid min-h-[640px] grid-cols-1 items-center gap-10 py-20 md:min-h-[760px] md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <motion.div {...fadeProps(0)}>
              <Eyebrow>Digital solutions for small businesses</Eyebrow>
            </motion.div>

            <h1 className="poster mt-7 text-[clamp(3rem,9vw,6.5rem)] text-ink">
              <BlurLines
                delay={0.15}
                lines={POSTER.map((w, i) => (
                  <span key={i}>{w}</span>
                ))}
              />
            </h1>

            <motion.p
              {...fadeProps(0.55)}
              className="mt-8 max-w-md font-body text-base leading-relaxed text-ink/65"
            >
              We build websites, turn data into insight, and automate the
              repetitive — so you can focus on what matters. Built in Helsinki,
              for businesses across Finland.
            </motion.p>

            <motion.div
              {...fadeProps(0.7)}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#contact">
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#services" variant="ghost">
                See all services
              </Button>
            </motion.div>
          </div>

          <div className="md:col-span-5" aria-hidden />
        </div>
      </Container>
    </section>
  );
}

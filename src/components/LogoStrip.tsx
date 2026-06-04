import { Container } from './primitives';

const LOGOS = ['Nordic Clean', 'KOTI Pizza', 'Helsinki Bikes', 'NOTKO', 'ARVO'];

export default function LogoStrip() {
  return (
    <div className="border-y border-line bg-paper">
      <Container className="flex flex-col items-start gap-6 py-8 md:flex-row md:items-center md:gap-12">
        <span className="eyebrow shrink-0 text-ink/40">
          Trusted by businesses in Finland
        </span>
        <div className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-4">
          {LOGOS.map((l) => (
            <span
              key={l}
              className="font-heading text-sm font-medium text-ink/55 transition-colors hover:text-ink"
            >
              {l}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}

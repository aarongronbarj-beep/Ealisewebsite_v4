import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useStatic, EASE } from '../lib/motion';

/** Stagger-reveals children lines with a blur-up + y-rise. Calm, Nordic. */
export default function BlurLines({
  lines,
  className = '',
  delay = 0,
  step = 0.09,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  step?: number;
}) {
  const isStatic = useStatic();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={isStatic ? false : { filter: 'blur(12px)', opacity: 0, y: '0.5em' }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: isStatic ? 0 : delay + i * step, duration: 0.7, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

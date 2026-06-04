import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useStatic, EASE } from '../lib/motion';

/** Calm on-scroll reveal (fade + y-rise). Respects reduced-motion / ?static. */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'span';
}) {
  const isStatic = useStatic();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={isStatic ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: isStatic ? 0 : delay, duration: 0.7, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

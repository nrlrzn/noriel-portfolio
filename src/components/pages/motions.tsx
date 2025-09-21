import { motion } from 'framer-motion';

type MotionProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
};

export function FadeInSection({
  children,
  direction = 'up',
  delay = 0,
}: MotionProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={variants}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

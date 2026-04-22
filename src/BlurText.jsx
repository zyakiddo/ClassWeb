import { motion } from 'framer-motion';

export default function BlurText({ text, className = "" }) {
  // Memecah kalimat menjadi kata-kata
  const words = text.split(' ');

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, transform: 'translateY(-10px)' }}
          animate={{ filter: 'blur(0px)', opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
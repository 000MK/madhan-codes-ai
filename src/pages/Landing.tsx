import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const floatingNodes = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 8,
}));

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Neural network background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          {floatingNodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="hsl(var(--primary))"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -20, 0] }}
              transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          {floatingNodes.slice(0, 10).map((node, i) => {
            const target = floatingNodes[(i + 3) % floatingNodes.length];
            return (
              <motion.line
                key={`l-${i}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 5, delay: node.delay, repeat: Infinity }}
              />
            );
          })}
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-mono text-primary tracking-wider uppercase">AI Engineer & Researcher</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Madhan
          <span className="text-gradient">kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          Building intelligent systems with reinforcement learning and transformers — turning research into real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-all"
          >
            Explore Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/portfolio#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium text-sm hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Capability pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Brain, label: "Reinforcement Learning" },
            { icon: Code2, label: "Full-Stack Dev" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-xs font-mono text-muted-foreground"
            >
              <Icon size={13} className="text-primary" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export default Landing;

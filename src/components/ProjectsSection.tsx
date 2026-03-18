import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Cpu, Monitor, Gamepad2, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Regime-Aware RL Trading System",
    icon: BarChart3,
    tags: ["PPO", "SAC", "TD3", "LSTM", "POMDP"],
    description: "Multi-agent reinforcement learning system that detects market regimes (bull, bear, sideways) and dynamically switches between specialized agents for optimal trading performance. Designed as a POMDP system for handling partial observability in financial markets.",
  },
  {
    title: "Transformer-Based DRL Trading",
    icon: Brain,
    tags: ["Transformer", "PPO", "PyTorch"],
    description: "Leverages transformer architecture for sequential feature extraction, integrated with a PPO agent to improve trading decisions through advanced sequence modeling of market data.",
  },
  {
    title: "DQN Stock Trading Agent",
    icon: Bot,
    tags: ["DQN", "PyTorch", "Gym"],
    description: "Custom trading environment and DQN agent built from scratch using PyTorch and OpenAI Gym for learning optimal stock trading strategies.",
  },
  {
    title: "AI + Edge Computing Research",
    icon: Cpu,
    tags: ["Graph RL", "Vehicular Networks", "Optimization"],
    description: "Graph-powered reinforcement learning for vehicular edge computing networks, focusing on task offloading optimization for intelligent transportation systems.",
  },
  {
    title: "Desktop Applications",
    icon: Monitor,
    tags: ["PyQt", "Flask", "Python"],
    description: "Built PyQt-based desktop applications with Flask backend integration for data management and visualization workflows.",
  },
  {
    title: "Unity Game — SDG 14",
    icon: Gamepad2,
    tags: ["Unity", "C#", "Game Dev"],
    description: "SDG 14: Life Below Water themed educational game built with Unity and C#, raising awareness about marine ecosystem conservation.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">04. PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/30 hover:glow-border transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-primary font-mono text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

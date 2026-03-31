import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">01. ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I'm a software engineer and AI researcher currently completing my M.S. in Computer 
              Science & Engineering at Yuan Ze University, Taiwan. My journey started with a B.Sc. in 
              Computer Science from India, where I built a strong foundation in web and backend development 
              — working on ERP systems, booking platforms, and desktop applications.
            </p>
            <p>
              Over time, I pivoted toward what truly excites me: <span className="text-foreground font-medium">artificial intelligence and reinforcement learning</span>. 
              Today, I design multi-agent trading systems, explore transformer-based decision-making models, 
              and research graph-powered RL. I'm driven by the challenge of building AI 
              systems that operate reliably in complex, real-world environments.
            </p>
            <p>
              Alongside my research, I work part-time as a Python software engineer at ITG Integrate System, 
              where I build backend infrastructure and data processing pipelines. This blend of industry 
              experience and academic research gives me a practical, results-oriented approach to AI engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

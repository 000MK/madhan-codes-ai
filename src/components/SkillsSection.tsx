import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "C#", "JavaScript", "PHP", "Node.js", "Angular", "Flutter", "R"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["PyTorch", "Gym", "Flask", "PyQt", "Unity (C#)", "Firebase"],
  },
  {
    title: "AI & Data",
    skills: ["Reinforcement Learning (DQN, PPO, SAC, TD3)", "Transformer Models", "Regime Detection", "Financial Markets"],
  },
  {
    title: "Other",
    skills: ["Database Management", "API Development", "Data Visualization", "Backend Architecture", "AWS", "MySQL", "SQLite", "PostgreSQL", "Git", "Linux"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">02. SKILLS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

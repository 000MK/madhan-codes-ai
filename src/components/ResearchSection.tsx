import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, GraduationCap } from "lucide-react";

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">05. RESEARCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Research & Education</h2>
        </motion.div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-gradient border border-border rounded-xl p-6 mb-8 hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-mono text-primary text-xs tracking-wider mb-1">IEEE PAPER (IN PROGRESS)</p>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Trustworthiness Frameworks in AI-Driven Consumer Applications
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Researching reliable, explainable AI systems for financial applications. Focused on 
                building trust and transparency in AI-driven decision-making for consumer-facing products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap size={20} className="text-primary" />
              <p className="font-mono text-primary text-xs tracking-wider">MASTER'S DEGREE</p>
            </div>
            <h3 className="font-semibold text-foreground mb-1">M.S. Computer Science & Engineering</h3>
            <p className="text-muted-foreground text-sm">Yuan Ze University, Taiwan</p>
            <p className="text-muted-foreground text-xs mt-1">Final Semester</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap size={20} className="text-primary" />
              <p className="font-mono text-primary text-xs tracking-wider">BACHELOR'S DEGREE</p>
            </div>
            <h3 className="font-semibold text-foreground mb-1">B.Sc. Computer Science</h3>
            <p className="text-muted-foreground text-sm">AVS College of Arts and Science, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

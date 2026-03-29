import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">06. CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-10 max-w-lg">
            I'm currently looking for AI/ML internship and full-time opportunities. 
            Whether you have a question or just want to say hi — my inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="space-y-3">
                <a href="https://github.com/000MK" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Github size={18} /> github.com/000MK
                </a>
                <a href="https://linkedin.com/in/madhankumarsv/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Linkedin size={18} /> www.linkedin.com/in/madhankumarsv
                </a>
                <a href="mailto:madhankumarsv000@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail size={18} /> madhankumarsv000@gmail.com
                </a>
              </div>
            </div>


            <a href="/Madhankumar_Resume.pdf" download="Madhankumar_Resume.pdf" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:border-primary/50 transition-colors">
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

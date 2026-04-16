/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, ArrowUpRight, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Get in touch</span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none">LET'S <br />TALK.</h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground font-light max-w-md">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>

              <div className="space-y-4">
                <a href="mailto:adhitcl@gmail.com" className="group flex items-center gap-4 text-2xl font-serif hover:italic transition-all">
                  <Mail className="w-6 h-6 text-muted-foreground" />
                  adhitcl@gmail.com
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div className="flex gap-6 pt-8">
                <a href="https://www.linkedin.com/in/adhityacl/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-secondary/30 border border-white/5 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Email</label>
                <Input placeholder="john@example.com" className="bg-background/50 border-white/10 h-12 rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Subject</label>
              <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10 h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Message</label>
              <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 min-h-[150px] rounded-xl resize-none" />
            </div>
            <Button className="w-full py-6 rounded-xl text-lg font-medium group">
              Send Message
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-32 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-[11px] text-[#4CAF50] uppercase tracking-widest">
          <div className="availability-dot" />
          AVAILABLE FOR NEW PROJECTS &bull; Q3 2024
        </div>
        <div className="flex gap-8 text-[12px] uppercase tracking-[1px]">
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
          <a href="#" className="hover:text-foreground transition-colors">Read.cv</a>
        </div>
        <div className="text-[13px] text-muted-foreground">hello@adhityacl.com</div>
      </footer>
    </section>
  );
}

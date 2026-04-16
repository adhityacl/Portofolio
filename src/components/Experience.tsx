/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    role: "Digital Marketing Specialist",
    company: "YINSHAN TECHNOLOGY",
    period: "Dec 2022 — Present",
    description: "Driving digital marketing initiatives and growth strategies for international markets.",
  },
  {
    role: "Marketing",
    company: "LINE Plus Corp",
    period: "Apr 2019 — Aug 2022",
    description: "Managed in-app marketing events in ID region, analyzed campaign performance using SQL, and executed editorial planning across social media and paid ads.",
  },
  {
    role: "Strategy and New Business",
    company: "LINE Plus Corp",
    period: "Sep 2018 — Mar 2019",
    description: "Conducted research and gathered user feedback to deliver meaningful insights and improvement keys for product planners, specifically for LINE Lite.",
  },
  {
    role: "Social Media Officer & Content Manager",
    company: "Universitas Sebelas Maret",
    period: "Jan 2015 — Dec 2016",
    description: "Managed social media and web content for university websites, focusing on engagement and repository enhancement for university rankings.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground">Journey</span>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-serif font-normal leading-none tracking-tight">EXPERIENCE</h2>
            <p className="text-muted-foreground text-lg font-normal max-w-md leading-relaxed">
              A timeline of my professional growth and the companies I've helped build.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-normal group-hover:italic transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-[11px] uppercase tracking-[1px]">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[12px] text-muted-foreground/60">{exp.period}</span>
                </div>
                <p className="text-[16px] text-muted-foreground font-normal leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
                <div className="mt-12 h-px bg-border w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

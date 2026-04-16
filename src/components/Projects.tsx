/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "LINE Lite Growth",
    description: "User research and feedback analysis to drive product improvements for the LINE Lite application.",
    tags: ["Research", "Product Strategy", "Insights"],
    image: "https://picsum.photos/seed/growth/800/600",
    link: "#",
    github: "#",
  },
  {
    title: "In-App Campaigns",
    description: "Data-driven marketing events and campaign performance analysis for regional markets.",
    tags: ["SQL", "Analytics", "Marketing"],
    image: "https://picsum.photos/seed/campaign/800/600",
    link: "#",
    github: "#",
  },
  {
    title: "Social Strategy",
    description: "Editorial planning and execution for multi-channel social media engagement.",
    tags: ["Content", "Social Media", "Paid Ads"],
    image: "https://picsum.photos/seed/social/800/600",
    link: "#",
    github: "#",
  },
  {
    title: "UGC Analysis",
    description: "Monitoring and extracting insights from user-generated content to improve platform operations.",
    tags: ["UGC", "Analysis", "Operations"],
    image: "https://picsum.photos/seed/ugc/800/600",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[1.5px] text-muted-foreground">Selected Works</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal">PROJECTS</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-muted-foreground text-lg font-normal leading-relaxed">
              A collection of digital products and experiments built with a focus on performance, accessibility, and visual storytelling.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prev}
                className="rounded-none border-border hover:bg-secondary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={next}
                className="rounded-none border-border hover:bg-secondary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] shrink-0"
              >
                <Card className="overflow-hidden bg-secondary border-border h-full group rounded-none flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 work-card-gradient opacity-60" />
                  </div>
                  <CardContent className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="title text-[13px] font-medium">{project.title}</div>
                      <div className="category text-[10px] text-muted-foreground uppercase tracking-[0.5px] line-clamp-2 leading-relaxed">
                        {project.description}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-none border-border text-[8px] uppercase tracking-tighter px-1 py-0 opacity-70">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

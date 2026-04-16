/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif italic tracking-tight">Adhitya C.L.</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[12px] uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.name}
          </a>
        ))}
        <div className="flex items-center gap-4 ml-4 border-l pl-4 border-border">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-8 h-8">
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/adhityacl/" target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="flex flex-col gap-8 mt-12">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Menu</span>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </Button>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif hover:italic transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4">
                <Github className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
                <Mail className="w-6 h-6" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}

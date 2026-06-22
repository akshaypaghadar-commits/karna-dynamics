import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Particles from "./Particles";
import Button from "./Button";
import { COMPANY } from "../data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:46px_46px] opacity-40" />
      <Particles />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-kgreen/10 blur-3xl" />
      <img
        src="/logo-mark-glyph.png" alt="" aria-hidden
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden w-[560px] -translate-y-1/2 select-none opacity-[0.07] lg:block"
      />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow">
            {COMPANY.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl xl:text-6xl"
          >
            <span className="metal-text">Building the future</span><br />
            through <span className="text-kgreen">robotics</span> &amp;<br />
            <span className="metal-text">intelligent machines</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 max-w-xl text-lg text-silver-dim">
            Virtual &amp; Augmented Reality, Robotics, Special Purpose Machinery, Industrial
            Automation and AI/ML — engineered, built and supported in-house.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-9 flex flex-wrap gap-4">
            <Button to="/products" size="lg">Explore products <ArrowRight size={18} /></Button>
            <Button to="/contact" size="lg" variant="outline"><Phone size={16} /> Contact us</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto hidden h-[420px] w-full max-w-md items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full bg-kgreen/10 blur-3xl" />
          <img src="/logo-mark-dark.png" alt="Karna Dynamics" className="relative w-72 animate-floaty rounded-3xl ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

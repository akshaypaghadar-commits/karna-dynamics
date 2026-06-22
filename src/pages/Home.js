import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { CardTitle, CardText } from "../components/Card";
import { CATEGORIES, STATS, PILLARS, EVENTS } from "../data";

export default function Home() {
  const upcoming = EVENTS.filter((e) => !e.past).slice(0, 3);
  return (
    <>
      <Hero />
      <Marquee />

      {/* Pillars */}
      <section className="container-x py-20">
        <SectionHeading eyebrow={"Agriculture \u00B7 Industry \u00B7 Robotics"} title="One company, three frontiers" subtitle="We engineer intelligent systems across the fields that shape tomorrow's economy." center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass-card h-full p-7 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-kgreen/10 text-kgreen"><Icon size={26} /></div>
                  <CardTitle>{p.title}</CardTitle>
                  <CardText>{p.text}</CardText>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-8">
        <div className="glass-card grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl font-bold text-kgreen sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-silver-dim">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product categories */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="Products" title="What we build" subtitle="Five technology verticals, engineered end to end." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link to={`/products/${c.slug}`} className="block">
                  <article className="glass-card group h-full overflow-hidden p-0">
                    <div className="relative h-44 overflow-hidden">
                      <img src={c.image} alt={c.name} className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-kgreen/15 text-kgreen backdrop-blur"><Icon size={22} /></div>
                    </div>
                    <div className="p-6">
                      <CardTitle>{c.name}</CardTitle>
                      <CardText>{c.summary}</CardText>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-kgreen">Explore <ArrowRight size={14} /></span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={0.3}>
            <div className="glass-card flex h-full min-h-[18rem] flex-col items-center justify-center p-6 text-center">
              <p className="font-display text-lg text-white">Need something custom?</p>
              <CardText>We design special purpose machines and robots around your exact problem.</CardText>
              <div className="mt-5"><Button to="/contact" size="md">Talk to us</Button></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events teaser */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Events" title="Where to find us" />
          <Link to="/events" className="hidden shrink-0 text-xs font-semibold uppercase tracking-wider text-kgreen hover:underline sm:inline">All events</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.07}>
              <article className="glass-card group h-full overflow-hidden p-0">
                <div className="relative h-40 overflow-hidden">
                  <img src={e.image} alt={e.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-kgreen">{new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · {e.location}</div>
                  <CardTitle className="mt-2">{e.title}</CardTitle>
                  <CardText>{e.description}</CardText>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <Reveal>
          <div className="glass-card relative overflow-hidden p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-kgreen/15 blur-3xl" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Let's build something <span className="text-kgreen">intelligent</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-silver-dim">Tell us your challenge — robotics, automation, VR/AR or AI. We scope it, engineer it and support it.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg">Start a project</Button>
              <Button to="/products" size="lg" variant="outline">See products</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

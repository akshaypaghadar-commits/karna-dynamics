import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Card, CardTitle, CardText } from "../components/Card";
import { COMPANY, PILLARS, STATS } from "../data";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Who we are" subtitle={COMPANY.description} />

      <section className="container-x py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Karna Dynamics engineering" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal><Card><CardTitle>Our mission</CardTitle><CardText>To make advanced robotics, automation and immersive technology practical and accessible — engineered reliably, supported locally and built to last.</CardText></Card></Reveal>
            <Reveal delay={0.1}><Card><CardTitle>Our vision</CardTitle><CardText>A future where intelligent machines do the dangerous, repetitive and precise work, while people focus on what humans do best.</CardText></Card></Reveal>
            <Reveal delay={0.2}><Card><CardTitle>How we work</CardTitle><CardText>Every system is engineered in-house, end to end: mechanical, electronics, firmware, software and support — one accountable team.</CardText></Card></Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="glass-card p-6 text-center">
                <div className="font-display text-3xl font-bold text-kgreen">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-silver-dim">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <SectionHeading eyebrow="Our focus" title="Agriculture, Industry & Robotics" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full">
                  <Icon className="text-kgreen" size={26} />
                  <CardTitle className="mt-4">{p.title}</CardTitle>
                  <CardText>{p.text}</CardText>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}

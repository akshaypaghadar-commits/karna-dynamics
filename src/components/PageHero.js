import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12">
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:46px_46px] opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-kgreen/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 font-display text-4xl font-black sm:text-5xl"><span className="metal-text">{title}</span></h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-silver-dim">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        <span className="metal-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-silver-dim">{subtitle}</p>}
    </Reveal>
  );
}

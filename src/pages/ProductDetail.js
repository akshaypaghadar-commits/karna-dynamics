import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { CardTitle, CardText } from "../components/Card";
import { DETAILS, ROBOTICS_CHILDREN } from "../data";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const d = DETAILS[slug];
  if (!d) return <NotFound />;

  const Icon = d.icon;
  const isRoboticsParent = slug === "robotics";

  return (
    <>
      <PageHero eyebrow={d.parent ? "Robotics Platform" : "Product"} title={d.name} subtitle={d.tagline} />

      <article className="container-x pb-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wider text-silver-dim">
          <Link to="/products" className="hover:text-kgreen">Products</Link>
          {d.parent && (<><ChevronRight size={14} /><Link to={`/products/${d.parent}`} className="hover:text-kgreen">{DETAILS[d.parent].name}</Link></>)}
          <ChevronRight size={14} /><span className="text-silver">{d.name}</span>
        </div>

        {/* Hero image + overview */}
        <Reveal>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 sm:h-96">
            <img src={d.image} alt={d.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kgreen/15 text-kgreen backdrop-blur"><Icon size={24} /></div>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl prose-dim">
          <span className="eyebrow">Overview</span>
          {d.overview.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>

        {/* Robotics children grid */}
        {isRoboticsParent && (
          <section className="mt-16">
            <h2 className="font-display text-2xl text-white">Our robotics platforms</h2>
            <p className="mt-2 text-silver-dim">Six distinct robots — click any to explore in full.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ROBOTICS_CHILDREN.map((cs, i) => {
                const c = DETAILS[cs];
                const CIcon = c.icon;
                return (
                  <Reveal key={cs} delay={i * 0.05}>
                    <Link to={`/products/${cs}`} className="block h-full">
                      <div className="glass-card group h-full overflow-hidden p-0">
                        <div className="relative h-40 overflow-hidden">
                          <img src={c.image} alt={c.name} className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                          <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-kgreen/15 text-kgreen backdrop-blur"><CIcon size={20} /></div>
                        </div>
                        <div className="p-5">
                          <CardTitle className="text-base">{c.name}</CardTitle>
                          <CardText>{c.tagline}</CardText>
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-kgreen">View <ArrowRight size={13} /></span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* Features */}
        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl text-white">Key features</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {d.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-silver">
                  <Check size={16} className="mt-0.5 shrink-0 text-kgreen" /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl text-white">How it works</h2>
            <div className="mt-6 space-y-4">
              {d.howItWorks.map((s, i) => (
                <div key={s.title} className="glass-card flex gap-4 p-5">
                  <span className="font-display text-2xl font-bold text-white/15">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-base text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-silver-dim">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Applications */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-white">Applications</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.applications.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <div className="glass-card flex items-center gap-3 p-5 text-sm text-silver">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-kgreen shadow-glow" /> {a}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Specs */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-white">Technical specifications</h2>
          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody>
                {d.specs.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-white/[0.02]" : ""}>
                    <th className="w-1/3 p-4 font-medium text-silver-dim">{k}</th>
                    <td className="p-4 text-silver">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="glass-card relative overflow-hidden p-8 text-center md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-kgreen/15 blur-3xl" />
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Interested in the {d.name}?</h2>
            <p className="mx-auto mt-3 max-w-xl text-silver-dim">Request a demo, a quote or a technical discussion with our engineering team.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg">Request a demo</Button>
              <Button to="/products" size="lg" variant="outline"><ArrowLeft size={16} /> All products</Button>
            </div>
          </div>
        </Reveal>
      </article>
    </>
  );
}

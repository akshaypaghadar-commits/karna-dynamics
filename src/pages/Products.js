import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CardTitle, CardText } from "../components/Card";
import { CATEGORIES, DETAILS, ROBOTICS_CHILDREN } from "../data";

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title="Our technology verticals" subtitle="Five areas of deep engineering — explore each for full detail, capabilities and specifications." />

      <section className="container-x py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link to={`/products/${c.slug}`} className="block h-full">
                  <article className="glass-card group h-full overflow-hidden p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img src={c.image} alt={c.name} className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-kgreen/15 text-kgreen backdrop-blur"><Icon size={22} /></div>
                    </div>
                    <div className="p-6">
                      <CardTitle>{c.name}</CardTitle>
                      <CardText>{c.summary}</CardText>
                      {c.isParent && (
                        <p className="mt-3 text-xs text-silver-dim">Includes {ROBOTICS_CHILDREN.length} robot platforms</p>
                      )}
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-kgreen">Explore <ArrowRight size={14} /></span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Robotics quick links */}
        <Reveal className="mt-14">
          <h2 className="font-display text-lg text-white">Robotics platforms</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {ROBOTICS_CHILDREN.map((slug) => (
              <Link key={slug} to={`/products/${slug}`} className="glass-card px-5 py-3 text-sm text-silver transition hover:text-white">
                {DETAILS[slug].name}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

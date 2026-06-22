import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Badge } from "../components/Badge";
import { CardTitle, CardText } from "../components/Card";
import { EVENTS, API_URL } from "../data";

export default function Events() {
  const [events, setEvents] = useState(EVENTS);

  // Demonstrates the frontend calling the backend; falls back to local data.
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/events`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => { if (active && Array.isArray(data) && data.length) setEvents(data); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <>
      <PageHero eyebrow="Events" title="Workshops, expos & demos" subtitle="Meet us in person or online — see our robots and automation live." />

      <section className="container-x py-12">
        <h2 className="font-display text-lg text-white">Upcoming</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => <EventCard key={e.title} e={e} delay={i * 0.07} />)}
        </div>

        {past.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-lg text-white">Past</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {past.map((e, i) => <EventCard key={e.title} e={e} delay={i * 0.07} past />)}
            </div>
          </>
        )}
      </section>
    </>
  );
}

function EventCard({ e, delay, past }) {
  return (
    <Reveal delay={delay}>
      <article className={`glass-card group h-full overflow-hidden p-0 ${past ? "opacity-80" : ""}`}>
        <div className="relative h-44 overflow-hidden">
          <img src={e.image} alt={e.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
          <div className="absolute left-4 top-4"><Badge>{e.type}</Badge></div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-silver-dim">
            <span className="flex items-center gap-1"><Calendar size={13} className="text-kgreen" /> {new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><MapPin size={13} className="text-kgreen" /> {e.location}</span>
          </div>
          <CardTitle className="mt-3">{e.title}</CardTitle>
          <CardText>{e.description}</CardText>
        </div>
      </article>
    </Reveal>
  );
}

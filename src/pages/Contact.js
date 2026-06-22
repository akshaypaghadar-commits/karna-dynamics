import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import { COMPANY, API_URL, WHATSAPP } from "../data";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-silver-dim/60 outline-none transition focus:border-kgreen";

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's talk" subtitle="Send a message, call, or reach us on WhatsApp. We respond fast." />

      <section className="container-x py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" placeholder="Name" required className={inputCls} />
              <input name="email" type="email" placeholder="Email" required className={inputCls} />
            </div>
            <input name="subject" placeholder="Subject" className={inputCls} />
            <textarea name="message" rows={6} placeholder="How can we help?" required className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver-dim/60 outline-none transition focus:border-kgreen" />
            <Button size="lg" className="w-full">{status === "sending" ? "Sending..." : "Send message"}</Button>
            {status === "ok" && <p className="text-sm text-kgreen">Thanks — your message has been sent.</p>}
            {status === "error" && <p className="text-sm text-red-400">Could not send. Make sure the backend is running, then try again.</p>}
          </form>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={`mailto:${COMPANY.email}`} className="glass-card flex flex-col items-center gap-2 p-5 text-center hover:border-kgreen/40">
                <Mail className="text-kgreen" /> <span className="text-xs text-silver-dim">Email</span>
              </a>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="glass-card flex flex-col items-center gap-2 p-5 text-center hover:border-kgreen/40">
                <Phone className="text-kgreen" /> <span className="text-xs text-silver-dim">Call</span>
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="glass-card flex flex-col items-center gap-2 p-5 text-center hover:border-kgreen/40">
                <MessageCircle className="text-kgreen" /> <span className="text-xs text-silver-dim">WhatsApp</span>
              </a>
            </div>
            <div className="glass-card flex items-start gap-2 p-5 text-sm text-silver-dim">
              <MapPin className="mt-0.5 shrink-0 text-kgreen" size={18} /> {COMPANY.address}
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe title="Map" width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.mapsQuery)}&z=14&output=embed`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

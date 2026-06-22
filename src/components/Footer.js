import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV } from "../data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink-soft/60">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/logo-wordmark.png" alt="Karna Dynamics — Agriculture, Industry, Robotics" className="h-auto w-60" />
          <p className="mt-5 max-w-md text-sm text-silver-dim">{COMPANY.description}</p>
        </div>
        <div>
          <h4 className="font-display text-sm text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-silver-dim">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-kgreen">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-silver-dim">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-kgreen" /> {COMPANY.address}</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-kgreen" /> {COMPANY.email}</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-kgreen" /> {COMPANY.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-x text-center text-xs text-silver-dim">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

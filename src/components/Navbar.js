import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV } from "../data";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass py-2" : "py-4"}`}>
      <nav className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Karna Dynamics home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-lg ring-1 ring-white/10 sm:h-11 sm:w-11">
            <img src="/logo-mark-dark.png" alt="Karna Dynamics" className="h-full w-full object-cover" />
          </span>
          <img src="/logo-name.png" alt="KARNA DYNAMICS" className="h-7 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    isActive ? "text-kgreen" : "text-silver-dim hover:text-white"
                  }`
                }
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" size="md">Get in touch</Button>
        </div>

        <button className="text-silver lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-2 overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    className={({ isActive }) =>
                      `block py-2 text-sm uppercase tracking-wider ${isActive ? "text-kgreen" : "text-silver"}`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const ITEMS = ["VR & AR", "Robotics", "Swarm AI", "Underwater ROV", "NDT", "PLC & SCADA", "Computer Vision", "Edge AI", "ROS2", "Special Purpose Machines", "Smart Energy", "Industry 4.0"];

export default function Marquee() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-soft/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-sm uppercase tracking-widest text-silver-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-kgreen" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-kgreen/30 bg-kgreen/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kgreen ${className}`}>
      {children}
    </span>
  );
}

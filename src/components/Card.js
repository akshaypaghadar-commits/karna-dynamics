export function Card({ children, className = "" }) {
  return <div className={`glass-card p-6 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = "" }) {
  return <h3 className={`font-display text-lg text-white ${className}`}>{children}</h3>;
}
export function CardText({ children, className = "" }) {
  return <p className={`mt-2 text-sm leading-relaxed text-silver-dim ${className}`}>{children}</p>;
}

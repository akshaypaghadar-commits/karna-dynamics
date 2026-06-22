import { Link } from "react-router-dom";

const styles = {
  primary: "bg-kgreen text-ink hover:bg-kgreen-glow shadow-glow",
  outline: "border border-silver/40 text-silver hover:border-kgreen hover:text-white",
  dark: "bg-white/5 text-silver border border-white/10 hover:border-kgreen/50"
};
const sizes = { md: "h-11 px-6 text-sm", lg: "h-12 px-8 text-sm" };

export default function Button({ children, variant = "primary", size = "md", to, href, className = "", ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 ${styles[variant]} ${sizes[size]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

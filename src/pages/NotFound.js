import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-6xl font-black text-kgreen">404</p>
      <h1 className="mt-4 font-display text-2xl text-white">Page not found</h1>
      <p className="mt-2 text-silver-dim">The page you are looking for does not exist.</p>
      <div className="mt-8"><Button to="/">Back home</Button></div>
    </section>
  );
}

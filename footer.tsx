import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-16 text-snow/50 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-snow/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 text-snow">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember text-sm font-black text-ink">
                AP
              </span>
              <span className="text-sm font-extrabold uppercase tracking-label">
                Aussie Pro Auto Home
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Practical products for Australian garages, driveways, homes and
              backyards.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-kicker font-bold uppercase tracking-label md:col-span-3 md:col-start-7">
            <Link to="/shop" className="transition-colors hover:text-ember">
              Shop all
            </Link>
            <Link to="/maison" className="transition-colors hover:text-ember">
              Our standard
            </Link>
            <Link
              to="/"
              hash="how-it-works"
              className="transition-colors hover:text-ember"
            >
              How it works
            </Link>
          </div>
          <div className="text-kicker font-bold uppercase tracking-label md:col-span-3">
            <p>Australian stock</p>
            <p className="mt-3">GST-inclusive pricing</p>
            <p className="mt-3">© 2026 Aussie Pro</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

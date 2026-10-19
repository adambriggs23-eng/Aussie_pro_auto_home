import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const HASH_LINKS = [
  { label: "How it works", hash: "how-it-works" },
  { label: "Why Aussie Pro", hash: "why-aussie-pro" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { count, openCart } = useCart();
  const solid = scrolled || pathname !== "/" || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const word = solid ? "text-ink" : "text-snow";
  const muted = solid ? "text-ink/70" : "text-snow/75";
  const line = solid ? "border-ink/30 text-ink" : "border-snow/50 text-snow";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-ink/10 bg-sand/90 py-3 backdrop-blur-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <Link to="/" className={`flex items-center gap-3 ${word}`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember text-sm font-black text-ink">
            AP
          </span>
          <span
            className={`hidden text-sm font-extrabold uppercase tracking-label sm:inline ${word}`}
          >
            Aussie Pro
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {HASH_LINKS.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              hashScrollIntoView={{ behavior: "smooth", block: "start" }}
              className={`text-kicker font-bold uppercase tracking-label transition-colors hover:text-ember ${muted}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/maison"
            className={`text-kicker font-bold uppercase tracking-label transition-colors hover:text-ember ${muted}`}
          >
            Our standard
          </Link>
          <Link
            to="/shop"
            className={`text-kicker font-bold uppercase tracking-label transition-colors hover:text-ember ${muted}`}
          >
            Shop all
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className={`group relative min-h-11 border px-4 text-kicker font-bold uppercase tracking-label transition-all hover:border-ember hover:bg-ember hover:text-ink ${line}`}
          >
            Cart
            {count > 0 && (
              <span className="ml-2 text-ember group-hover:text-ink">{count}</span>
            )}
          </button>
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center border lg:hidden ${line}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-sand px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {HASH_LINKS.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                className="border-b border-ink/10 py-4 text-kicker font-bold uppercase tracking-label text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/maison"
              className="border-b border-ink/10 py-4 text-kicker font-bold uppercase tracking-label text-ink"
            >
              Our standard
            </Link>
            <Link
              to="/shop"
              className="py-4 text-kicker font-bold uppercase tracking-label text-ink"
            >
              Shop all
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

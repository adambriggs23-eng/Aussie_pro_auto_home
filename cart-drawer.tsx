import { useEffect, useState } from "react";
import { formatAud, getProduct } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

const FREE_DELIVERY = 150;

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, remove, subtotal, count } =
    useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    if (!isOpen) setCheckedOut(false);
  }, [isOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const remaining = Math.max(0, FREE_DELIVERY - subtotal);

  return (
    <div
      className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-sand shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/15 px-7 py-6">
          <p className="text-kicker font-black uppercase tracking-label text-ink">
            Your cart{count > 0 ? ` · ${count}` : ""}
          </p>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center text-2xl text-ink/60 hover:text-ember"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-2xl font-black text-ink">Ready when you are.</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/55">
                Add a product to start your next garage, car care or home
                project.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-ink/15">
              {lines.map((line) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                return (
                  <li key={line.slug} className="flex gap-4 py-6">
                    <div className="h-24 w-20 shrink-0 overflow-hidden bg-ink">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-3">
                        <p className="font-black leading-tight text-ink">
                          {product.name}
                        </p>
                        <p className="font-black text-ink">
                          {formatAud(product.price * line.qty)}
                        </p>
                      </div>
                      <p className="mt-1 text-micro font-bold uppercase tracking-label text-ink/45">
                        {product.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="flex items-center border border-ink/20">
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="h-11 w-11 hover:bg-ink/5"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-bold">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.slug, line.qty + 1)}
                            className="h-11 w-11 hover:bg-ink/5"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(line.slug)}
                          className="text-micro font-bold uppercase tracking-label text-ink/45 hover:text-ember"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/15 px-7 py-6">
            <div className="flex items-center justify-between">
              <p className="text-kicker font-black uppercase tracking-label text-ink/60">
                Subtotal
              </p>
              <p className="text-2xl font-black text-ink">{formatAud(subtotal)}</p>
            </div>
            <p className="mt-2 text-micro uppercase tracking-label text-ink/45">
              {remaining === 0
                ? "Free delivery unlocked · GST included"
                : `$${remaining.toFixed(2)} away from free delivery · GST included`}
            </p>
            {checkedOut ? (
              <p className="mt-5 border border-ember bg-ember/20 py-4 text-center text-sm font-bold text-ink">
                Demo checkout ready — no payment was taken.
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setCheckedOut(true)}
                className="mt-5 min-h-12 w-full bg-ink py-4 text-kicker font-black uppercase tracking-label text-snow hover:bg-ember hover:text-ink"
              >
                Proceed to checkout
              </button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}

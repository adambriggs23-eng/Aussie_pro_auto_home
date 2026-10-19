import { Link } from "@tanstack/react-router";
import { products } from "@/lib/catalog";

const STEPS = [
  ["01", "Pick the job", "Find the category that matches what you need to get done."],
  ["02", "Choose the gear", "Clear specs, honest pricing and stock you can trust."],
  ["03", "Get on with it", "Local dispatch and practical support after the order."],
] as const;

const MARQUEE =
  "Australian stock · practical gear · no inflated middleman markups · free delivery over $150 AUD · ";

export function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-ink text-snow">
        <div className="hero-wash absolute inset-0" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pt-32 pb-28 md:grid-cols-12 md:px-10">
          <div className="relative z-10 md:col-span-6">
            <p className="hero-rise hero-d1 mb-7 flex items-center gap-3 text-kicker font-bold uppercase tracking-kicker text-ember">
              <span className="h-px w-9 bg-ember" />
              Australian-ready gear
            </p>
            <h1 className="hero-rise hero-d2 max-w-2xl text-6xl font-black tracking-display leading-display md:text-8xl">
              Make hard work feel <span className="text-ember">easy.</span>
            </h1>
            <p className="hero-rise hero-d3 mt-8 max-w-lg text-base leading-relaxed text-snow/70 md:text-lg">
              Tools that earn their place in the garage, on the driveway and
              around the home. Built for Australian weekends, backed by local
              fulfilment.
            </p>
            <div className="hero-rise hero-d4 mt-10 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex min-h-12 items-center bg-ember px-6 py-4 text-kicker font-black uppercase tracking-label text-ink transition-transform hover:-translate-y-1"
              >
                Shop the essentials
              </a>
              <a
                href="#stores"
                className="inline-flex min-h-12 items-center border border-snow/30 px-6 py-4 text-kicker font-black uppercase tracking-label text-snow transition-colors hover:border-ember hover:text-ember"
              >
                Choose your store
              </a>
            </div>
            <div className="hero-rise hero-d5 mt-12 grid max-w-lg grid-cols-3 border-t border-snow/15 pt-5 text-micro font-bold uppercase tracking-label text-snow/55">
              <span>Local dispatch</span>
              <span>GST included</span>
              <span>30-day returns</span>
            </div>
          </div>
          <div className="hero-reveal relative h-[52vh] overflow-hidden md:col-span-6 md:h-[70vh]">
            <img
              src="https://images.pexels.com/photos/6873098/pexels-photo-6873098.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Professional cleaning a car with a pressure washer in a garage"
              className="h-full w-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 border-l-2 border-ember pl-4 text-xs font-bold uppercase tracking-label text-snow">
              Workshop-tested
              <br />
              <span className="font-normal text-snow/60">
                for the jobs that matter
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-snow/10 py-3 text-micro font-bold uppercase tracking-kicker text-snow/45">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span>{MARQUEE}</span>
            <span>{MARQUEE}</span>
          </div>
        </div>
      </section>

      <section id="why-aussie-pro" className="bg-sand px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-16">
          <p className="text-kicker font-black uppercase tracking-kicker text-ember md:col-span-3">
            01 / The Aussie Pro difference
          </p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-4xl text-4xl font-black leading-title tracking-title text-ink md:text-6xl">
              Skip the generic marketplace maze. Buy gear with a job to do.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/65">
              We curate the high-use products that make a visible difference:
              clean the car, organise the garage, improve the backyard. Clear
              pricing, realistic delivery windows and product advice that
              respects your time.
            </p>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-sand px-5 pb-24 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-ink/15 pb-5">
            <div>
              <p className="text-kicker font-black uppercase tracking-kicker text-ember">
                02 / The essentials
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-title text-ink md:text-6xl">
                Start with the right kit.
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden text-kicker font-black uppercase tracking-label text-ink transition-colors hover:text-ember sm:block"
            >
              View all products →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((product, index) => (
              <Link
                key={product.slug}
                to="/product/$slug"
                params={{ slug: product.slug }}
                className="group relative overflow-hidden bg-ink"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-6 pt-24 text-snow">
                  <p className="text-micro font-bold uppercase tracking-kicker text-ember">
                    0{index + 1} / {product.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-title">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-snow/65">{product.short}</p>
                  <span className="mt-5 inline-block border-b border-ember pb-1 text-micro font-black uppercase tracking-label">
                    Explore product
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-ink px-5 py-24 text-snow md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-kicker font-black uppercase tracking-kicker text-ember">
                03 / How it works
              </p>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-title md:text-6xl">
                Less hunting.
                <br />
                More doing.
              </h2>
            </div>
            <div className="grid gap-px bg-snow/15 md:col-span-8 md:grid-cols-3">
              {STEPS.map(([num, title, copy]) => (
                <div key={num} className="bg-ink p-7">
                  <p className="text-3xl font-black text-ember">{num}</p>
                  <h3 className="mt-12 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-snow/55">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stores" className="bg-ember px-5 py-24 text-ink md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-kicker font-black uppercase tracking-kicker">
                One brand. Two ways to buy.
              </p>
              <h2 className="mt-5 text-5xl font-black tracking-display leading-display md:text-8xl">
                Your weekend starts here.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-ink/70">
                From vehicle care to outdoor living, Aussie Pro keeps the
                catalog focused on useful products and fast local fulfilment.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="inline-flex min-h-12 items-center bg-ink px-5 py-4 text-kicker font-black uppercase tracking-label text-snow transition-transform hover:-translate-y-1"
                >
                  Shop Aussie Pro Auto
                </Link>
                <Link
                  to="/maison"
                  className="inline-flex min-h-12 items-center border border-ink/40 px-5 py-4 text-kicker font-black uppercase tracking-label transition-colors hover:bg-ink hover:text-snow"
                >
                  Explore Pro Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

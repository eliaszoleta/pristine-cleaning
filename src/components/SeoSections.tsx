import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Droplets, MapPin, Sparkles } from "lucide-react";
import { AREA_PAGES, SERVICE_PAGES, type Faq } from "../lib/seo-content";
import { QuoteRequestForm } from "./QuoteRequestForm";

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="w-3 h-3" />}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-primary underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group bg-card border border-border rounded-2xl p-5 shadow-xs open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
              <h3 className="text-base">{faq.question}</h3>
              <ChevronRight className="w-4 h-4 shrink-0 text-accent transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServiceLinkGrid({
  title = "Our Cleaning Services",
  excludeSlug,
  cityLabel,
}: {
  title?: string;
  excludeSlug?: string;
  cityLabel?: string;
}) {
  const pages = SERVICE_PAGES.filter((page) => page.slug !== excludeSlug);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to="/services/$slug"
            params={{ slug: page.slug }}
            className="group flex items-center justify-between gap-3 bg-card border border-border rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-accent/60 transition-all"
          >
            <span className="font-semibold text-foreground group-hover:text-primary">
              {page.name}
              {cityLabel ? ` in ${cityLabel}` : ""}
            </span>
            <ArrowRight className="w-4 h-4 shrink-0 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AreaLinkList({
  title = "Areas We Serve",
  slugs,
}: {
  title?: string;
  slugs?: string[];
}) {
  const pages = slugs
    ? slugs.map((slug) => AREA_PAGES.find((p) => p.slug === slug)).filter((p) => p !== undefined)
    : AREA_PAGES;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {pages.map((page) => (
          <Link
            key={page.slug}
            to="/service-areas/$slug"
            params={{ slug: page.slug }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4 text-accent" />
            {page.city}, {page.state}
          </Link>
        ))}
        <Link
          to="/service-areas"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          All service areas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function QuoteSection({
  heading = "Request Your Free Cleaning Quote",
  defaultService,
  defaultCity,
}: {
  heading?: string;
  defaultService?: string;
  defaultCity?: string;
}) {
  return (
    <section id="quote-form" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Quote · 20% Off Your First Clean</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{heading}</h2>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Tell us about your home or rental and we'll reach out ASAP with next steps.
        </p>
      </div>
      <QuoteRequestForm defaultService={defaultService} defaultCity={defaultCity} />
    </section>
  );
}

/** Service photo, or a branded icon panel when the service doesn't have a photo yet. */
export function ServiceImage({
  src,
  alt,
  label,
  className = "",
  loading = "lazy",
}: {
  src?: string | undefined;
  alt: string;
  label: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  if (src) {
    return <img src={src} alt={alt} className={className} loading={loading} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary via-primary to-black text-primary-foreground ${className}`}
    >
      <Droplets className="w-12 h-12 text-accent" />
      <span className="px-6 text-center text-sm font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

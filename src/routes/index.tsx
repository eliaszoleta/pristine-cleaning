import type * as React from "react";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS, servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { FaqSection, ServiceImage } from "../components/SeoSections";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PRISTINE_INFO, CORE_SPECIALTIES, TESTIMONIALS } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { WorkShowcaseGallery } from "../components/WorkShowcaseGallery";
import {
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle,
  Phone,
  Clock,
  ArrowRight,
  MapPin,
  Home,
  Hammer,
  KeyRound,
  Truck,
  Droplets,
  Grid3x3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Mesquite House Cleaning & Maid Services | Pristine Cleaning",
      description:
        "Mesquite NV house cleaning & maid service: Airbnb turnovers, deep cleans, move-out, tile & grout and pressure washing. Also serving St. George. 20% off.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: Index,
});

export function Index() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-8 pb-0 md:pt-14 md:pb-4">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-6">
              <p className="flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-primary">
                <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                Locally Owned in Mesquite, NV · 20% Off Your First Clean
              </p>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Mesquite House Cleaning &amp; Maid Services
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-primary">
                  A cleaner home starts right here. ✨
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
                Let <strong className="text-foreground font-semibold">Pristine Cleaning</strong>{" "}
                take care of the mess so you can enjoy more of what matters. From standard house
                cleaning and maid service to Short-Term Rental / Airbnb turnovers, deep residential
                cleaning, move-in/move-out cleaning, tile &amp; grout cleaning, exterior pressure
                washing and now post-construction clean-ups, we handle the tough jobs so you don’t
                have to!
              </p>

              <p className="flex items-start gap-2 text-sm text-muted-foreground max-w-xl leading-relaxed">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Serving Mesquite and nearby communities including{" "}
                  {AREA_PAGES.filter((area) => area.slug !== "mesquite-nv")
                    .map((area) => (
                      <Link
                        key={area.slug}
                        to="/service-areas/$slug"
                        params={{ slug: area.slug }}
                        className="font-medium text-foreground hover:text-primary underline-offset-4 hover:underline"
                      >
                        {area.city}
                      </Link>
                    ))
                    .reduce<React.ReactNode[]>(
                      (acc, link, i) => (i === 0 ? [link] : [...acc, ", ", link]),
                      [],
                    )}
                  , Beaver Dam and the Virgin River Valley.
                </span>
              </p>

              {/* Core Offer Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <KeyRound className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Airbnb Turnovers</div>
                  <div className="text-[11px] text-muted-foreground">5-Star Guest Ready</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <Home className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Standard & Deep</div>
                  <div className="text-[11px] text-muted-foreground">Residential Cleaning</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <Truck className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Move-In / Out</div>
                  <div className="text-[11px] text-muted-foreground">Like-New Condition</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <Grid3x3 className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Tile & Grout</div>
                  <div className="text-[11px] text-muted-foreground">Deep Scrubbed Clean</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <Droplets className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Pressure Washing</div>
                  <div className="text-[11px] text-muted-foreground">Exterior Maintenance</div>
                </div>
                <div className="p-3 bg-card rounded-xl border border-border shadow-xs">
                  <Hammer className="w-4 h-4 text-accent mb-1.5" />
                  <div className="text-xs font-bold text-foreground">Post-Construction</div>
                  <div className="text-[11px] text-accent font-semibold">Now Offering!</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-xs uppercase tracking-widest hover:bg-primary/95 transition-all shadow-md border border-accent/40 hover:scale-[1.02]"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </a>
                <a
                  href={`tel:${PRISTINE_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-foreground hover:bg-secondary/80 font-semibold rounded-full text-xs tracking-wider uppercase border border-border transition-all"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call {PRISTINE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent/30 aspect-4/3 group bg-black">
                <img
                  src="/images/services/house-cleaning-mesquite-nv.jpg"
                  alt="Spotless bright living space cleaned by Pristine Cleaning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl backdrop-blur-md bg-black/60 border border-white/20">
                  <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-white ml-1 text-[11px]">
                      Trusted in Mesquite & Surrounding Areas
                    </span>
                  </div>
                  <p className="text-xs text-white/95 font-medium leading-relaxed">
                    "We handle the tough cleaning jobs so you don’t have to."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-sliding Work Showcase Gallery with SEO Metadata */}
      <WorkShowcaseGallery />

      {/* Quote Request Section */}
      <section id="quote-section" className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Quote Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Request Your Free Cleaning Quote
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Tell us about your home or rental and we'll reach out ASAP with next steps.
          </p>
        </div>
        <QuoteRequestForm />
      </section>

      {/* 4 Core Specialties Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-border pb-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              What We Do Best
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Core Cleaning Specialties
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            <span>Learn More About All Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SPECIALTIES.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  label={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/95 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full border border-accent/40 shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link
                      to={servicePathForSpecialty(item.id)}
                      className="hover:underline underline-offset-4"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-primary font-medium">{item.summary}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60">
                  <ul className="space-y-1.5 text-xs text-muted-foreground mb-4">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link
                      to={servicePathForSpecialty(item.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-background hover:bg-secondary text-foreground text-xs font-semibold uppercase tracking-wider transition-colors border border-border"
                    >
                      <span>Learn More</span>
                    </Link>
                    <a
                      href="#quote-section"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-white text-foreground text-xs font-semibold uppercase tracking-wider transition-colors border border-border"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Pristine */}
      <section className="bg-secondary/60 py-16 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              We Handle The Tough Jobs So You Don’t Have To
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Serving Mesquite and surrounding areas with dependable, friendly, and thorough
              cleaning tailored to your home or rental property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Detail-Oriented Care</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                From baseboards to appliance interiors, we tackle the hidden grime and tough jobs so
                your home feels truly fresh and spotless.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <KeyRound className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Airbnb & Host Specialists</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reliable turnover schedules, guest linen staging, restocking, and immaculate spaces
                that protect your 5-star host rating.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Prompt & Reliable Service</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When you submit a quote request, we reach out ASAP. We arrive on time and take pride
                in leaving your space spotless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Happy Clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Hear From Homeowners & Hosts in Mesquite
            </h2>
          </div>

          <div
            className={
              TESTIMONIALS.length === 1
                ? "max-w-3xl mx-auto"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          >
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={idx}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-5 ${
                  // The first (featured) review spans the full row when there are several.
                  idx === 0 && TESTIMONIALS.length > 1 ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="space-y-4">
                  <div
                    className="flex items-center gap-1 text-accent"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {t.tags && (
                    <ul className="flex flex-wrap gap-2">
                      {t.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-[11px] font-medium text-white/90 px-2.5 py-0.5 rounded-full border border-accent/40 bg-accent/10"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <blockquote className="space-y-3 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                    {t.quote.map((paragraph, i) => (
                      <p key={i}>
                        {i === 0 && "“"}
                        {paragraph}
                        {i === t.quote.length - 1 && "”"}
                      </p>
                    ))}
                  </blockquote>
                </div>
                <figcaption className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-bold text-white text-sm">{t.author}</p>
                    <p className="text-primary-foreground/70">
                      {t.location}
                      {t.date && ` · ${t.date}`}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase font-semibold text-accent px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30">
                      {t.service}
                    </span>
                    {t.source && (
                      <span className="text-[10px] uppercase font-semibold text-white/80 px-2 py-0.5 rounded-full border border-white/20">
                        Review on {t.source}
                      </span>
                    )}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} />

      {/* Service Area Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-secondary via-card to-secondary p-8 sm:p-12 rounded-3xl border border-border shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-accent">
              <MapPin className="w-4 h-4" />
              <span>Service Area</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Proudly Serving Mesquite & Surrounding Areas
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We cover Mesquite and Bunkerville NV, St. George UT, Littlefield and Scenic AZ, and
              neighboring communities in the Virgin River Valley. Let us take care of the mess so
              you can enjoy more of what matters.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {AREA_PAGES.map((area) => (
                <Link
                  key={area.slug}
                  to="/service-areas/$slug"
                  params={{ slug: area.slug }}
                  className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground hover:border-accent hover:text-primary transition-colors"
                >
                  {area.city}, {area.state}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-widest rounded-full text-center hover:bg-primary/95 transition-all shadow-md border border-accent/40 hover:scale-[1.02]"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${PRISTINE_INFO.phoneRaw}`}
              className="px-6 py-4 bg-background text-foreground text-xs font-semibold uppercase tracking-widest rounded-full text-center border border-border hover:bg-secondary transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>{PRISTINE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

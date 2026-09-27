import { pageHead, breadcrumbJsonLd } from "../lib/seo";
import { AREA_PAGES } from "../lib/seo-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PRISTINE_INFO } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Pristine Cleaning | Free Cleaning Quote in Mesquite, NV",
      description:
        "Call or text (725) 225-2466 or request a free online quote. Pristine Cleaning serves Mesquite & Bunkerville NV, St. George UT, and Littlefield & Scenic AZ.",
      path: "/contact",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-accent/40 text-xs font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Connect With Our Team</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl mx-auto">
          We’re Here to Make Your Home Pristine
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Whether you need a short-term rental/Airbnb turnover, standard or deep residential
          cleaning, a move-in/move-out clean, exterior pressure washing, or a post-construction
          clean-up, we handle the tough jobs so you don't have to! Call or text for a free estimate.
        </p>
      </section>

      {/* Main Grid: Direct Info + Integrated Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Business Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Company & Contact Information</h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters & Mailing</h3>
                    <p className="text-muted-foreground">{PRISTINE_INFO.address}</p>
                    <p className="text-muted-foreground">{PRISTINE_INFO.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone / Text Dispatch</h3>
                    <a
                      href={`tel:${PRISTINE_INFO.phoneRaw}`}
                      className="text-primary hover:text-accent font-semibold transition-colors text-base"
                    >
                      {PRISTINE_INFO.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Direct line for quotes and schedule adjustments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Electronic Inquiries</h3>
                    <a
                      href={`mailto:${PRISTINE_INFO.email}`}
                      className="text-primary hover:text-accent font-medium transition-colors break-all"
                    >
                      {PRISTINE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Operating Schedule</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {PRISTINE_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <a
                  href={PRISTINE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-xs tracking-wider uppercase border border-border transition-colors"
                >
                  <span>Visit Our Facebook Community Page</span>
                </a>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-foreground">Service Footprint</h3>
              <p className="text-xs text-muted-foreground">
                We service properties across the Virgin River Valley and the Southern Utah corridor:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {AREA_PAGES.map((area) => (
                  <Link
                    key={area.slug}
                    to="/service-areas/$slug"
                    params={{ slug: area.slug }}
                    className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary hover:underline underline-offset-4"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>
                      {area.city}, {area.state}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="p-3 bg-secondary/80 rounded-xl border border-border/60 text-[11px] text-muted-foreground mt-2">
                Don't see your town? We also serve nearby communities across the Virgin River
                Valley. Contact us and we'll let you know if we can reach you.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}

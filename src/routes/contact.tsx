import { createFileRoute } from "@tanstack/react-router";
import { PRISTINE_INFO } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Service Area | Pristine Cleaning Mesquite NV" },
      {
        name: "description",
        content:
          "Contact Pristine Cleaning at (725) 225-2466 or book online. Serving Mesquite NV, Bunkerville NV, Saint George UT, and Littlefield AZ with white-glove cleaning.",
      },
      { property: "og:title", content: "Contact Pristine Cleaning | Mesquite NV & St. George UT" },
      {
        property: "og:description",
        content:
          "Get a quick quote or schedule luxury residential, turnover, or commercial cleaning in Mesquite NV. Located at 121 Jacaranda Way.",
      },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1790470415330648323/assets/f3c923f2-7d88-4948-b69e-d48fcd5918f9.png",
      },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1790470415330648323/assets/f3c923f2-7d88-4948-b69e-d48fcd5918f9.png",
      },
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
          Whether you need a short-term rental/Airbnb turnover, deep residential cleaning, routine
          interior/exterior maintenance, or a post-construction clean-up, we handle the tough jobs
          so you don't have to!
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
                {PRISTINE_INFO.serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-secondary/80 rounded-xl border border-border/60 text-[11px] text-muted-foreground mt-2">
                Need service outside standard boundaries? Contact us to discuss custom travel
                arrangements for luxury estates and commercial campuses.
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

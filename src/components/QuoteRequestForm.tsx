import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Clock, Sparkles, ArrowRight, Loader2, Tag } from "lucide-react";
import { PRISTINE_INFO } from "../lib/business-data";

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
  } = {},
) => {
  const { customFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  const body = new FormData();
  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

interface QuoteFormProps {
  defaultService?: string | undefined;
  defaultCity?: string | undefined;
}

export function QuoteRequestForm({
  defaultService = "Deep Residential Cleaning",
  defaultCity = "Mesquite",
}: QuoteFormProps) {
  const [service, setService] = useState(defaultService);
  const [propertySize, setPropertySize] = useState("2-3 Bedrooms (1,000 - 2,200 sq ft)");
  const [frequency, setFrequency] = useState("One-time Clean");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !phone) return;

    setIsSubmitting(true);

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "pristine-cleaning-quote-request",
      formData: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        city: city,
        calendar_notes: `Quote requested for ${service} (${propertySize}, ${frequency}) with 20% First-Time discount applied. Notes: ${
          notes || "None"
        }`,
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        city: "City / Location",
        calendar_notes: "Quote Request Summary",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_7e6657faf03544ae9b080c03415c1e25",
      locationId: "9NgRZju67InERv7bPaGY",
      projectId: "1790470415330648323",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
        source: "ai_studio",
        projectId: "1790470415330648323",
        formName: "Pristine Cleaning Quote Request",
      },
    };

    postTrackingEvent(trackingPayload, {
      customFields: {
        "9wyxYyO5eF0GdrlQ2vkT": { value: service, label: "Service Type" },
        elsySQeqFIAWikJE9CbV: { value: propertySize, label: "Property Size" },
        JJ9bglfrxP4m937ra5Pf: { value: frequency, label: "Cleaning Frequency" },
        "8gvMKxu2LUw7v73r3dNE": {
          value: notes || "No special requests specified",
          label: "Special Requests or Notes",
        },
      },
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl border border-accent/40 shadow-2xl text-center space-y-6 animate-in fade-in-50">
        <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider bg-accent/15 px-3 py-1 rounded-full">
            <Tag className="w-3.5 h-3.5" /> 20% First-Time Discount Claimed!
          </div>
          <h3 className="text-3xl font-bold text-foreground">Quote Request Received</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-foreground">{firstName}</span>. We've
            received your request for <span className="font-medium text-foreground">{service}</span>{" "}
            and we'll reach out ASAP to go over details and get you on the schedule!
          </p>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p>We typically reach out within 2 hours during normal business hours.</p>
          <p className="font-medium text-foreground">
            Need us right away? Call or text us directly at{" "}
            <a href={`tel:${PRISTINE_INFO.phoneRaw}`} className="text-primary underline font-bold">
              {PRISTINE_INFO.phone}
            </a>
            .
          </p>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-semibold tracking-wider uppercase text-muted-foreground hover:text-foreground underline pt-2"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border/80 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 sm:p-8 border-b border-accent/20 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Free Quote Request</span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            <Tag className="w-3.5 h-3.5" />
            <span>20% Off Your 1st Service</span>
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">A Cleaner Home Starts Here!</h3>
        <p className="text-primary-foreground/80 text-xs sm:text-sm">
          Let Pristine Cleaning take care of the mess so you can enjoy more of what matters. We'll
          reach out ASAP once you submit.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Cleaning details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Specialty / Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              <option value="Short-Term Rental / Airbnb Turnover">
                Short-Term Rental / Airbnb Turnover
              </option>
              <option value="Deep Residential Cleaning">Deep Residential Cleaning</option>
              <option value="Standard Residential Cleaning">Standard Residential Cleaning</option>
              <option value="Post-Construction Clean-ups">
                Post-Construction Clean-up (Now Offering!)
              </option>
              <option value="Move-In / Move-Out Clean">Move-In / Move-Out Clean</option>
              <option value="Exterior Maintenance / Pressure Washing">
                Exterior Maintenance / Pressure Washing
              </option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Home / Property Size
            </label>
            <select
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              <option value="Studio / 1 Bedroom (< 1,000 sq ft)">
                Studio / 1 Bed (&lt; 1,000 sq ft)
              </option>
              <option value="2-3 Bedrooms (1,000 - 2,200 sq ft)">
                2-3 Bedrooms (1,000 - 2,200 sq ft)
              </option>
              <option value="4+ Bedrooms (2,200 - 3,500 sq ft)">
                4+ Bedrooms (2,200 - 3,500 sq ft)
              </option>
              <option value="Large Residence / Estate (3,500+ sq ft)">
                Large Residence / Estate (3,500+ sq ft)
              </option>
              <option value="New Build / Remodel Construction Site">
                New Build / Remodel Construction Site
              </option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Schedule / Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              <option value="One-time Clean">One-time Clean</option>
              <option value="Recurring Weekly">Recurring Weekly</option>
              <option value="Recurring Bi-weekly">Recurring Bi-weekly</option>
              <option value="Recurring Monthly">Recurring Monthly</option>
              <option value="Per-Turnover (Airbnb / Host)">Per-Turnover (Airbnb / Host)</option>
            </select>
          </div>
        </div>

        {/* Contact details */}
        <div className="pt-2 border-t border-border/70 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Your Contact Information
            </span>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Privacy Protected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                required
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-1">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
              >
                <option value="Mesquite">Mesquite, NV</option>
                <option value="Bunkerville">Bunkerville, NV</option>
                <option value="Saint George">Saint George, UT</option>
                <option value="Littlefield">Littlefield, AZ</option>
                <option value="Surrounding Area">Surrounding Area</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              rows={2}
              placeholder="Tell us about the property or any special requests (e.g. post-construction specifics, turnover turnaround window, pets, dates)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:outline-hidden"
            />
          </div>
        </div>

        {/* Action button & guarantees */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" /> We Reach Out ASAP
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-primary">
              <Tag className="w-4 h-4 text-accent" /> 20% Off 1st Clean Applied
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm uppercase tracking-widest hover:bg-primary/95 transition-all shadow-lg flex items-center justify-center gap-2 border border-accent/40 hover:scale-[1.02] cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-accent" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

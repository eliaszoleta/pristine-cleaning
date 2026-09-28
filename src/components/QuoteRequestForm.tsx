import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Textarea that grows to fit its text (and its placeholder while empty), so nothing is cut off on
 * narrow phone screens. Re-measures when the text changes or the screen width changes.
 */
function AutoGrowTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const resize = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    let height = el.scrollHeight;
    if (!el.value && el.placeholder) {
      // Measure the placeholder by briefly putting it in as the value (never painted).
      el.value = el.placeholder;
      height = el.scrollHeight;
      el.value = "";
    }
    const border = el.offsetHeight - el.clientHeight;
    el.style.height = `${height + border}px`;
  }, []);
  useEffect(resize, [resize, props.value]);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);
  return <textarea ref={ref} {...props} />;
}
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

type Option = { value: string; label: string };

// The "size" and "frequency" questions depend on the service: bedrooms don't matter for
// tile & grout or pressure washing, so those services ask about the area instead.
const HOME_SIZE_OPTIONS: Option[] = [
  { value: "Studio / 1 Bedroom (< 1,000 sq ft)", label: "Studio / 1 Bed (< 1,000 sq ft)" },
  { value: "2-3 Bedrooms (1,000 - 2,200 sq ft)", label: "2-3 Bedrooms (1,000 - 2,200 sq ft)" },
  { value: "4+ Bedrooms (2,200 - 3,500 sq ft)", label: "4+ Bedrooms (2,200 - 3,500 sq ft)" },
  {
    value: "Large Residence / Estate (3,500+ sq ft)",
    label: "Large Residence / Estate (3,500+ sq ft)",
  },
  {
    value: "New Build / Remodel Construction Site",
    label: "New Build / Remodel Construction Site",
  },
];
const TILE_AREA_OPTIONS: Option[] = [
  { value: "Tile area: 1 shower or bathroom", label: "1 shower or bathroom" },
  { value: "Tile area: 2-3 showers or bathrooms", label: "2-3 showers or bathrooms" },
  { value: "Tile area: Kitchen floor or backsplash", label: "Kitchen floor or backsplash" },
  { value: "Tile area: Whole-home tile floors", label: "Whole-home tile floors" },
  { value: "Tile area: Multiple areas / not sure", label: "Multiple areas / not sure" },
];
const PRESSURE_WASH_AREA_OPTIONS: Option[] = [
  { value: "Pressure washing area: Patio or porch", label: "Patio or porch" },
  { value: "Pressure washing area: Walkways & entryway", label: "Walkways & entryway" },
  { value: "Pressure washing area: Patio + walkways", label: "Patio + walkways" },
  {
    value: "Pressure washing area: Multiple areas / not sure",
    label: "Multiple areas / not sure (add details in notes)",
  },
];
const CLEANING_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time Clean", label: "One-time Clean" },
  { value: "Recurring Weekly", label: "Recurring Weekly" },
  { value: "Recurring Bi-weekly", label: "Recurring Bi-weekly" },
  { value: "Recurring Monthly", label: "Recurring Monthly" },
  { value: "Per-Turnover (Airbnb / Host)", label: "Per-Turnover (Airbnb / Host)" },
];
const PROJECT_FREQUENCY_OPTIONS: Option[] = [
  { value: "One-time", label: "One-time" },
  { value: "Seasonal (every few months)", label: "Seasonal (every few months)" },
  { value: "Not sure yet", label: "Not sure yet" },
];

function sizeQuestion(service: string) {
  if (service === "Tile & Grout Cleaning")
    return { label: "Tile Area to Clean", options: TILE_AREA_OPTIONS, fallback: 0 };
  if (service === "Exterior Maintenance / Pressure Washing")
    return { label: "Area to Pressure Wash", options: PRESSURE_WASH_AREA_OPTIONS, fallback: 0 };
  return { label: "Home / Property Size", options: HOME_SIZE_OPTIONS, fallback: 1 };
}

function frequencyOptions(service: string) {
  return service === "Tile & Grout Cleaning" ||
    service === "Exterior Maintenance / Pressure Washing"
    ? PROJECT_FREQUENCY_OPTIONS
    : CLEANING_FREQUENCY_OPTIONS;
}

const defaultFrequency = (service: string) =>
  service === "Short-Term Rental / Airbnb Turnover"
    ? "Per-Turnover (Airbnb / Host)"
    : frequencyOptions(service)[0]!.value;

const defaultSize = (service: string) => {
  const q = sizeQuestion(service);
  return q.options[q.fallback]!.value;
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
  const [propertySize, setPropertySize] = useState(() => defaultSize(defaultService));
  const [frequency, setFrequency] = useState(() => defaultFrequency(defaultService));
  const size = sizeQuestion(service);
  const frequencies = frequencyOptions(service);

  // Switching services keeps the answers if they still apply, otherwise resets to that service's defaults.
  const changeService = (next: string) => {
    setService(next);
    if (!sizeQuestion(next).options.some((o) => o.value === propertySize)) {
      setPropertySize(defaultSize(next));
    }
    const nextFrequencies = frequencyOptions(next);
    if (!nextFrequencies.some((o) => o.value === frequency)) {
      setFrequency(defaultFrequency(next));
    }
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(defaultCity);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !phone || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    // Primary: send the lead to the GHL workflow (Inbound Webhook) via our own server route.
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          city,
          service,
          property_size: propertySize,
          frequency,
          notes,
          page_url: window.location.href,
          company_website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(`Quote request failed (${res.status})`);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setSubmitError(
        `Sorry, we couldn't send your request. Please try again or call/text us at ${PRISTINE_INFO.phone}.`,
      );
      return;
    }

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

    setIsSubmitting(false);
    setIsSubmitted(true);
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
        {/* Spam trap: hidden from people, often filled in by bots */}
        <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
          <label>
            Company website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>
        {/* Cleaning details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Specialty / Service
            </label>
            <select
              value={service}
              onChange={(e) => changeService(e.target.value)}
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
              <option value="Tile & Grout Cleaning">Tile & Grout Cleaning</option>
              <option value="Exterior Maintenance / Pressure Washing">
                Exterior Maintenance / Pressure Washing
              </option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {size.label}
            </label>
            <select
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent focus:outline-hidden"
            >
              {size.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
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
              {frequencies.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
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
            <AutoGrowTextarea
              rows={3}
              placeholder="Tell us about the property or any special requests (e.g. post-construction specifics, turnover turnaround window, pets, dates)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full resize-none overflow-hidden bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm leading-relaxed focus:ring-2 focus:ring-accent focus:outline-hidden"
            />
          </div>
        </div>

        {submitError && (
          <p
            role="alert"
            className="text-sm font-medium text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3"
          >
            {submitError}
          </p>
        )}

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

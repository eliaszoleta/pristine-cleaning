import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { SiteHeader, SiteFooter } from "../components/SiteNavigation";
import { PRISTINE_INFO } from "../lib/business-data";
import { AREA_PAGES, SERVICE_PAGES } from "../lib/seo-content";
import { BUSINESS_ID, DEFAULT_OG_IMAGE, WEBSITE_ID } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";

// Site-wide LocalBusiness data: tells Google who the business is, where it is, when it's open
// and which cities it serves. Keep it in sync with PRISTINE_INFO.
const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: PRISTINE_INFO.name,
  description:
    "Local cleaning company in Mesquite, NV offering short-term rental and Airbnb turnovers, standard and deep residential cleaning, move-in/move-out cleaning, tile and grout cleaning, exterior maintenance and pressure washing, and post-construction clean-ups.",
  url: absoluteUrl("/"),
  logo: absoluteUrl(PRISTINE_INFO.logoUrl),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  telephone: `+1-${PRISTINE_INFO.phoneRaw.slice(0, 3)}-${PRISTINE_INFO.phoneRaw.slice(3, 6)}-${PRISTINE_INFO.phoneRaw.slice(6)}`,
  email: PRISTINE_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: PRISTINE_INFO.address,
    addressLocality: PRISTINE_INFO.city,
    addressRegion: PRISTINE_INFO.state,
    postalCode: PRISTINE_INFO.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  areaServed: AREA_PAGES.map((area) => ({
    "@type": "City",
    name: area.city,
    containedInPlace: { "@type": "State", name: area.stateName },
  })),
  sameAs: [PRISTINE_INFO.facebookUrl],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: SERVICE_PAGES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: absoluteUrl(`/services/${service.slug}`),
      },
    })),
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pristine Cleaning | House Cleaning & Airbnb Turnovers in Mesquite, NV" },
      {
        name: "description",
        content:
          "House cleaning, Airbnb turnovers, deep cleaning, move-out cleaning and pressure washing in Mesquite NV, Bunkerville, St. George UT and Littlefield AZ.",
      },
      { name: "author", content: PRISTINE_INFO.name },
      { name: "theme-color", content: "#0f1f2e" },
      { name: "geo.region", content: "US-NV" },
      { name: "geo.placename", content: "Mesquite" },
      { property: "og:site_name", content: PRISTINE_INFO.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(DEFAULT_OG_IMAGE) },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          url: absoluteUrl("/"),
          name: PRISTINE_INFO.name,
          publisher: { "@id": BUSINESS_ID },
        }),
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Mrs+Saint+Delafield&family=Questrial&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/30 selection:text-primary">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

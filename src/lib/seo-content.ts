// Content for the individual service pages (/services/:slug) and service-area pages
// (/service-areas/:slug). Each page targets a specific search ("airbnb cleaning mesquite nv",
// "house cleaning st george ut", ...), so keep titles, descriptions and copy unique per page.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Short name used in navigation, links and schema. */
  name: string;
  /** Matching option value in the quote form's service dropdown. */
  formValue: string;
  /** id of the CORE_SPECIALTIES card that links to this page. */
  specialtyId?: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, location-neutral summary used on cards (city pages, etc.). */
  summary: string;
  h1: string;
  intro: string[];
  idealFor: string[];
  included: { area: string; tasks: string[] }[];
  whyUs: { title: string; text: string }[];
  faqs: Faq[];
  /** Gallery photo shown on the page (and used as its social sharing image). Optional until a real photo exists. */
  image?: string;
  imageAlt?: string;
}

export interface AreaPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  /** Matching option value in the quote form's city dropdown. */
  formValue: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  localNotes: { title: string; text: string }[];
  neighborhoods: string[];
  nearby: string[];
  faqs: Faq[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "airbnb-turnover-cleaning",
    name: "Airbnb & Vacation Rental Turnover Cleaning",
    formValue: "Short-Term Rental / Airbnb Turnover",
    specialtyId: "str-airbnb-turnovers",
    metaTitle: "Airbnb Turnover Cleaning in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Airbnb & VRBO turnover cleaning in Mesquite NV, St. George UT & nearby. Every room sanitized, linens washed, toiletries restocked and maintenance checks.",
    summary:
      "Every room sanitized, all linens washed, essentials restocked and maintenance checks between guests.",
    h1: "Airbnb & Vacation Rental Turnover Cleaning in Mesquite, NV",
    intro: [
      "Your guests judge your rental the moment they walk in. Pristine Cleaning provides short-term rental and Airbnb turnover cleaning for hosts and property managers in Mesquite, Bunkerville, St. George, Littlefield and the surrounding Virgin River Valley, so every check-in feels like the first one.",
      "Every turnover includes sanitizing all rooms, washing all linens, restocking essentials like toiletries, and performing maintenance checks to make sure the property is stage-ready. We work around your booking calendar and let you know right away if anything is damaged or running low, so you get consistent, 5-star-ready results without having to be on site.",
    ],
    idealFor: [
      "Airbnb and VRBO hosts",
      "Vacation rental property managers",
      "Golf and snowbird season rentals",
      "Hosts who manage their rental from out of town",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Dishes washed and put away",
          "Counters, backsplash and sink sanitized",
          "Appliance fronts, microwave and stovetop wiped",
          "Fridge checked for guest leftovers",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilets, tubs and showers scrubbed and sanitized",
          "Mirrors and glass polished streak-free",
          "Fresh towels folded and staged",
          "Essentials like toiletries restocked",
        ],
      },
      {
        area: "Bedrooms & living areas",
        tasks: [
          "All linens washed and beds made fresh",
          "Dusting of surfaces, decor and ceiling fans",
          "Floors vacuumed and mopped",
          "Furniture, pillows and throws reset to your staging",
        ],
      },
      {
        area: "Host support",
        tasks: [
          "Trash and recycling removed",
          "Maintenance checks so the property is stage-ready",
          "Damage, missing items and low supplies reported",
          "Flexible same-day turnover windows",
        ],
      },
    ],
    whyUs: [
      {
        title: "Built around your calendar",
        text: "We schedule each clean between check-out and check-in so back-to-back bookings never slip.",
      },
      {
        title: "Consistent staging",
        text: "Beds, towels and decor are set up the same way every time, matching your listing photos.",
      },
      {
        title: "Your eyes on the property",
        text: "We let you know about damage, maintenance issues or low supplies before your next guest arrives.",
      },
    ],
    faqs: [
      {
        question: "How much does Airbnb turnover cleaning cost in Mesquite?",
        answer:
          "Turnover pricing depends on the size of the rental, the number of beds and bathrooms, and whether laundry is included. Request a free quote and we'll give you a flat per-turnover price, and new customers get 20% off their first service.",
      },
      {
        question: "Can you handle same-day turnovers between guests?",
        answer:
          "Yes. We plan turnovers around your check-out and check-in times so the property is guest-ready before the next arrival.",
      },
      {
        question: "Do you wash and change the linens and towels?",
        answer:
          "Yes. Washing all linens is part of every turnover. We strip the beds, wash the linens and towels, make the beds fresh, and fold and stage towels for the next guest.",
      },
      {
        question: "Will you tell me if something is damaged or missing?",
        answer:
          "Yes. Every turnover includes a maintenance check. If we notice damage, missing items, maintenance problems or supplies running low, we'll let you know right away so you can deal with it before the next guest.",
      },
      {
        question: "Which areas do you cover for vacation rental cleaning?",
        answer:
          "We clean short-term rentals in Mesquite and Bunkerville NV, St. George UT, Littlefield and Scenic AZ, and the surrounding Virgin River Valley.",
      },
    ],
    image: "/gallery/mesquite-airbnb-living-room-turnover-towel-staging.jpg",
    imageAlt: "Airbnb living room turnover with fresh towels staged on the sofas in Mesquite NV",
  },
  {
    slug: "deep-house-cleaning",
    name: "Deep House Cleaning",
    formValue: "Deep Residential Cleaning",
    specialtyId: "standard-deep-residential",
    metaTitle: "Deep House Cleaning in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Top-to-bottom deep house cleaning in Mesquite NV & St. George UT. Baseboards, grout, hard water stains, appliances and more. Free quote, 20% off your first clean.",
    summary:
      "Top-to-bottom detail cleaning: baseboards, grout, hard water stains and inside appliances.",
    h1: "Deep House Cleaning in Mesquite, NV",
    intro: [
      "A deep clean goes far beyond a quick tidy. Pristine Cleaning tackles the built-up grime, hard water stains and hidden dust that regular cleaning misses, from baseboards and door frames to shower glass, grout lines and inside the oven.",
      "It's the right choice for a first clean with us, a spring refresh, getting ready for guests or the holidays, or bringing a home back to a clean baseline before switching to regular maintenance.",
    ],
    idealFor: [
      "First-time cleans and seasonal refreshes",
      "Homes that haven't been professionally cleaned in a while",
      "Before or after hosting family and holidays",
      "Resetting a home before recurring maintenance",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Degreasing counters, backsplash and cabinet fronts",
          "Oven and microwave interiors cleaned",
          "Stainless steel appliances polished streak-free",
          "Sinks and faucets scrubbed and descaled",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Hard water spots and soap scum removed from glass and fixtures",
          "Tile and grout lines scrubbed",
          "Tubs, showers and toilets deep cleaned",
          "Vanities, mirrors and cabinet fronts wiped",
        ],
      },
      {
        area: "Throughout the home",
        tasks: [
          "Baseboards, door frames and trim hand-wiped",
          "Ceiling fans, light fixtures and vents dusted",
          "Window sills and tracks cleaned",
          "Floors vacuumed and mopped edge to edge",
        ],
      },
    ],
    whyUs: [
      {
        title: "Hard water experts",
        text: "Mineral-heavy water in the Virgin River Valley leaves spots on glass and fixtures. We know how to lift it without scratching.",
      },
      {
        title: "Detail-first checklist",
        text: "Baseboards, trim, vents and fan blades are part of every deep clean, not an upsell.",
      },
      {
        title: "Before-and-after results",
        text: "See real examples in our work gallery, from ovens to shower glass restored to like-new.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a deep clean and a regular clean?",
        answer:
          "A regular clean keeps an already-clean home tidy: surfaces, floors, kitchens and bathrooms. A deep clean adds the detail work that builds up over time, such as baseboards, trim, vents, grout, hard water stains, and inside appliances.",
      },
      {
        question: "How long does a deep house cleaning take?",
        answer:
          "It depends on the size and condition of the home. Most homes take several hours with a team. We'll give you a time estimate along with your quote.",
      },
      {
        question: "Can you remove hard water stains from shower glass?",
        answer:
          "Yes. Hard water spots and mineral film are common in Mesquite and St. George, and removing them from shower glass, fixtures and tile is a regular part of our deep cleans.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "No. Many clients give us access and go about their day. Just let us know how to get in and anything we should know about the home.",
      },
    ],
    image: "/gallery/mesquite-shower-glass-hard-water-spots-before-after.jpg",
    imageAlt:
      "Shower glass hard water spots removed, before and after deep cleaning in Mesquite NV",
  },
  {
    slug: "house-cleaning",
    name: "Standard House Cleaning",
    formValue: "Standard Residential Cleaning",
    metaTitle: "House Cleaning in Mesquite, NV | Weekly & Bi-Weekly Maid Service",
    metaDescription:
      "Standard house cleaning in Mesquite NV & St. George UT: floors vacuumed and mopped, surfaces dusted, kitchens wiped and bathrooms sanitized. Weekly or one-time.",
    summary:
      "Floors vacuumed and mopped, surfaces dusted, kitchen counters wiped and bathrooms sanitized.",
    h1: "Standard House Cleaning in Mesquite, NV",
    intro: [
      "Come home to a clean house without giving up your weekends. Pristine Cleaning offers standard residential cleaning for homeowners in Mesquite, Bunkerville, St. George and nearby communities, as a one-time clean or on a weekly, bi-weekly or monthly schedule.",
      "A standard clean includes vacuuming and mopping floors, dusting accessible surfaces, wiping down kitchen counters and sanitizing bathrooms. It keeps desert dust under control and your home fresh between deep cleans, and it's a great option for seasonal residents who want their home kept ready while they're away.",
    ],
    idealFor: [
      "Busy households and working families",
      "Retirees and 55+ communities",
      "Seasonal and part-time residents",
      "Keeping a home clean after a deep clean",
    ],
    included: [
      {
        area: "Floors & surfaces",
        tasks: [
          "Floors vacuumed and mopped",
          "Accessible surfaces, furniture and decor dusted",
          "Mirrors and glass wiped",
          "Trash emptied",
        ],
      },
      {
        area: "Kitchen & bathrooms",
        tasks: [
          "Kitchen counters and sink wiped down",
          "Appliance fronts cleaned",
          "Bathrooms sanitized: toilets, tubs, showers and sinks",
          "Vanities and fixtures wiped",
        ],
      },
      {
        area: "Your schedule",
        tasks: [
          "One-time, weekly, bi-weekly or monthly",
          "Consistent checklist every visit",
          "Easy to skip or reschedule",
          "Upgrade to a deep clean any time",
        ],
      },
    ],
    whyUs: [
      {
        title: "Desert dust, handled",
        text: "Regular visits keep blowing dust off your floors, sills and surfaces before it builds up.",
      },
      {
        title: "Consistent every visit",
        text: "The same checklist every time, so you always know what you're getting.",
      },
      {
        title: "Flexible plans",
        text: "Pick the frequency that fits your home and change it whenever your needs change.",
      },
    ],
    faqs: [
      {
        question: "What's included in a standard house cleaning?",
        answer:
          "Vacuuming and mopping floors, dusting accessible surfaces, wiping down kitchen counters and sanitizing bathrooms. For baseboards, grout, hard water stains and inside appliances, choose a deep clean.",
      },
      {
        question: "How often should I schedule house cleaning?",
        answer:
          "Most families choose bi-weekly visits. Weekly suits busy households or homes with pets and kids, and monthly works well for smaller homes or light upkeep.",
      },
      {
        question: "Do you clean homes for seasonal residents while they're away?",
        answer:
          "Yes. We can keep your home dusted and ready on a schedule that fits your time away, so it's clean when you return.",
      },
      {
        question: "Do I need a deep clean before starting regular service?",
        answer:
          "If the home hasn't been professionally cleaned in a while, we usually recommend starting with a deep clean so regular visits can keep it at that level.",
      },
    ],
    image: "/gallery/mesquite-open-concept-kitchen-living-room-turnover.jpg",
    imageAlt: "Clean open-concept kitchen and living room in a Mesquite NV home",
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In & Move-Out Cleaning",
    formValue: "Move-In / Move-Out Clean",
    specialtyId: "move-in-out",
    metaTitle: "Move-Out Cleaning in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Move-in & move-out cleaning in Mesquite NV & St. George UT. Empty-home cleaning inside cabinets and appliances for renters, sellers, landlords and new owners.",
    summary:
      "Empty-home cleaning inside cabinets, closets and appliances for renters, sellers and landlords.",
    h1: "Move-In & Move-Out Cleaning in Mesquite, NV",
    intro: [
      "Our move-in and move-out cleaning is an intensive deep-cleaning service designed to return a living space to its original, pristine condition. Pristine Cleaning takes the cleaning off your list for renters, homeowners, landlords and real estate agents in Mesquite, St. George and the surrounding area.",
      "With the home empty, we can reach everything: inside cabinets and drawers, inside the fridge and oven, closets, baseboards and floors edge to edge. It's the clean you want before handing back the keys or unpacking your first box.",
    ],
    idealFor: [
      "Renters moving out",
      "Homeowners selling or buying",
      "Landlords between tenants",
      "Real estate agents preparing listings",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Inside and outside of cabinets and drawers",
          "Inside the fridge, oven and microwave",
          "Counters, backsplash and sink",
          "Pantry shelves wiped",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Tubs, showers, toilets and sinks scrubbed",
          "Inside vanities and medicine cabinets",
          "Mirrors, glass and fixtures polished",
          "Hard water spots removed",
        ],
      },
      {
        area: "Every room",
        tasks: [
          "Closets and shelving wiped",
          "Baseboards, doors and switch plates",
          "Window sills and tracks",
          "Floors vacuumed and mopped",
        ],
      },
    ],
    whyUs: [
      {
        title: "Inspection-ready",
        text: "We focus on the spots landlords and buyers check: inside appliances, cabinets and bathrooms.",
      },
      {
        title: "Works with your timeline",
        text: "We schedule around closing dates, lease end dates and moving trucks.",
      },
      {
        title: "Great for landlords",
        text: "Get rentals clean and ready for the next tenant, with recurring turnover options.",
      },
    ],
    faqs: [
      {
        question: "Will a move-out clean help me get my deposit back?",
        answer:
          "A thorough move-out clean covers the areas landlords check most, like inside appliances, cabinets and bathrooms, which gives you the best chance at a full deposit. Check your lease for any specific cleaning requirements.",
      },
      {
        question: "Does the home need to be empty?",
        answer:
          "Move-in and move-out cleans work best in an empty home so we can reach inside cabinets, closets and appliances. If a few items remain, just let us know.",
      },
      {
        question: "Do you clean inside the fridge and oven?",
        answer:
          "Yes. Inside the fridge, oven and microwave are included in every move-in or move-out clean.",
      },
      {
        question: "Do you work with landlords and real estate agents?",
        answer:
          "Yes. We clean rentals between tenants and homes before listing photos or closing. Ask about ongoing pricing if you have multiple properties.",
      },
    ],
    image: "/gallery/mesquite-oven-degreasing-before-after.jpg",
    imageAlt: "Oven interior degreased, before and after move-out cleaning in Mesquite NV",
  },
  {
    slug: "pressure-washing",
    name: "Exterior Maintenance & Pressure Washing",
    formValue: "Exterior Maintenance / Pressure Washing",
    specialtyId: "exterior-maintenance",
    metaTitle: "Pressure Washing in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Pressure washing & exterior maintenance in Mesquite NV, St. George UT & nearby. We remove dirt, grime and environmental buildup from outdoor surfaces. Free quote.",
    summary:
      "High-powered pressure washing to remove dirt, grime and environmental buildup from outdoor surfaces.",
    h1: "Pressure Washing & Exterior Maintenance in Mesquite, NV",
    intro: [
      "The outside of your home is the first thing guests and neighbors see. Pristine Cleaning uses high-powered pressure washers to remove dirt, grime and environmental buildup from outdoor surfaces for homes and vacation rentals in Mesquite, Bunkerville, St. George and the surrounding area.",
      "Desert dust, hard water spots and everyday foot traffic build up quickly outdoors. Regular exterior maintenance keeps your patios, walkways and entryways looking clean, and pairs well with an Airbnb turnover or a move-out clean when you want the whole property to shine.",
    ],
    idealFor: [
      "Homeowners boosting curb appeal",
      "Vacation rentals before peak season",
      "Getting a home ready to sell or rent",
      "Seasonal homes after time away",
    ],
    included: [
      {
        area: "Pressure washing",
        tasks: [
          "High-powered pressure washing",
          "Dirt, grime and environmental buildup removed",
          "Desert dust and debris rinsed away",
          "Surfaces left clean and fresh",
        ],
      },
      {
        area: "Common outdoor surfaces",
        tasks: [
          "Patios and outdoor living areas",
          "Walkways and paths",
          "Entryways and porches",
          "Ask us about other surfaces",
        ],
      },
      {
        area: "Scheduling",
        tasks: [
          "One-time or seasonal service",
          "Pair with interior cleaning",
          "Great before guests arrive or a listing goes live",
          "Free quote before we start",
        ],
      },
    ],
    whyUs: [
      {
        title: "Built for desert conditions",
        text: "Dust storms and hard water leave buildup that a hose won't move. Pressure washing does.",
      },
      {
        title: "Inside and out",
        text: "Book exterior maintenance alongside your house cleaning or rental turnover and have the whole property done at once.",
      },
      {
        title: "Instant curb appeal",
        text: "Clean outdoor spaces make homes and rentals look cared for, which guests and buyers notice right away.",
      },
    ],
    faqs: [
      {
        question: "What can you pressure wash?",
        answer:
          "We pressure wash outdoor surfaces such as patios, walkways, porches and entryways. If you have something else in mind, ask when you request your quote and we'll let you know.",
      },
      {
        question: "How often should outdoor surfaces be pressure washed?",
        answer:
          "It depends on use and weather. Many homes benefit from a seasonal cleaning, and busy vacation rentals may need it more often to stay guest-ready.",
      },
      {
        question: "Can I combine pressure washing with a house cleaning?",
        answer:
          "Yes. Exterior maintenance pairs well with a standard or deep clean, a move-out clean or an Airbnb turnover. Mention it in your quote request.",
      },
      {
        question: "Do you offer pressure washing outside Mesquite?",
        answer:
          "Yes. We serve Mesquite and Bunkerville NV, St. George UT, Littlefield and Scenic AZ, and nearby communities.",
      },
    ],
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    formValue: "Post-Construction Clean-ups",
    specialtyId: "post-construction",
    metaTitle: "Post-Construction Cleaning in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Post-construction & renovation cleaning in Mesquite NV and St. George UT. Drywall dust, stickers, paint and debris removed so new builds are move-in ready.",
    summary:
      "Drywall dust, stickers, paint overspray and debris cleared so new builds are move-in ready.",
    h1: "Post-Construction & Renovation Cleaning in Mesquite, NV",
    intro: [
      "Construction dust gets everywhere. Pristine Cleaning provides post-construction and renovation cleaning for homeowners, builders and contractors in Mesquite, St. George and the surrounding area, turning a dusty job site into a home that's ready for walk-throughs and move-in.",
      "We clear fine drywall dust from every surface, remove stickers, adhesive and paint overspray, clean inside cabinets and drawers, and detail windows, fixtures and floors.",
    ],
    idealFor: [
      "New home builds",
      "Kitchen and bathroom remodels",
      "Builders and general contractors",
      "Homeowners after a renovation",
    ],
    included: [
      {
        area: "Dust removal",
        tasks: [
          "Fine drywall dust vacuumed and wiped from all surfaces",
          "Vents, fans and light fixtures dusted",
          "Baseboards, trim and door frames wiped",
          "Floors vacuumed and mopped",
        ],
      },
      {
        area: "Detail work",
        tasks: [
          "Window stickers, labels and adhesive removed",
          "Paint overspray and residue cleaned from fixtures",
          "Inside cabinets, drawers and closets",
          "Glass, mirrors and hardware polished",
        ],
      },
      {
        area: "Final touches",
        tasks: [
          "Kitchen and bathroom surfaces detailed",
          "Light debris and packaging removed",
          "Ready for walk-through or move-in",
          "Follow-up touch-up cleans available",
        ],
      },
    ],
    whyUs: [
      {
        title: "Built for dust",
        text: "We use a top-down process so fine drywall dust is captured, not spread around.",
      },
      {
        title: "Contractor friendly",
        text: "We schedule around your final inspections, punch lists and handover dates.",
      },
      {
        title: "Move-in ready",
        text: "Homeowners walk into a space that's clean down to the inside of the drawers.",
      },
    ],
    faqs: [
      {
        question: "When should post-construction cleaning be scheduled?",
        answer:
          "Once the major work is finished and before the final walk-through or move-in. For larger projects, a rough clean during construction plus a final clean at the end works best.",
      },
      {
        question: "Do you remove construction debris?",
        answer:
          "We remove light debris, packaging and leftover materials as part of the clean. Large debris and dumpster loads should be handled by the contractor.",
      },
      {
        question: "Do you work with builders and contractors?",
        answer:
          "Yes. We clean new builds and remodels for contractors and homeowners and can schedule around your handover dates.",
      },
    ],
    image: "/gallery/mesquite-walk-in-tile-shower-deep-clean.jpg",
    imageAlt: "Clean white tile walk-in shower after a renovation clean in Mesquite NV",
  },
];

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "mesquite-nv",
    city: "Mesquite",
    state: "NV",
    stateName: "Nevada",
    formValue: "Mesquite",
    metaTitle: "House Cleaning in Mesquite, NV | Pristine Cleaning",
    metaDescription:
      "Local house cleaning in Mesquite, NV: Airbnb turnovers, standard & deep cleaning, move-out cleaning and pressure washing. Call or text (725) 225-2466.",
    h1: "House Cleaning Services in Mesquite, NV",
    intro: [
      "Pristine Cleaning is a locally based cleaning company in Mesquite, Nevada. We help homeowners, vacation rental hosts, seasonal residents and builders keep their properties spotless, from quick Airbnb turnovers to top-to-bottom deep cleans.",
      "Because we're local, we know what Mesquite homes deal with: fine desert dust, hard water spots on glass and fixtures, and busy golf and snowbird seasons that keep vacation rentals booked back to back.",
    ],
    localNotes: [
      {
        title: "Vacation rental turnovers",
        text: "Mesquite's golf courses and resorts keep short-term rentals busy. We turn over rentals between guests so hosts can keep their calendars full.",
      },
      {
        title: "Snowbird and seasonal homes",
        text: "Many Mesquite residents spend part of the year elsewhere. We can keep your home dusted and ready, and give it a deep clean before you arrive.",
      },
      {
        title: "Hard water and desert dust",
        text: "Mineral-rich water leaves spots on showers and faucets, and desert winds bring in fine dust. Both are part of our everyday cleaning checklist.",
      },
    ],
    neighborhoods: [
      "Sun City Mesquite",
      "Falcon Ridge",
      "Palms Golf Course area",
      "Mesquite Vistas",
      "Downtown Mesquite",
    ],
    nearby: ["bunkerville-nv", "scenic-az", "littlefield-az", "st-george-ut"],
    faqs: [
      {
        question: "Are you a local Mesquite cleaning company?",
        answer:
          "Yes. Pristine Cleaning is based in Mesquite, NV, and serves Mesquite along with Bunkerville, St. George, Littlefield and the surrounding Virgin River Valley.",
      },
      {
        question: "Do you clean vacation rentals in Mesquite?",
        answer:
          "Yes. Short-term rental and Airbnb turnovers are one of our specialties. We clean between guests, change linens and report any issues to the host.",
      },
      {
        question: "How do I get a cleaning quote in Mesquite?",
        answer:
          "Fill out the quote form on this page or call (725) 225-2466. New customers get 20% off their first service.",
      },
    ],
  },
  {
    slug: "st-george-ut",
    city: "St. George",
    state: "UT",
    stateName: "Utah",
    formValue: "Saint George",
    metaTitle: "House & Airbnb Cleaning in St. George, UT | Pristine Cleaning",
    metaDescription:
      "Professional cleaning in St. George, UT: vacation rental turnovers, deep house cleaning, move-out and post-construction cleaning. Free quote, 20% off first clean.",
    h1: "House Cleaning & Vacation Rental Turnovers in St. George, UT",
    intro: [
      "Pristine Cleaning brings detail-focused house cleaning and vacation rental turnovers to St. George, Utah. Whether you own a home, host guests on Airbnb or VRBO, or just finished a new build, we'll leave it spotless.",
      "St. George is one of the busiest vacation rental markets in the region thanks to its year-round sunshine and nearby national and state parks. We help hosts turn over rentals quickly and consistently so every guest walks into a clean, well-staged home.",
    ],
    localNotes: [
      {
        title: "Short-term rental specialists",
        text: "We work with St. George hosts and property managers on same-day turnovers, linen changes and guest-ready staging.",
      },
      {
        title: "New construction cleaning",
        text: "With new homes going up across Washington County, our post-construction cleaning gets new builds ready for walk-throughs and move-in.",
      },
      {
        title: "Deep cleaning for busy households",
        text: "From hard water stains to dusty baseboards, our deep cleans reset your home so regular upkeep is easy.",
      },
    ],
    neighborhoods: [
      "Downtown St. George",
      "Little Valley",
      "Green Valley",
      "Bloomington",
      "Desert Color",
      "Entrada",
    ],
    nearby: ["mesquite-nv", "littlefield-az", "scenic-az", "bunkerville-nv"],
    faqs: [
      {
        question: "Do you provide cleaning services in St. George, UT?",
        answer:
          "Yes. We serve St. George along with Mesquite, Bunkerville, Littlefield and the surrounding area. Request a quote and we'll confirm availability for your address.",
      },
      {
        question: "Can you clean my St. George Airbnb between guests?",
        answer:
          "Yes. We schedule turnovers between check-out and check-in, change linens, restock host-supplied items and report any damage or issues.",
      },
      {
        question: "Do you clean new construction homes in St. George?",
        answer:
          "Yes. Our post-construction cleaning removes drywall dust, stickers and residue so new builds and remodels are move-in ready.",
      },
    ],
  },
  {
    slug: "bunkerville-nv",
    city: "Bunkerville",
    state: "NV",
    stateName: "Nevada",
    formValue: "Bunkerville",
    metaTitle: "House Cleaning in Bunkerville, NV | Pristine Cleaning",
    metaDescription:
      "Trusted house cleaning in Bunkerville, NV from your Mesquite neighbors. Deep cleaning, recurring maid service, move-out and rental cleaning. Free quote today.",
    h1: "House Cleaning Services in Bunkerville, NV",
    intro: [
      "Pristine Cleaning serves Bunkerville, Nevada, just across the Virgin River from our home base in Mesquite. We bring the same detailed cleaning to Bunkerville's homes, ranch properties and rentals that our Mesquite clients count on.",
      "Rural living means extra dust and dirt tracked in from outside. Our standard and deep cleans keep the inside under control, and our pressure washing takes care of patios, walkways and entryways.",
    ],
    localNotes: [
      {
        title: "Close to home",
        text: "Bunkerville is a short drive from Mesquite, which makes it easy to schedule recurring cleans and one-time deep cleans.",
      },
      {
        title: "Dust and outdoor upkeep",
        text: "Our exterior maintenance uses high-powered pressure washing to clear dirt and buildup from patios, walkways and entryways.",
      },
      {
        title: "Move-in and move-out",
        text: "Buying, selling or renting out a home in Bunkerville? We clean inside cabinets, appliances and closets so it's ready for the next owner.",
      },
    ],
    neighborhoods: ["Bunkerville", "Riverside", "Virgin River Valley"],
    nearby: ["mesquite-nv", "scenic-az", "littlefield-az", "st-george-ut"],
    faqs: [
      {
        question: "Do you travel to Bunkerville for house cleaning?",
        answer:
          "Yes. Bunkerville is part of our regular service area, just a short drive from our base in Mesquite.",
      },
      {
        question: "Can I set up recurring cleaning in Bunkerville?",
        answer:
          "Yes. Choose weekly, bi-weekly or monthly visits, and we'll keep your home clean on a consistent schedule.",
      },
      {
        question: "Do you offer move-out cleaning in Bunkerville?",
        answer:
          "Yes. Our move-in and move-out cleans cover inside cabinets, closets and appliances, plus bathrooms, baseboards and floors.",
      },
    ],
  },
  {
    slug: "littlefield-az",
    city: "Littlefield",
    state: "AZ",
    stateName: "Arizona",
    formValue: "Littlefield",
    metaTitle: "House Cleaning in Littlefield, AZ | Pristine Cleaning",
    metaDescription:
      "House cleaning in Littlefield, AZ and the Arizona Strip. Deep cleaning, recurring cleaning, vacation rental turnovers and move-out cleans. Get a free quote.",
    h1: "House Cleaning Services in Littlefield, AZ",
    intro: [
      "Pristine Cleaning serves Littlefield, Arizona and nearby Beaver Dam, bringing professional house cleaning to the communities along I-15 between Mesquite and the Virgin River Gorge.",
      "Finding a reliable cleaner in a small community can be hard. We offer the same services here as in Mesquite: standard and deep cleans, rental turnovers, move-in or move-out cleaning, and exterior pressure washing.",
    ],
    localNotes: [
      {
        title: "Serving the Arizona Strip",
        text: "We cover Littlefield and Beaver Dam as part of our regular service area. Just request a quote with your address.",
      },
      {
        title: "Deep cleans that last",
        text: "Our deep cleans tackle hard water spots, dusty baseboards and grime so your home stays cleaner for longer.",
      },
      {
        title: "Rental and second homes",
        text: "Own a rental or a second home here? We can turn it over between guests or keep it ready for your return.",
      },
    ],
    neighborhoods: ["Littlefield", "Beaver Dam", "Desert Springs"],
    nearby: ["scenic-az", "mesquite-nv", "bunkerville-nv", "st-george-ut"],
    faqs: [
      {
        question: "Do you provide house cleaning in Littlefield, AZ?",
        answer:
          "Yes. Littlefield and nearby Beaver Dam are part of our service area. Request a quote and we'll confirm scheduling for your address.",
      },
      {
        question: "What cleaning services do you offer in Littlefield?",
        answer:
          "Standard and deep house cleaning, vacation rental turnovers, move-in and move-out cleaning, exterior maintenance and pressure washing, and post-construction cleaning.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "Contact us as early as you can, especially for move-out dates and rental turnovers, and we'll find a time that works.",
      },
    ],
  },
  {
    slug: "scenic-az",
    city: "Scenic",
    state: "AZ",
    stateName: "Arizona",
    formValue: "Surrounding Area",
    metaTitle: "House Cleaning in Scenic, AZ | Pristine Cleaning",
    metaDescription:
      "House cleaning in Scenic, AZ, minutes from Mesquite. Deep cleaning, recurring cleaning, Airbnb turnovers and move-out cleaning. Free quote, 20% off first clean.",
    h1: "House Cleaning Services in Scenic, AZ",
    intro: [
      "Scenic, Arizona sits just across the state line from Mesquite, and Pristine Cleaning serves homes here as part of our local service area. From standard and deep cleans to rental turnovers and exterior pressure washing, we keep Scenic homes spotless inside and out.",
      "Being minutes away means flexible scheduling and quick turnarounds, whether you need a regular clean, a move-out clean or a same-day rental turnover.",
    ],
    localNotes: [
      {
        title: "Minutes from Mesquite",
        text: "Scenic is right next to our home base, so it's easy to fit you into our regular schedule.",
      },
      {
        title: "Seasonal homes",
        text: "Away for part of the year? We'll keep your home dusted and give it a deep clean before you return.",
      },
      {
        title: "Rental turnovers",
        text: "We clean and stage short-term rentals between guests so your reviews stay strong.",
      },
    ],
    neighborhoods: ["Scenic", "Beaver Dam", "Mesquite border area"],
    nearby: ["mesquite-nv", "littlefield-az", "bunkerville-nv", "st-george-ut"],
    faqs: [
      {
        question: "Do you clean homes in Scenic, AZ?",
        answer:
          "Yes. Scenic is part of our regular service area, just minutes from our base in Mesquite.",
      },
      {
        question: "Can you keep my seasonal home clean while I'm away?",
        answer:
          "Yes. We can set up visits on a schedule that suits you and give the home a deep clean before you arrive.",
      },
      {
        question: "How do I book a cleaning in Scenic?",
        answer:
          "Fill out the quote form on this page or call (725) 225-2466. New customers get 20% off their first service.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((page) => page.slug === slug);
}

export function servicePathForSpecialty(specialtyId: string) {
  const page = SERVICE_PAGES.find((p) => p.specialtyId === specialtyId);
  return page ? `/services/${page.slug}` : "/services";
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas does Pristine Cleaning serve?",
    answer:
      "We're based in Mesquite, NV and serve Mesquite, Bunkerville, St. George UT, Littlefield and Scenic AZ, and the surrounding Virgin River Valley.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "Short-term rental and Airbnb turnovers, standard and deep residential cleaning, move-in and move-out cleaning, exterior maintenance and pressure washing, and post-construction clean-ups.",
  },
  {
    question: "How much does house cleaning cost?",
    answer:
      "Pricing depends on the size and condition of the home and the type of cleaning. Request a free quote and we'll reach out with a price. New customers get 20% off their first service.",
  },
  {
    question: "Do you offer a discount for new customers?",
    answer: "Yes. New customers get 20% off their first cleaning service.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "Fill out the free quote form or call or text (725) 225-2466. We'll reach out as soon as possible to confirm the details and schedule your clean.",
  },
];

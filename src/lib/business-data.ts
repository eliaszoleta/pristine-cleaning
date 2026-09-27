export interface BusinessInfo {
  name: string;
  tagline: string;
  headline: string;
  promoBadge: string;
  promoDiscount: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  facebookUrl: string;
  serviceAreas: string[];
  badges: string[];
  hours: string;
}

export const PRISTINE_INFO: BusinessInfo = {
  name: "Pristine Cleaning",
  tagline:
    "Short-Term Rental / Airbnb Turnovers • Standard & Deep Residential Cleaning • Move-In/Out • Exterior Maintenance",
  headline: "A cleaner home starts here! ✨",
  promoBadge: "New Customer Special",
  promoDiscount: "20% off your first service",
  logoUrl: "/logo.jpg",
  phone: "(725) 225-2466",
  phoneRaw: "7252252466",
  email: "cmancillas930@gmail.com",
  address: "121 Jacaranda Way",
  addressLine2: "Mesquite, NV 89027",
  city: "Mesquite",
  state: "NV",
  zip: "89027",
  facebookUrl: "https://www.facebook.com/PristineCleaning121",
  serviceAreas: [
    "Mesquite, NV",
    "Bunkerville, NV",
    "Saint George, UT",
    "Littlefield, AZ",
    "Scenic & Virgin River Valley",
  ],
  badges: [
    "Short-Term Rental / Airbnb Specialists",
    "Standard & Deep Residential Cleaning",
    "Move-In / Move-Out Cleaning",
    "Tile & Grout Cleaning",
    "Exterior Maintenance & Pressure Washing",
    "Now Offering Post-Construction Clean-ups",
    "20% Off First Service for New Customers",
  ],
  hours: "Monday – Saturday: 7:00 AM – 7:00 PM | Sunday: By Appointment",
};

export interface Specialty {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  /** Photo for the card. Leave undefined to show an icon panel until a real photo is added. */
  image?: string;
  imageAlt?: string;
}

// Matches the service list on the business's Facebook page (plus post-construction clean-ups).
export const CORE_SPECIALTIES: Specialty[] = [
  {
    id: "str-airbnb-turnovers",
    title: "Short-Term Rental / Airbnb Turnovers",
    badge: "Host Favorite",
    summary:
      "Rapid, meticulous turnovers designed to keep your guest reviews at 5 stars every single stay.",
    description:
      "We sanitize every room, wash all linens, restock essentials like toiletries, and run maintenance checks so your property is stage-ready for the next guest.",
    features: [
      "Every room sanitized between guests",
      "All linens washed, beds made and towels staged",
      "Essentials like toiletries restocked",
      "Maintenance checks so the property is stage-ready",
    ],
    image: "/images/services/airbnb-turnover-cleaning-mesquite-nv.jpg",
    imageAlt: "Airbnb and short-term rental turnover cleaning in Mesquite NV",
  },
  {
    id: "standard-deep-residential",
    title: "Standard & Deep Residential Cleaning",
    badge: "Detailed Care",
    summary:
      "Regular house cleaning to keep your home fresh, or a top-to-bottom deep clean for the tough jobs you don't want to do.",
    description:
      "Standard cleaning covers vacuuming and mopping floors, dusting accessible surfaces, wiping down kitchen counters and sanitizing bathrooms. Deep cleaning adds baseboards, grout, hard water stains and more.",
    features: [
      "Floors vacuumed and mopped",
      "Accessible surfaces dusted and kitchen counters wiped",
      "Bathrooms sanitized",
      "Deep cleans: baseboards, grout and built-up grime",
    ],
    image: "/images/services/house-cleaning-mesquite-nv.jpg",
    imageAlt: "Standard and deep residential house cleaning in Mesquite NV",
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out Cleaning",
    badge: "Moving Soon?",
    summary:
      "An intensive deep-cleaning service designed to return a living space to its original, pristine condition.",
    description:
      "Perfect for renters, sellers, buyers and landlords. With the home empty, we clean inside cabinets, closets and appliances so it's ready for the next move-in.",
    features: [
      "Inside cabinets, drawers and closets",
      "Inside the fridge, oven and microwave",
      "Bathrooms scrubbed and hard water removed",
      "Baseboards, doors and floors edge to edge",
    ],
    image: "/gallery/mesquite-oven-degreasing-before-after.jpg",
    imageAlt: "Oven interior degreased during a move-out cleaning in Mesquite NV",
  },
  {
    id: "tile-grout",
    title: "Tile & Grout Cleaning",
    badge: "Like-New Tile",
    summary:
      "Deep scrubbing that lifts built-up dirt, soap scum and hard water from tile and grout lines.",
    description:
      "Dingy grout makes even a clean home look dirty. We scrub tile floors, showers, tub surrounds and backsplashes so grout lines look bright again.",
    features: [
      "Grout lines scrubbed clean",
      "Soap scum and hard water film removed",
      "Tile floors, showers and backsplashes",
      "Kitchens, bathrooms and entryways",
    ],
    image: "/gallery/mesquite-walk-in-tile-shower-deep-clean.jpg",
    imageAlt:
      "Clean white tile walk-in shower with bright grout lines after tile and grout cleaning in Mesquite NV",
  },
  {
    id: "exterior-maintenance",
    title: "Exterior Maintenance & Pressure Washing",
    badge: "Curb Appeal",
    summary:
      "High-powered pressure washing to remove dirt, grime and environmental buildup from outdoor surfaces.",
    description:
      "Desert dust, hard water and everyday wear build up fast outside. We pressure wash outdoor surfaces so your home or rental looks clean from the curb.",
    features: [
      "High-powered pressure washing",
      "Dirt, grime and environmental buildup removed",
      "Outdoor surfaces like patios, walkways and entryways",
      "Great for homes and vacation rentals",
    ],
    image: "/images/services/pressure-washing-mesquite-nv.jpg",
    imageAlt:
      "Pressure washing a paved walkway to remove dirt and grime, exterior maintenance in Mesquite NV",
  },
  {
    id: "post-construction",
    title: "Post-Construction Clean-ups",
    badge: "Now Offering!",
    summary:
      "Brand-new service! We handle the tough post-construction cleanup jobs after builds or renovations so you don't have to.",
    description:
      "Drywall dust, paint overspray, sticker residue, and construction debris thoroughly cleared out so new builds or renovated spaces are move-in ready.",
    features: [
      "Fine construction dust vacuuming and wipe-downs",
      "Window sticker, adhesive, and residue removal",
      "Cabinet interiors, drawers, and trim detailing",
      "Ready for homeowner walk-throughs and immediate move-in",
    ],
    image: "/images/services/post-construction-cleaning-before-after-mesquite-nv.jpg",
    imageAlt:
      "Master bathroom before and after post-construction cleaning in Mesquite NV: debris and drywall dust removed",
  },
];

export interface Testimonial {
  /** Paragraphs of the review, as the customer wrote it (spelling corrected only). */
  quote: string[];
  author: string;
  location: string;
  rating: number;
  service: string;
  /** Where the review was left, e.g. "Turno", "Google", "Facebook". */
  source?: string;
  date?: string;
  tags?: string[];
}

// Customer reviews shown on the home page. Add new ones as they come in (Turno, Google, Facebook...).
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: [
      "Chelsea is extremely intelligent and on the ball on everything. She pays attention to every detail and forsakes nothing. I am thrilled to have her on my team, knowing her experience will pull her through. Her customer service skills are impeccable, and her patience is heart warming.",
      "I just love her to pieces, she puts me at peace.",
      "She's intelligent, and knows her job very well and has a plan on what she does and how she does it. Gives plenty of time to make it pretty. And pristine and 100% perfect rating!!!",
    ],
    author: "Vacation Rental Host",
    location: "Mesquite, Nevada",
    rating: 5,
    service: "Short-Term Rental Turnover",
    source: "Turno",
    date: "Apr 2026",
    tags: [
      "Detail-oriented",
      "Professional",
      "Responsive",
      "Thorough",
      "On-time",
      "Careful",
      "Polite",
    ],
  },
  {
    quote: [
      "Pristine Cleaning took all the stress out of our Airbnb turnovers. Our guests constantly leave glowing comments about how spotless the place is. Plus, that 20% first-time discount made trying them a no-brainer!",
    ],
    author: "Elena & Marcus V.",
    location: "Mesquite, NV",
    rating: 5,
    service: "Short-Term Rental Turnover",
  },
  {
    quote: [
      "We hired them for a deep residential clean after a family gathering. They handled the tough jobs we dreaded doing and our home looked and smelled incredible. Highly recommend!",
    ],
    author: "Robert & Karen S.",
    location: "Mesquite, NV",
    rating: 5,
    service: "Deep Residential Clean",
  },
  {
    quote: [
      "We just finished a remodel and needed a post-construction clean-up. Pristine did an outstanding job getting rid of all the drywall dust and residue. Meticulous and fast.",
    ],
    author: "Samantha T.",
    location: "Virgin River Valley",
    rating: 5,
    service: "Post-Construction Clean-up",
  },
];

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  seoFilename: string;
  seoAlt: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  description: string;
}

export const WORK_GALLERY: GalleryProject[] = [
  {
    id: "flooring-deep-clean-before-after",
    title: "Post-Renovation Hardwood Floor Deep Scrub & Polish",
    category: "Deep Residential Cleaning",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-hardwood-floors-deep-clean-before-after.jpg",
    seoFilename: "mesquite-hardwood-floors-deep-clean-before-after.jpg",
    seoAlt:
      "Mesquite NV hardwood floor restoration and deep clean before and after by Pristine Cleaning",
    seoTitle: "Hardwood Flooring Heavy Dust Extraction & Sheen Polish in Mesquite, NV",
    seoDescription:
      "Eliminated thick post-construction drywall dust and ground-in sediment, restoring the natural rich luster of wide-plank hardwood floors.",
    highlights: [
      "Heavy construction dust extraction",
      "Wood-safe pH-neutral deep conditioning",
      "Baseboard and trim detail wipe-down",
    ],
    description:
      "A dramatic transformation showing heavy construction grit and dust completely removed to reveal glowing, smooth wood flooring ready for move-in.",
  },
  {
    id: "luxury-custom-kitchen-turnover",
    title: "Executive Estate Kitchen Post-Construction Cleanup",
    category: "Post-Construction Clean-up",
    location: "Mesquite & Surrounding Areas",
    imageUrl: "/gallery/mesquite-luxury-kitchen-post-construction-cleaning-service.jpg",
    seoFilename: "mesquite-luxury-kitchen-post-construction-cleaning-service.jpg",
    seoAlt:
      "Post-construction cleaning of custom luxury kitchen island and marble floors in Mesquite Nevada",
    seoTitle: "Detailed Post-Construction Kitchen Clean & Marble Floor Polish | Pristine Cleaning",
    seoDescription:
      "Complete post-construction debris and dust removal across custom cabinetry, quartzite countertops, and polished porcelain flooring.",
    highlights: [
      "Protective floor coverings disposal & marble polishing",
      "Full interior & exterior custom cabinetry wipe",
      "Glass sliders & high-recessed cove lighting cleaning",
    ],
    description:
      "From contractor drop cloths and protective film to an immaculate culinary showpiece with pristine polished floors and spotless millwork.",
  },
  {
    id: "modern-bathroom-turnover-renovation",
    title: "Contemporary Master Bath Dust & Tile De-grime",
    category: "Post-Construction & Deep Clean",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-modern-bathroom-turnover-deep-cleaning.jpg",
    seoFilename: "mesquite-modern-bathroom-turnover-deep-cleaning.jpg",
    seoAlt:
      "Modern master bathroom cleanup before and after mirror and vanity scrubbing in Mesquite NV",
    seoTitle: "Master Bath Post-Remodel Clean: Mirrors, Tile, and Matte Black Fixtures",
    seoDescription:
      "Thorough detail scrubbing of mirrors, black accent tile, quartz vanities, and grout haze following a bathroom remodel.",
    highlights: [
      "Streak-free oversized mirror treatment",
      "Grout haze removal on dark tile walls",
      "Quartz vanity and matte black fixture polishing",
    ],
    description:
      "Removed heavy drywall film and construction residue, restoring dark designer walls, spotless white quartz countertops, and sparkling mirrors.",
  },
  {
    id: "short-term-rental-airbnb-bathroom-turnover",
    title: "Airbnb Vacation Rental Guest-Ready Bathroom Staging",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-airbnb-guest-ready-turnover-bathroom-staging.jpg",
    seoFilename: "mesquite-airbnb-guest-ready-turnover-bathroom-staging.jpg",
    seoAlt:
      "Short term rental Airbnb guest turnover bathroom sanitization and towel presentation in Mesquite NV",
    seoTitle: "Mesquite Airbnb Turnover Service: 5-Star Bathroom Sanitization & Linen Staging",
    seoDescription:
      "High-standard short-term rental turnover with hotel-folded fresh linens, sanitized tub and fixtures, and spotless vanity counters.",
    highlights: [
      "Hospital-grade sanitization of tub and vanity",
      "White plush linen folding & guest amenity staging",
      "Spotless chrome fixture descaling and shine",
    ],
    description:
      "Guest turnover clean showcasing pristine folded towels, sparkling tile, sanitized vanity surfaces, and welcoming presentation for 5-star host reviews.",
  },
  {
    id: "residential-kitchen-granite-stainless-clean",
    title: "Residential Kitchen Granite & Stainless Steel Detail",
    category: "Standard & Deep Maintenance",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-residential-granite-kitchen-counter-cleaning.jpg",
    seoFilename: "mesquite-residential-granite-kitchen-counter-cleaning.jpg",
    seoAlt:
      "Polished granite kitchen island and stainless steel appliances cleaned by Pristine Cleaning Mesquite",
    seoTitle: "Mesquite Residential Kitchen Deep Clean: Granite Counters and Double Dishwasher",
    seoDescription:
      "Intensive cleaning of natural granite counter surfaces, stainless steel appliances, dual sinks, and hardwood cabinets.",
    highlights: [
      "Granite sealant protection and mirror finish",
      "Streak-free stainless steel appliance detailing",
      "Sink and faucet descaling with spotless finish",
    ],
    description:
      "High-touch kitchen refresh including deep degreasing of counters, island sinks, gleaming stainless appliances, and polished cabinetry.",
  },
  {
    id: "luxury-open-living-airbnb-turnover",
    title: "Open-Concept Vacation Home Living & Kitchen Turnover",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-open-concept-vacation-rental-turnover-living-kitchen.jpg",
    seoFilename: "mesquite-open-concept-vacation-rental-turnover-living-kitchen.jpg",
    seoAlt:
      "Open-concept vacation rental living room and kitchen island after turnover cleaning in Mesquite NV by Pristine Cleaning",
    seoTitle: "Mesquite Vacation Home Guest-Ready Living & Island Bar Turnover Cleaning",
    seoDescription:
      "Immaculate short-term rental turnover across open-plan living room, kitchen island breakfast bar, and wood-look plank flooring.",
    highlights: [
      "Plank floor vacuum & microfiber sanitizing",
      "Sectional couch fluff & guest staging",
      "Barstool and kitchen pendant detail dusting",
    ],
    description:
      "Full Airbnb turnover ensuring wide-open living areas, sectional couches, breakfast bars, and kitchen countertops are immaculately prepped for incoming vacationers.",
  },
  {
    id: "estate-living-room-fireplace-staging",
    title: "Contemporary Living Room & Fireplace Detail Maintenance",
    category: "Standard & Deep Maintenance",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-residential-living-room-fireplace-area-cleaning.jpg",
    seoFilename: "mesquite-residential-living-room-fireplace-area-cleaning.jpg",
    seoAlt:
      "Pristine residential living room with fireplace, sectional sofa, and area rug cleaned in Mesquite Nevada",
    seoTitle: "Mesquite Residential Living Room Maintenance: Fireplace, Area Rug, and Slider Glass",
    seoDescription:
      "Detailed residential cleaning covering fireplace glass and hearth, plush area rug grooming, and floor-to-ceiling glass patio door tracking.",
    highlights: [
      "Fireplace face and glass wiping",
      "Geometric area rug fiber revitalization",
      "Sliding patio door glass & track cleaning",
    ],
    description:
      "A peaceful, spotless living space with thoroughly cleaned modern fireplace surrounds, vacuumed area rugs, and streak-free sliding glass door views.",
  },
  {
    id: "cozy-dining-room-buffet-cleaning",
    title: "Classic Dining Room & Wood Furniture Detail Care",
    category: "Deep Residential Cleaning",
    location: "Mesquite & Surrounding Areas",
    imageUrl: "/gallery/mesquite-dining-room-wood-furniture-deep-cleaning.jpg",
    seoFilename: "mesquite-dining-room-wood-furniture-deep-cleaning.jpg",
    seoAlt:
      "Traditional dining room table, wooden china cabinet, and ceiling fan detailed by Pristine Cleaning Mesquite NV",
    seoTitle: "Mesquite Dining Room Deep Clean: Hardwood Furnishings, Rugs, and Light Fixtures",
    seoDescription:
      "Deep residential cleaning of wooden dining suites, display cabinets, ceiling fan blades, and patterned accent rugs.",
    highlights: [
      "Wood furniture conditioning and dusting",
      "Ceiling fan blade degreasing & glass globe cleaning",
      "Baseboard and window sill hand wiping",
    ],
    description:
      "Warm, thorough dining room detailing highlighting gentle wood polish on heirlooms and tables, dust-free ceiling fixtures, and clean window sills.",
  },
  {
    id: "bathtub-stain-mineral-scale-restoration",
    title: "Bathtub Mineral Scale & Grime Restoration (Before & After)",
    category: "Deep Residential Cleaning",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-bathtub-mineral-stain-removal-before-after.jpg",
    seoFilename: "mesquite-bathtub-mineral-stain-removal-before-after.jpg",
    seoAlt:
      "Bathtub hard water rust and mineral scale removal before and after cleaning in Mesquite NV",
    seoTitle: "Heavy Bathtub Mineral Stain & Soap Scum Removal in Mesquite, Nevada",
    seoDescription:
      "Before and after deep clean restoring a heavily stained, rust and soap scum coated bathtub to gleaming white porcelain.",
    highlights: [
      "Hard water mineral & rust stain lifting",
      "Non-abrasive porcelain tub surface brightening",
      "Chrome drain and overflow plate descaling",
    ],
    description:
      "Dramatic before-and-after proof showing stubborn iron, mineral scale, and heavy tub discoloration completely eliminated without scratching the enamel.",
  },
  {
    id: "modern-vanity-post-construction-debris-removal",
    title: "Master Suite Bath Construction Debris & Residue Clear-out",
    category: "Post-Construction Clean-up",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-master-bathroom-vanity-post-construction-cleaning.jpg",
    seoFilename: "mesquite-master-bathroom-vanity-post-construction-cleaning.jpg",
    seoAlt:
      "Post-construction contractor debris cleanup and quartz vanity detailing in Mesquite NV master bathroom",
    seoTitle: "Mesquite Post-Remodel Bathroom Cleanup: Contractor Debris to Sparkling Quartz",
    seoDescription:
      "Before-and-after contractor debris removal, sheetrock dust clearing, tile floor scrubbing, and quartz vanity detail shine.",
    highlights: [
      "Contractor debris & cardboard disposal",
      "Grout haze and drywall dust scrubbed clean",
      "Black accent walls and mirror glass wiped streak-free",
    ],
    description:
      "Complete transformation from a dust-covered jobsite with floor clutter to a pristine, polished modern master bath ready for immediate occupancy.",
  },
  {
    id: "oven-interior-degrease-before-after",
    title: "Oven Interior Degreasing & Glass Door Restoration (Before & After)",
    category: "Deep Residential Cleaning",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-oven-degreasing-before-after.jpg",
    seoFilename: "mesquite-oven-degreasing-before-after.jpg",
    seoAlt:
      "Oven interior and door glass degreasing before and after deep cleaning in Mesquite NV by Pristine Cleaning",
    seoTitle: "Oven Interior Degreasing & Baked-On Grease Removal in Mesquite, NV",
    seoDescription:
      "Baked-on grease and carbon buildup lifted from the oven floor, racks, and inner door glass for a like-new finish.",
    highlights: [
      "Baked-on grease & carbon buildup removal",
      "Inner door glass cleared streak-free",
      "Rack and cavity wall degreasing",
    ],
    description:
      "Before-and-after proof of a heavily soiled oven brought back to a clean, clear-glass interior ready for cooking.",
  },
  {
    id: "shower-glass-hard-water-before-after",
    title: "Shower Glass Hard Water Spot Removal (Before & After)",
    category: "Deep Residential Cleaning",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-shower-glass-hard-water-spots-before-after.jpg",
    seoFilename: "mesquite-shower-glass-hard-water-spots-before-after.jpg",
    seoAlt:
      "Glass shower door hard water spots and mineral film removed before and after in Mesquite NV by Pristine Cleaning",
    seoTitle: "Shower Door Hard Water Spot & Mineral Film Removal in Mesquite, NV",
    seoDescription:
      "Heavy hard water spotting and mineral film cleared from a glass shower enclosure, restoring a crystal-clear view of the tile.",
    highlights: [
      "Hard water spot & mineral film removal",
      "Glass enclosure polished streak-free",
      "Black frame and handle wipe-down",
    ],
    description:
      "Cloudy, spotted shower glass turned fully transparent again, showing off the marble-look tile and matte black fixtures.",
  },
  {
    id: "walk-in-tile-shower-deep-clean",
    title: "Walk-In Tile Shower Deep Scrub & Detail",
    category: "Deep Residential Cleaning",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-walk-in-tile-shower-deep-clean.jpg",
    seoFilename: "mesquite-walk-in-tile-shower-deep-clean.jpg",
    seoAlt:
      "Clean white tile walk-in shower with penny tile floor after deep cleaning in Mesquite NV",
    seoTitle: "Walk-In Shower Tile, Grout & Fixture Deep Clean in Mesquite, NV",
    seoDescription:
      "Floor-to-ceiling white tile walls, penny tile floor, and brushed nickel fixtures scrubbed and rinsed spotless.",
    highlights: [
      "Tile wall and grout line scrubbing",
      "Penny tile floor and drain detailing",
      "Fixture and shelf niche wipe-down",
    ],
    description:
      "A bright, fresh walk-in shower with clean grout lines, spotless tile, and polished fixtures.",
  },
  {
    id: "airbnb-living-room-towel-staging",
    title: "Vacation Rental Living Room Turnover & Linen Staging",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-airbnb-living-room-turnover-towel-staging.jpg",
    seoFilename: "mesquite-airbnb-living-room-turnover-towel-staging.jpg",
    seoAlt: "Airbnb living room turnover with fresh folded towels staged on sofas in Mesquite NV",
    seoTitle: "Short-Term Rental Living Room Turnover & Fresh Linen Staging in Mesquite, NV",
    seoDescription:
      "Guest-ready living room reset with fresh folded towels staged, tile floors mopped, and tables and rugs refreshed.",
    highlights: [
      "Fresh towel sets folded and staged",
      "Tile floor mopping and rug vacuuming",
      "Coffee table and surface sanitizing",
    ],
    description:
      "Turnover-ready vacation rental living space with fresh linens laid out and every surface wiped for the next guests.",
  },
  {
    id: "open-concept-kitchen-living-turnover",
    title: "Open Kitchen & Living Area Rental Turnover",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-open-concept-kitchen-living-room-turnover.jpg",
    seoFilename: "mesquite-open-concept-kitchen-living-room-turnover.jpg",
    seoAlt:
      "Open concept kitchen and living room with sectional and island after rental turnover cleaning in Mesquite NV",
    seoTitle: "Open-Concept Kitchen & Living Room Turnover Cleaning in Mesquite, NV",
    seoDescription:
      "Kitchen island, bar stools, stainless appliances, sectional, and plank floors all reset between guest stays.",
    highlights: [
      "Island countertop and bar stool sanitizing",
      "Stainless appliance wipe-down",
      "Plank floor vacuum and mop",
    ],
    description:
      "A wide-open kitchen and living area cleaned top to bottom and staged for the next check-in.",
  },
  {
    id: "guest-bedroom-rental-turnover",
    title: "Guest Bedroom Turnover & Fresh Bed Making",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-vacation-rental-guest-bedroom-turnover.jpg",
    seoFilename: "mesquite-vacation-rental-guest-bedroom-turnover.jpg",
    seoAlt:
      "Vacation rental guest bedroom with freshly made bed after turnover cleaning in Mesquite NV",
    seoTitle: "Vacation Rental Guest Bedroom Turnover in Mesquite, NV",
    seoDescription:
      "Fresh linens, a neatly made bed, dusted ceiling fan, and vacuumed carpet in a guest-ready rental bedroom.",
    highlights: [
      "Fresh linen change and bed making",
      "Ceiling fan and surface dusting",
      "Carpet vacuuming and desk wipe-down",
    ],
    description:
      "A calm, spotless guest bedroom reset with fresh bedding and clean surfaces for incoming guests.",
  },
  {
    id: "themed-bedroom-airbnb-turnover",
    title: "Themed Airbnb Bedroom Refresh",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-airbnb-themed-bedroom-turnover.jpg",
    seoFilename: "mesquite-airbnb-themed-bedroom-turnover.jpg",
    seoAlt:
      "Airbnb themed bedroom with fresh bedding and clean nightstands after turnover in Mesquite NV",
    seoTitle: "Airbnb Bedroom Linen Change & Detail Clean in Mesquite, NV",
    seoDescription:
      "Crisp bedding, dusted nightstands and lamps, and freshly vacuumed carpet in a themed rental bedroom.",
    highlights: [
      "Crisp linen change and pillow staging",
      "Nightstand, lamp, and wall art dusting",
      "Carpet vacuuming",
    ],
    description: "A neatly staged themed bedroom ready for 5-star guest reviews.",
  },
  {
    id: "short-term-rental-bedroom-reset",
    title: "Short-Term Rental Bedroom Reset & Workspace Detail",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-short-term-rental-bedroom-reset.jpg",
    seoFilename: "mesquite-short-term-rental-bedroom-reset.jpg",
    seoAlt:
      "Short term rental bedroom with made bed, desk, and clean carpet after turnover in Mesquite NV",
    seoTitle: "Short-Term Rental Bedroom & Workspace Turnover in Mesquite, NV",
    seoDescription:
      "Freshly made bed, wiped desk and TV area, dusted decor, and vacuumed carpet in a bright rental bedroom.",
    highlights: [
      "Bed making with fresh linens and accent pillows",
      "Desk, TV, and decor dusting",
      "Window sill and carpet detailing",
    ],
    description: "A bright, guest-ready bedroom with a clean workspace and fresh bedding.",
  },
  {
    id: "king-bedroom-guest-ready",
    title: "King Bedroom Guest-Ready Turnover",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-airbnb-king-bedroom-guest-ready.jpg",
    seoFilename: "mesquite-airbnb-king-bedroom-guest-ready.jpg",
    seoAlt:
      "Airbnb king bedroom with fresh bedding and luggage rack after turnover cleaning in Mesquite NV",
    seoTitle: "Airbnb King Bedroom Turnover Cleaning in Mesquite, NV",
    seoDescription:
      "King bed dressed with fresh linens, luggage rack set out, and carpet and surfaces cleaned for arrival.",
    highlights: [
      "King bed linen change and staging",
      "Luggage rack and guest amenity setup",
      "Carpet vacuuming and dusting",
    ],
    description: "A welcoming king bedroom reset and staged for the next guest arrival.",
  },
  {
    id: "double-vanity-bathroom-turnover",
    title: "Double Vanity Bathroom Turnover & Towel Staging",
    category: "Short-Term Rental / Airbnb Turnover",
    location: "Mesquite, NV",
    imageUrl: "/gallery/mesquite-double-vanity-bathroom-turnover.jpg",
    seoFilename: "mesquite-double-vanity-bathroom-turnover.jpg",
    seoAlt:
      "Double vanity bathroom with granite counters and rolled towels after rental turnover in Mesquite NV",
    seoTitle: "Double Vanity Bathroom Turnover Cleaning in Mesquite, NV",
    seoDescription:
      "Granite double vanity, sinks, mirror, and plank floors cleaned with fresh rolled towels staged for guests.",
    highlights: [
      "Granite counter and sink sanitizing",
      "Streak-free mirror cleaning",
      "Fresh towel rolling and staging",
    ],
    description:
      "A sparkling double vanity bathroom with fresh towels and spotless counters, ready for guests.",
  },
];

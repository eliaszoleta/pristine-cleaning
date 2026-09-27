import * as React from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { WORK_GALLERY, type GalleryProject } from "../lib/business-data";

export function WorkShowcaseGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const total = WORK_GALLERY.length;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto sliding carousel with pause on hover
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeProject: GalleryProject = WORK_GALLERY[currentIndex] ?? WORK_GALLERY[0]!;

  return (
    <section
      id="work-gallery"
      className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Pristine Cleaning Recent Projects and Work Showcase Gallery"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-border pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Results & Turnovers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Work in Action</h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            See the transformative results of our residential deep cleans, Airbnb turnovers, and
            post-construction cleanups across Mesquite and surrounding communities.
          </p>
        </div>

        {/* Navigation arrows & slide indicators */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-muted-foreground tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project photo"
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center text-foreground transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project photo"
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-secondary flex items-center justify-center text-foreground transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Spotlight Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Featured Image Frame */}
        <div className="lg:col-span-8 relative bg-black/95 rounded-3xl overflow-hidden border border-border/70 shadow-xl group aspect-4/3 sm:aspect-16/10 flex items-center justify-center">
          <img
            key={activeProject.id}
            src={activeProject.imageUrl}
            alt={activeProject.seoAlt}
            title={activeProject.seoTitle}
            className="w-full h-full object-contain sm:object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Top overlay: badges + caption */}
          <div className="absolute top-4 left-4 right-4 flex flex-col gap-3">
            {/* Badge indicator */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground border border-accent/40 shadow-sm backdrop-blur-md">
                {activeProject.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white/90 border border-white/20 backdrop-blur-md">
                {activeProject.location}
              </span>
            </div>

            {/* Quick Caption Overlay on image */}
            <div className="text-white p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1">{activeProject.seoDescription}</p>
                </div>
                <a
                  href="#quote-section"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90 transition-colors shadow"
                >
                  <span>Request Clean</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Thumbnail list */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4 bg-card p-6 rounded-3xl border border-border shadow-xs">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                Project Details
              </span>
              <h4 className="text-xl font-bold text-foreground">{activeProject.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-border">
              <span className="text-xs font-semibold text-foreground">Highlights:</span>
              <ul className="space-y-1.5">
                {activeProject.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Thumbnails to jump directly */}
          <div className="space-y-2 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Select Project:</span>
              <span className="text-[11px] text-accent font-medium">Auto-sliding</span>
            </div>
            <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto pr-1">
              {WORK_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to project: ${item.title}`}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all group ${
                    idx === currentIndex
                      ? "border-primary ring-2 ring-accent/30 scale-105"
                      : "border-border/70 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.seoAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      idx === currentIndex
                        ? "bg-primary/10"
                        : "bg-black/20 group-hover:bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {WORK_GALLERY.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Star,
  Users,
  GraduationCap,
  Languages,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import homePagePic1 from "@/assets/homepagepic1.png";
import homePagePic2 from "@/assets/homepagepic2.png";
import homePagePic3 from "@/assets/homepagepic3.png";
import homePagePic4 from "@/assets/homepagepic4.jpeg";
import myGrannyLogo from "@/assets/mygranny-logo.svg";
import featuresPic from "@/assets/featuresPic.png";
import howItsWorkPicEng from "@/assets/howItsWorkPic.png";
import howItsWorkPicEst from "@/assets/howItsWorkPicEst.png";
import howItsWorkPicRus from "@/assets/howItsWorkPicRus.png";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Granny — Verified Grannies for Childcare & Company in Estonia" },
      {
        name: "description",
        content:
          "MTÜ My Granny connects families with warm, verified grannies for childcare, company and everyday help. Book a trusted granny in minutes.",
      },
      { property: "og:title", content: "My Granny — Verified Grannies for Families" },
      {
        property: "og:description",
        content: "Warm, verified grannies for childcare, company and everyday help across Estonia.",
      },
    ],
  }),
  component: Home,
});

const stepIcons = [Sparkles, ShieldCheck, Heart] as const;
const audienceIcons = [Users, Heart, GraduationCap, Languages, MessageCircle] as const;

function Home() {
  const { t ,language} = useLanguage();
  useTranslatedMeta(t.home.metaTitle, t.home.metaDescription);

  const howItsWorkPicImages = {
    en: howItsWorkPicEng,
    et: howItsWorkPicEst,
    ru: howItsWorkPicRus,
  };

  const howItsWorkPic = howItsWorkPicImages[language];

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            {/* <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-green shadow-sm">
              <ShieldCheck className="size-4" /> {t.home.badge}
            </p> */}
            <img className="w-[200px] h-auto" src={myGrannyLogo} />
            <h1 className="mt-6 text-4xl leading-tight font-semibold text-brand-blue md:text-5xl">
              {t.home.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t.home.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/booking">{t.common.actions.findGranny}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/booking">{t.common.actions.becomeGranny}</Link>
              </Button>
            </div>
            {/* <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {t.home.stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold text-primary">{value}</dt>
                  <dd className="text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl> */}
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-4xl border border-border shadow-lg">
              <img
                src={homePagePic4}
                alt={t.home.heroAlt}
                className="aspect-square w-full object-cover"

              />
              <img
                src={homePagePic1}
                alt={t.home.heroAlt}
                className="aspect-square w-full object-cover"

              />
              <img
                src={homePagePic2}
                alt={t.home.heroAlt}
                className="aspect-square w-full object-cover"

              />
              <img
                src={homePagePic3}
                alt={t.home.heroAlt}
                className="aspect-square w-full object-cover"

              />
            </div>

            {/* <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
              <p className="flex items-center gap-1 text-sm font-semibold text-foreground">
                <Star className="size-4 fill-secondary text-secondary" /> {t.home.rating}
              </p>
              <p className="text-xs text-muted-foreground">"{t.home.ratingQuote}"</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20 py-20">
        <h2 className="text-3xl font-semibold text-brand-blue">{t.home.audiencesTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.home.audiences.map((audience, i) => {
            const AudienceIcon = audienceIcons[i];

            return (
              <article
                key={audience.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                {/* <span className="flex size-11 items-center justify-center rounded-2xl bg-soft-pink text-primary">
                  {AudienceIcon && <AudienceIcon className="size-5" />}
                </span> */}
                <h3 className="mt-5 text-lg font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{audience.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-semibold text-brand-blue">{t.home.howTitle}</h2>
        {/* <p className="mt-3 max-w-xl text-muted-foreground">{t.home.howIntro}</p> */}
        <div className="mt-10 grid gap-6">
          <img src={howItsWorkPic} />
          {/* {t.home.steps.map((step, i) => {
            const StepIcon = stepIcons[i] ?? Sparkles;

            return (
              <article
                key={step.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-soft-pink text-primary">
                  <StepIcon className="size-5" />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-widest text-muted-foreground">
                  {t.home.stepLabel} {i + 1}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </article>
            );
          })} */}
        </div>
      </section>

      <section className="bg-soft-green py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-green">
              <ShieldCheck className="size-4" /> {t.home.safetyBadge}
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-brand-blue">{t.home.safetyTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.home.safetyText}</p>
          </div>
          <div className="">
            <img className="overflow-hidden rounded-4xl border border-border shadow-lg" src={featuresPic} />
            {/* {t.home.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {t.home.testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-3xl bg-soft-pink p-7">
              <Clock className="size-5 text-primary" aria-hidden />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-6xl px-5 pb-4 py-20">
        <div className="rounded-4xl border border-border bg-card p-10 text-center shadow-sm md:p-14">
          <h2 className="text-3xl font-semibold text-brand-blue">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.home.ctaText}</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/booking">
              {t.common.actions.sendRequest} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

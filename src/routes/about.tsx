import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShieldCheck, Users, Leaf, Target, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-community.jpg";
import whyMatters1 from "@/assets/whyMatters1.jpeg";
import whyMatters2 from "@/assets/whyMatters2.jpeg";
import whyMatters3 from "@/assets/whyMatters3.jpeg";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MTÜ My Granny — Connecting Generations in Estonia" },
      {
        name: "description",
        content:
          "MTÜ My Granny is a non-profit connecting families with verified grannies. Learn about our mission, values and verification process.",
      },
      { property: "og:title", content: "About MTÜ My Granny" },
      {
        property: "og:description",
        content: "Our mission, values and how we verify every granny in our community.",
      },
    ],
  }),
  component: About,
});

const valueIcons = [Heart, ShieldCheck, Users, Leaf] as const;

function About() {
  const { t } = useLanguage();
  useTranslatedMeta(t.about.metaTitle, t.about.metaDescription);

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="max-w-3xl text-4xl font-semibold text-brand-blue md:text-5xl">
            {t.about.title}
          </h1>
          {/* <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{t.about.intro}</p> */}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <img
          src={aboutImage}
          alt={t.about.imageAlt}
          loading="lazy"
          className="w-full rounded-4xl border border-border object-cover shadow-sm"
          width={900}
          height={700}
        />
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t.about.storyTagline}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-blue">{t.about.storyTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.about.story[0]}</p>
          {/* <Button asChild className="mt-8">
            <Link to="/booking">{t.common.actions.becomeGranny}</Link>
          </Button> */}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="space-y-4 text-muted-foreground">
          {t.about.story.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-primary pl-6 font-display text-xl font-semibold text-brand-blue">
          {t.about.storyClosing}
        </p>
      </section>

      <section className="bg-soft-green py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8">
              {/* <span className="flex size-11 items-center justify-center rounded-2xl bg-soft-pink text-primary">
                <Target className="size-5" />
              </span> */}
              <h2 className="mt-5 text-2xl font-semibold text-brand-blue">
                {t.about.missionTitle}
              </h2>
              <p className="mt-3 text-muted-foreground">{t.about.mission}</p>
            </article>
            <article className="rounded-3xl border border-border bg-card p-8">
              {/* <span className="flex size-11 items-center justify-center rounded-2xl bg-soft-pink text-primary">
                <Compass className="size-5" />
              </span> */}
              <h2 className="mt-5 text-2xl font-semibold text-brand-blue">
                {t.about.visionTitle}
              </h2>
              <p className="mt-3 text-muted-foreground">{t.about.vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-semibold text-brand-blue">{t.about.challengesTitle}</h2>
        <p className="mt-3 text-muted-foreground">{t.about.challengesIntro}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <img
            src={whyMatters1}
            alt=""
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
          />

          <img
            src={whyMatters2}
            alt=""
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
          />

          <img
            src={whyMatters3}
            alt=""
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
          />
        </div>
        {/* <ul className="mt-6 flex flex-wrap gap-3">
          {t.about.challenges.map((challenge) => (
            <li
              key={challenge}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {challenge}
            </li>
          ))}
        </ul> */}
        <p className="mt-6 max-w-2xl text-muted-foreground">{t.about.challengesText}</p>
      </section>

      {/* <section className="bg-soft-pink py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold text-brand-blue">{t.about.valuesTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value, index) => {
              const ValueIcon = valueIcons[index] ?? Heart;

              return (
                <article key={value.title} className="rounded-3xl border border-border bg-card p-7">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-soft-green text-green">
                    <ValueIcon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-semibold text-brand-blue">{t.about.verifyTitle}</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {t.about.verifySteps.map(([title, text], i) => (
            <li key={title} className="rounded-3xl border border-border bg-card p-7">
              <span className="font-display text-3xl font-semibold text-secondary">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section> */}
    </div>
  );
}

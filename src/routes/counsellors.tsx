import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Languages } from "lucide-react";
import airiPhoto from "@/assets/counsellors/airi-kartna.jpg";
import liinaPhoto from "@/assets/counsellors/liina-lamson.jpg";
import annePhoto from "@/assets/counsellors/anne-kaljas.jpg";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";

const photosById: Record<string, string> = {
  "airi-kartna": airiPhoto,
  "liina-lamson": liinaPhoto,
  "anne-kaljas": annePhoto
};

export const Route = createFileRoute("/counsellors")({
  head: () => ({
    meta: [
      { title: "Our Counsellors | My Granny" },
      {
        name: "description",
        content:
          "Meet MTÜ My Granny's peer counsellors, ready to listen, support and help you find clarity in life's challenges.",
      },
      { property: "og:title", content: "Our Counsellors | My Granny" },
      {
        property: "og:description",
        content: "Meet the peer counsellors supporting families and grannies in our community.",
      },
    ],
  }),
  component: Counsellors,
});

function Counsellors() {
  const { t } = useLanguage();
  useTranslatedMeta(t.counsellors.metaTitle, t.counsellors.metaDescription);

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-4xl font-semibold text-brand-blue md:text-5xl">
            {t.counsellors.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.counsellors.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-5 py-16">
        {t.counsellors.list.map((counsellor) => (
          <article
            key={counsellor.id}
            className="grid gap-10 rounded-4xl border border-border bg-card p-8 shadow-sm md:grid-cols-[280px_1fr] md:p-10"
          >
            <div>
              <img
                src={photosById[counsellor.id]}
                alt={counsellor.imageAlt}
                loading="lazy"
                className="aspect-3/4 w-full rounded-3xl border border-border object-cover shadow-sm"
              />
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-soft-pink p-4">
                <Languages className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t.counsellors.languagesLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {counsellor.languages.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-soft-green px-3 py-1 text-xs font-semibold text-green">
                {counsellor.role}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-brand-blue">
                {counsellor.name}
              </h2>

              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {counsellor.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-6 rounded-3xl bg-soft-green p-6 text-base font-semibold text-green">
                {counsellor.goal}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {t.counsellors.contactLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={`tel:${counsellor.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Phone className="size-4" /> {counsellor.phone}
                  </a>
                  <a
                    href={`mailto:${counsellor.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Mail className="size-4" /> {counsellor.email}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

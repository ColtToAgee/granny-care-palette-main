import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | MTÜ My Granny" },
      {
        name: "description",
        content:
          "Read the terms and conditions for using MTÜ My Granny: bookings, payments, cancellations, safety rules, privacy and liability.",
      },
      { property: "og:title", content: "Terms & Conditions | MTÜ My Granny" },
      {
        property: "og:description",
        content: "Bookings, payments, cancellations, safety and privacy terms for My Granny.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  const { t } = useLanguage();
  useTranslatedMeta(t.terms.metaTitle, t.terms.metaDescription);

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-4xl font-semibold text-brand-blue md:text-5xl">{t.terms.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.terms.intro}</p>
          <p className="mt-4 text-sm text-muted-foreground">{t.terms.updated}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[240px_1fr]">
        <nav className="h-fit rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <h2 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t.terms.onPage}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {t.terms.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-brand-blue hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          <div className="flex items-start gap-4 rounded-3xl bg-soft-green p-6">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-green" />
            <p className="text-sm text-muted-foreground">{t.terms.safety}</p>
          </div>

          {t.terms.sections.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-3xl border border-border bg-card p-7 md:p-9"
            >
              <h2 className="text-xl font-semibold text-brand-blue">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </article>
          ))}

          <p className="text-sm text-muted-foreground">
            {t.terms.questions}{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              {t.terms.contact}
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MTÜ My Granny — Talk to Our Team" },
      {
        name: "description",
        content:
          "Questions about grannies, bookings or volunteering? Contact the MTÜ My Granny team in Tallinn by email, phone or message.",
      },
      { property: "og:title", content: "Contact MTÜ My Granny" },
      {
        property: "og:description",
        content: "Reach our coordinators by email, phone or the contact form.",
      },
    ],
  }),
  component: Contact,
});

const detailIcons = [Mail, Phone, MapPin] as const;

function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  useTranslatedMeta(t.contact.metaTitle, t.contact.metaDescription);

  const details = [
    { icon: detailIcons[0], label: t.contact.details.email, value: "info@mygranny.ee" },
    {
      icon: detailIcons[1],
      label: t.contact.details.phone,
      value: "+372 55920520, +372 58596615, +372 5178959",
    },
    { icon: detailIcons[2], label: t.contact.details.office, value: t.contact.details.officeValue },
  ];

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-4xl font-semibold text-brand-blue md:text-5xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.contact.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-soft-pink text-primary">
                <d.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {d.label}
                </p>
                <p className="mt-1 text-base font-medium text-foreground">{d.value}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl bg-soft-green p-6">
            <p className="text-sm text-muted-foreground">{t.contact.nonprofit}</p>
          </div>
        </div>

        <div className="rounded-4xl border border-border bg-card p-8 shadow-sm md:p-10">
          {sent ? (
            <div className="rounded-3xl bg-soft-green p-8 text-center">
              <CheckCircle2 className="mx-auto size-10 text-green" />
              <h2 className="mt-4 text-2xl font-semibold text-green">{t.contact.successTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.successText}</p>
              <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                {t.contact.anotherMessage}
              </Button>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h2 className="text-2xl font-semibold text-brand-blue">{t.contact.formTitle}</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="cname">{t.contact.fields.name}</Label>
                  <Input id="cname" required placeholder={t.contact.placeholders.name} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cemail">{t.contact.fields.email}</Label>
                  <Input
                    id="cemail"
                    type="email"
                    required
                    placeholder={t.contact.placeholders.email}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">{t.contact.fields.subject}</Label>
                <Input id="subject" placeholder={t.contact.placeholders.subject} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cmessage">{t.contact.fields.message}</Label>
                <Textarea
                  id="cmessage"
                  rows={6}
                  required
                  placeholder={t.contact.placeholders.message}
                />
              </div>
              <Button type="submit" size="lg" className="justify-self-start">
                {t.common.actions.sendMessage}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

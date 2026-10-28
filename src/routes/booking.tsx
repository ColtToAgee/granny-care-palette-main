import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarHeart, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage, useTranslatedMeta } from "@/lib/i18n";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Granny — Requests & Applications | My Granny" },
      {
        name: "description",
        content:
          "Send a booking request to find a verified granny for your family, or apply to become a granny with MTÜ My Granny.",
      },
      { property: "og:title", content: "Book a Granny | My Granny" },
      {
        property: "og:description",
        content: "Request a verified granny for childcare, company or everyday help in Estonia.",
      },
    ],
  }),
  component: Booking,
});

function Booking() {
  const [role, setRole] = useState<"family" | "granny" | "youngster">("family");
  const [sent, setSent] = useState(false);
  const [submitButtonVisibility,setSubmitButtonVisibility] = useState(false);
  const { t } = useLanguage();
  useTranslatedMeta(t.booking.metaTitle, t.booking.metaDescription);

  async function sendRequestToEmail(form: HTMLFormElement) {
    try {
      await emailjs.sendForm(
        "service_kiektos",
        "template_7q0fgw5",
        form,
        {
          publicKey: "wObvoW27aqzHSO7Fc",
        }
      );

      setSent(true);
    } catch (error) {
      console.error("Mail cannot send", error);
    }
    setSubmitButtonVisibility(false);
  }

  return (
    <div>
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="text-4xl font-semibold text-brand-blue md:text-5xl">{t.booking.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.booking.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-4xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex flex-wrap gap-2 rounded-full bg-soft-pink p-1">
            {(["family", "granny", "youngster"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRole(option)}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${role === option
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary"
                  }`}
              >
                {option === "family"
                  ? t.booking.roleFamily
                  : option === "granny"
                    ? t.booking.roleGranny
                    : t.booking.roleYoungster}
              </button>
            ))}
          </div>

          {sent ? (
            <div className="mt-10 rounded-3xl bg-soft-green p-8 text-center">
              <CheckCircle2 className="mx-auto size-10 text-green" />
              <h2 className="mt-4 text-2xl font-semibold text-green">{t.booking.successTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.booking.successText}</p>
              <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                {t.booking.anotherRequest}
              </Button>
            </div>
          ) : (
            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitButtonVisibility(true);
                sendRequestToEmail(e.currentTarget);
              }}
            >
              <input type="hidden" name="role" value={role} />
              <div className="grid gap-2">
                <Label htmlFor="name">{t.booking.fields.name}</Label>
                <Input id="name" name="name" required placeholder={t.booking.placeholders.name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">{t.booking.fields.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.booking.placeholders.email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">{t.booking.fields.phone}</Label>
                <Input id="phone" name="phone" placeholder={t.booking.placeholders.phone} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">{t.booking.fields.city}</Label>
                <Input id="city" name="city" required placeholder={t.booking.placeholders.city} />
              </div>
              <div className="grid gap-2">
                {role == "family" ? (<>
                  <Label htmlFor="date">
                    {t.booking.fields.numberOfChildren}
                  </Label>
                  <Input id="date" name="date" type="number" placeholder="1" />
                </>) : (<>
                  <Label htmlFor="date">
                    {t.booking.fields.grannyDate}
                  </Label>
                  <Input id="date" name="date" type="date" />
                </>)}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hours">{role == "family" ? t.booking.fields.ageOfChildren : t.booking.fields.hours}</Label>
                <Input
                  id="hours"
                  name="hours"
                  type="number"
                  min={1}
                  max={40}
                  placeholder={t.booking.placeholders.hours}
                />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">
                  {role === "family"
                    ? t.booking.fields.familyMessage
                    : role === "granny"
                      ? t.booking.fields.grannyMessage
                      : t.booking.fields.youngsterMessage}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={
                    role === "family"
                      ? t.booking.placeholders.familyMessage
                      : role === "granny"
                        ? t.booking.placeholders.grannyMessage
                        : t.booking.placeholders.youngsterMessage
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitButtonVisibility}>
                  {t.common.actions.sendRequest}
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">{t.booking.consent}</p>
              </div>
            </form>
          )}
        </div>

        {/* <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-soft-green p-7">
            <ShieldCheck className="size-6 text-green" />
            <h2 className="mt-4 text-lg font-semibold text-green">{t.booking.safeTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.booking.safeText}</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <CalendarHeart className="size-6 text-primary" />
            <h2 className="mt-4 text-lg font-semibold text-foreground">{t.booking.helpTitle}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {t.booking.services.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-light" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-soft-pink p-7">
            <h2 className="text-lg font-semibold text-brand-blue">{t.booking.pricingTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.booking.pricingText}{" "}
              <span className="font-semibold text-primary">{t.booking.pricingRate}</span>,{" "}
              {t.booking.pricingRest}
            </p>
          </div>
        </aside> */}
      </section>
    </div>
  );
}

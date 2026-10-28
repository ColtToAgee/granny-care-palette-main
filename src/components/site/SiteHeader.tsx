import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/mygranny-logo.svg";
import { useLanguage, type Language } from "@/lib/i18n";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const nav = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/counsellors", key: "counsellors" },
  { to: "/booking", key: "booking" },
  { to: "/contact", key: "contact" },
  { to: "/terms", key: "terms" },
  { to: "/importantInformations", key: "importantInformations" },
  { to: "/news", key: "news"}
] as const;

const getLanguageLabel = (option: Language) => {
  switch (option) {
    case "en":
      return "ENG";

    case "et":
      return "EST";

    case "ru":
      return "RUS";

    default:
      return option;
  }
};

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="inline-flex rounded-full border border-border bg-background p-1"
      aria-label="Language"
    >
      {(["en", "et", "ru"] as const).map((option: Language) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${language === option
            ? "bg-brand-blue text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-brand-blue"
            }`}
          aria-pressed={language === option}
        >
          {getLanguageLabel(option)}
          <span className="sr-only"> {t.common.languages[option]}</span>
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoAsset}
            alt={`${t.common.brand} logo`}
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg font-semibold text-brand-blue">
            {t.common.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-soft-pink hover:text-brand-blue"
              activeProps={{ className: "bg-soft-pink text-brand-blue" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t.common.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button asChild>
            <Link to="/booking">{t.common.actions.createAccount}</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                {t.common.actions.supportUs}
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t.common.actions.supportUs}</DialogTitle>
                <DialogDescription>
                  <p>{t.common.actions.bankAccountNumber}</p>
                  <p>MTÜ My Granny EE877700771013230950</p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <button
          className="rounded-full p-2 text-brand-blue md:hidden"
          aria-label={open ? t.common.menu.close : t.common.menu.open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-5 pb-5 md:hidden">
          <nav className="flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-soft-pink hover:text-brand-blue"
                activeProps={{ className: "bg-soft-pink text-brand-blue" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {t.common.nav[item.key]}
              </Link>
            ))}
          </nav>
          <div className="mb-3">
            <LanguageSwitcher />
          </div>
          <Button asChild className="w-full">
            <Link to="/booking" onClick={() => setOpen(false)}>
              {t.common.actions.createAccount}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

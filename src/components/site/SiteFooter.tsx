import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, ShieldCheck, Youtube } from "lucide-react";
import logoAsset from "@/assets/mygranny-logo.svg";
import { useLanguage } from "@/lib/i18n";

const footerNav = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/booking", key: "booking" },
  { to: "/contact", key: "contact" },
] as const;

const socialLinks = [
  { key: "instagram", href: "https://www.instagram.com/mygranny.info/?hl=en", icon: Instagram },
  { key: "facebook", href: "https://www.facebook.com/profile.php?id=61591176460087", icon: Facebook },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/my-granny-ngo/?viewAsMember=true",
    icon: Linkedin,
  },
  { key: "youtube", href: "https://www.youtube.com/@mygrannyinfo", icon: Youtube },
] as const;

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt={`${t.common.brand} logo`}
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-lg font-semibold text-brand-blue">
              {t.common.brand}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t.footer.intro}</p>
          {/* <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-soft-green px-3 py-1.5 text-xs font-semibold text-green">
            <ShieldCheck className="size-4" /> {t.footer.verified}
          </p> */}

          <h3 className="mt-6 text-sm font-semibold text-brand-blue">{t.footer.follow}</h3>
          <div className="mt-3 flex items-center gap-3">
            {socialLinks.map(({ key, href, icon: Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
                <span className="sr-only">{t.footer.social[key]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-blue">{t.footer.pages}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {t.common.nav[item.key]}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/terms" className="hover:text-primary">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                {t.footer.feedback}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                {t.footer.newsletter}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-brand-blue">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>info@mygranny.ee</li>
            <li>+372 55920520</li>
            <li>+372 58596615</li>
          </ul>
          <h3 className="text-sm font-semibold text-brand-blue py-1">{t.common.actions.supportUs}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{t.common.actions.bankAccountNumber}</li>
            <li>MTÜ My Granny EE877700771013230950</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MTU My Granny. {t.footer.rights}
      </div>
    </footer>
  );
}

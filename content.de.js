/**
 * TEXTER-PORTFOLIO — Inhaltsdatei DEUTSCH
 * ========================================
 * Zum Übersetzen: Kopiere diese Datei als content.en.js
 * und übersetze nur die Textwerte (rechts vom Doppelpunkt).
 * NICHTS an der Struktur oder den Keys ändern.
 *
 * Letzte Aktualisierung: Juni 2026
 * Autor: André Schwarz
 */

const CONTENT = {

  // ── META & SEO ─────────────────────────────────────────────
  meta: {
    lang: "de",
    title: "André Schwarz — Freier Texter Frankfurt | Conversion Copy & Verkaufstexte",
    description: "Freier Texter Frankfurt am Main. Verkaufstexte, Landingpages, politische Programme, juristische Texte. Cambridge C1, Direktvertrieb-Hintergrund. Zweisprachig DE/EN.",
    keywords: "Texter Frankfurt, Copywriter Frankfurt, Verkaufstexte, Landingpage Texter, Conversion Copy, Ghostwriter Frankfurt",
    ogTitle: "André Schwarz — Freier Texter Frankfurt | Conversion Copy",
    ogDescription: "Verkaufstexte, Landingpages, politische Programme. Cambridge C1. Direktvertrieb. Frankfurt am Main.",
    aiDisclosure: "KI-unterstützt erstellt · Vollständig geprüft und freigegeben von André Schwarz · Gemäß Google E-E-A-T 2026",
  },

  // ── NAV ────────────────────────────────────────────────────
  nav: {
    brand: "André Schwarz",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Arbeiten",   href: "#arbeiten"   },
      { label: "Proben",     href: "arbeitsproben.html" },
    ],
    cta: { label: "Anfragen", href: "#kontakt" },
    langSwitch: { label: "EN", flag: "🇬🇧", href: "index.en.html" },
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    eyebrow: "Freier Texter · Frankfurt am Main · Conversion Copy · DE / EN",
    h1_plain: "Texte, die nicht nur gut klingen —",
    h1_em:    "sondern verkaufen.",
    lede: "Mein Hintergrund liegt im Direktvertrieb. Ich weiß aus erster Hand, welche Worte aus einem Interessenten einen Kunden machen — weil ich genau das jahrelang getan habe, bevor ich es aufgeschrieben habe.",
    cta_primary:   { label: "Projekt anfragen",         href: "#kontakt" },
    cta_secondary: { label: "Alle Arbeitsproben",       href: "arbeitsproben.html" },
    cta_pdf:       { label: "Portfolio PDF",            href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    portfolio_url_label: "Portfolio-Landingpage:",
    portfolio_url_link:  { label: "15 Projekte mit Belegen →", href: "arbeitsproben.html" },
    ai_badge: "KI-unterstützt erstellt · Vollständig geprüft und freigegeben von André Schwarz · Gemäß Google E-E-A-T 2026",
  },

  // ── LEISTUNGEN ─────────────────────────────────────────────
  leistungen: {
    label: "Schwerpunkte",
    h2: "Worauf ich spezialisiert bin",
    items: [
      {
        num: "01",
        h3: "Verkaufstexte",
        p: "Landingpages, Produktbeschreibungen und E-Mail-Strecken, optimiert auf Abschluss — nicht auf Applaus.",
      },
      {
        num: "02",
        h3: "Energie & Versorger",
        p: "Als aktiver Energieberater kenne ich Tarife, Kundeneinwände und die Sprache der Branche aus eigener Praxis.",
      },
      {
        num: "03",
        h3: "Hotellerie",
        p: "Gästekommunikation und Website-Texte aus eigener Praxis im Hotelbetrieb — mehrsprachig bis 30 Sprachen.",
      },
      {
        num: "04",
        h3: "Politik & Verwaltung",
        p: "Anträge, Programme und Positionspapiere für den Ortsbeirat Frankfurt — präzise für ein anspruchsvolles Publikum.",
      },
    ],
  },

  // ── ARBEITSPROBEN TEASER ───────────────────────────────────
  teaser: {
    count: "Portfolio · 15 Projekte · PDFs & Live-Seiten · Frankfurt am Main",
    h2: "Alle Arbeitsproben auf einen Blick",
    desc: "Politische Anträge, Ökostrom-Landingpages, KfW-Businesspläne, Vereinsgründungen, juristische Schreiben — alle mit direkten PDF-Links und Belegen.",
    cta: { label: "Alle ansehen →", href: "arbeitsproben.html" },
  },

  // ── CARDS ──────────────────────────────────────────────────
  arbeiten: {
    label: "Ausgewählte Arbeiten",
    h2: "Arbeitsproben",
    pdf_banner: { label: "Alle 10 Nischen als PDF — Portfolio herunterladen", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    cards: [
      {
        tag: "Hotellerie · Gästekommunikation",
        h3: "Willkommensbuch — Turmhotel Frankfurt",
        p: "Mehrsprachiges Willkommensbuch und Gästekommunikation für ein Frankfurter Stadthotel. Texte, die Orientierung geben und gleichzeitig die Marke tragen.",
        meta: [
          { label: "Showcase →", href: "willkommensbuch.html" },
          { label: "Konzept · Text · Mehrsprachig (DE / EN)" },
        ],
      },
      {
        tag: "Politik · Programmtext · Frankfurt",
        h3: "Wahlprogramm — Freie Wähler Frankfurt 2026",
        p: "Vollständige Neuschreibung des Wahlprogramms zur Frankfurter Kommunalwahl März 2026. Was übergeben wurde, war eine Copy-paste-Sammlung. Die Version, die heute im Internet steht, ist meine.",
        meta: [
          { label: "PDF ansehen →", href: "./Wahlprogramm-Freie-Waehler-Frankfurt-2026.pdf", external: true },
          { label: "Programmtext · Ghostwriting Frankfurt" },
        ],
      },
      {
        tag: "Politik · Verwaltungssprache · Ortsbeirat",
        h3: "Anträge im Ortsbeirat 10 — BFF Frankfurt",
        p: "Politische Anträge als Copywriter für den Ortsbeirat 10. Einstimmig angenommen — einer sogar fraktionsübergreifend von allen Parteien.",
        meta: [
          { label: "Anträge ansehen →", href: "antraege.html" },
          { label: "Antragstext · Argumentation · Amtsdeutsch" },
        ],
      },
      {
        tag: "Hotellerie · Mehrsprachig · 30 Sprachen",
        h3: "Willkommensbuch in 30 Sprachen",
        p: "Handwerklich lokalisiert für jede Kultur. Jede Sprache führt den Gast durch Check-in, WiFi, Notfälle, Parken, Frühstück, Business und Sehenswürdigkeiten.",
        meta: [
          { label: "Showcase →", href: "willkommensbuch.html" },
          { label: "30 Sprachen · Lokalisiert · Gästeerlebnis" },
        ],
      },
      {
        tag: "Tech · Produkt & Konzept",
        h3: "CROWN v10 — Value-Betting-Analyse-System",
        p: "Konzeption und textliche Ausarbeitung: Multi-Threading, Kelly-Criterion, Telegram-Bot, SQLite. Technische Themen klar und verständlich vermittelt.",
        meta: [
          { label: "Arbeitsprobe →", href: "crown-valuebet.html" },
          { label: "Produkttext · Technik verständlich erklärt" },
        ],
      },
      {
        tag: "Web · Bilingual · Social Impact",
        h3: "BanglaHilfe Deutschland",
        p: "Zweisprachige Service-Plattform (Deutsch / Bengali) für bangladeschische Zuwanderer. Verständliche Texte, die behördliche Hürden erklären.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/bangla-hilfe", external: true },
          { label: "DE / Bengali · Lead-Magnete" },
        ],
      },
      {
        tag: "Web · Wellness · GEO-optimiert 2026",
        h3: "mindful7777 — Wellness & Selbsthypnose",
        p: "Content-Strategie von Anfang an auf GEO (Generative Engine Optimization) ausgelegt — strukturiert, zitierfähig, für KI-gestützte Suche 2026.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/mindful7777", external: true },
          { label: "GEO 2026 · Wellness · Gumroad" },
        ],
      },
      {
        tag: "Agentur · Conversion Copy · KI",
        h3: "Copy Code Agency",
        p: "Agentur für digitale Produkte mit Fullstack-Entwickler: KI-CV-Optimizer, Value Bet SaaS, IT-Recruiting-Plattform. Meine Rolle: Conversion Copy, Brand & SEO.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/copy-code-agency-website/", external: true },
          { label: "Conversion Copy · KI-Integration" },
        ],
      },
      {
        tag: "Energie · Verkaufstext · Mehrsprachig",
        h3: "Energie & Ökostrom — Verkaufstexte (ASGlobal)",
        p: "Ökostrom-Landingpage gegen Greenwashing, Energiemarkt-Glossar A–Z und Recruiting-Dokument in acht Sprachen. Aus eigener Praxis als Energieberater.",
        meta: [
          { label: "Landingpage →", href: "./oekostrom-landingpage.pdf", external: true },
          { label: "Live →", href: "https://frankfurt-energie.online", external: true },
          { label: "Verkaufstext · DE + 7 Sprachen" },
        ],
      },
      {
        tag: "Fachtext · Strategie · Recht",
        h3: "Strategiepapiere & juristische Korrespondenz",
        p: "Digitalisierungs-Roadmap Turmhotel Frankfurt sowie juristische Korrespondenz als Bevollmächtigter (§823 BGB, §1 HaftPflG). Dokumente auf Anfrage.",
        meta: [
          { label: "Alle Dokumente →", href: "arbeitsproben.html" },
          { label: "Strategietext · Juristisch · auf Anfrage" },
        ],
      },
    ],
  },

  // ── BEWERBUNGSSTRIP ────────────────────────────────────────
  bewerbung: {
    label: "Für Auftraggeber & Personalverantwortliche:",
    text: "Vollständige Portfolio-Landingpage mit allen Belegen, PDFs und Live-Links:",
    url: "intelligentresponder-max.github.io/texter-portfolio/arbeitsproben.html",
    url_href: "arbeitsproben.html",
    pdf: { label: "Portfolio PDF", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
  },

  // ── WERTE ──────────────────────────────────────────────────
  werte: {
    label: "Arbeitsweise",
    h2: "Was Sie von mir bekommen",
    items: [
      {
        h3: "Vom Kunden her gedacht",
        p: "Ich denke vom Kunden Ihres Kunden her — nicht vom Lehrbuch. Jeder Satz hat eine Aufgabe. Direktvertrieb-Erfahrung macht den Unterschied.",
      },
      {
        h3: "Pünktlich & verlässlich",
        p: "Klare Absprachen, eingehaltene Deadlines, keine Floskeln. Frankfurt am Main · 100 % Homeoffice möglich.",
      },
      {
        h3: "Zweisprachig DE/EN",
        p: "Deutsch und Englisch — Cambridge C1 Advanced. Erfahrung mit Projekten in bis zu 30 Sprachen.",
      },
    ],
  },

  // ── KONTAKT ────────────────────────────────────────────────
  kontakt: {
    label: "Zusammenarbeit",
    h2_line1: "Ihr Text soll ein Ergebnis bringen —",
    h2_line2: "kein hübsches Beiwerk.",
    p: "Schreiben Sie mir kurz, worum es geht. Sie bekommen zeitnah eine ehrliche Einschätzung, ob und wie ich helfen kann.",
    cta_primary: { label: "Projekt anfragen", href: "mailto:andre.schwarz1@t-online.de" },
    cta_pdf:     { label: "Portfolio PDF herunterladen", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    name: "André Schwarz",
    role: "Freier Texter",
    city: "Frankfurt am Main",
    email: { label: "E-Mail", href: "mailto:andre.schwarz1@t-online.de" },
    phone: { label: "+49 163 469 2255", href: "tel:+491634692255" },
    links: [
      { label: "Alle Arbeitsproben", href: "arbeitsproben.html" },
      { label: "Anträge",            href: "antraege.html" },
      { label: "Willkommensbuch",    href: "willkommensbuch.html" },
      { label: "CROWN v10",          href: "crown-valuebet.html" },
      { label: "GitHub",             href: "https://github.com/intelligentresponder-max", external: true },
      { label: "Energie",            href: "https://frankfurt-energie.online", external: true },
    ],
    pdf: { label: "📄 Portfolio als PDF", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    ai_disclosure: "Inhalt dieser Website wurde mit KI-Unterstützung erstellt und vollständig von André Schwarz geprüft, überarbeitet und als eigene Arbeit freigegeben. Gemäß Google E-E-A-T und Helpful Content Guidelines 2026.",
  },

};

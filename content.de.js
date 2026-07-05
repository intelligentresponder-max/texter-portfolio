/**
 * TEXTER-PORTFOLIO — Inhaltsdatei DEUTSCH
 * ========================================
 * Letzte Aktualisierung: Juli 2026
 * Autor: André Schwarz
 */

const CONTENT = {

  // ── META & SEO ─────────────────────────────────────────────
  meta: {
    lang: "de",
    title: "André Schwarz — Freier Texter Frankfurt | Conversion Copy & Verkaufstexte",
    description: "Werbetexte, die den Leser überzeugen — für Landingpages, Sales-Emails, Facebook-Ads und Newsletter. Direktvertrieb-Hintergrund. Frankfurt am Main.",
    keywords: "Texter Frankfurt, Copywriter Frankfurt, Verkaufstexte, Landingpage Texter, Conversion Copy, Ghostwriter Frankfurt, Bewerbung Roman Mayer, Digitalisierung Hotellerie",
    ogTitle: "André Schwarz — Freier Texter Frankfurt | Conversion Copy",
    ogDescription: "Werbetexte für Coaches, Berater und Agenturen. Direktvertrieb. Frankfurt am Main. Cambridge C1.",
    aiDisclosure: "",
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
    h1_plain: "Ich habe jahrelang selbst verkauft —",
    h1_em:    "jetzt schreibe ich, wie es geht.",
    lede: "Finanzprodukte, Ökostrom, direkt beim Kunden. Ich kenne den Moment, in dem ein Satz entweder Vertrauen aufbaut oder den Lead verliert. Dieses Wissen steckt in jedem Text, den ich schreibe — für Landingpages, Ads, E-Mails und alles, was verkaufen soll, nicht nur klingen.",
    cta_primary:   { label: "Projekt anfragen",   href: "#kontakt" },
    cta_secondary: { label: "Alle Arbeitsproben", href: "arbeitsproben.html" },
    cta_pdf:       { label: "Portfolio PDF",       href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    portfolio_url_label: "Portfolio-Landingpage:",
    portfolio_url_link:  { label: "15 Projekte mit Belegen →", href: "arbeitsproben.html" },
    ai_badge: "",
  },

  // ── LEISTUNGEN ─────────────────────────────────────────────
  leistungen: {
    label: "Schwerpunkte",
    h2: "Worauf ich spezialisiert bin",
    items: [
      {
        num: "01",
        h3: "Verkaufstexte",
        p: "Landingpages, Facebook-Ads, Sales-Emails und Newsletter — optimiert auf Abschluss, nicht auf Applaus. Ein Text, der nicht verkauft, ist teure Dekoration.",
      },
      {
        num: "02",
        h3: "Coaching & Consulting",
        p: "Werbetexte für Coaches, Berater und Agenturen — Zielgruppenverständnis, das über die Oberfläche hinausgeht: Was bewegt den Leser wirklich? Was hält ihn davon ab zu kaufen?",
      },
      {
        num: "03",
        h3: "Komplexe Produkte",
        p: "Werbetexte für erklärungsbedürftige Produkte — technische Sachverhalte so aufbereitet, dass sie auch ohne Vorkenntnisse überzeugen.",
      },
      {
        num: "04",
        h3: "Psychologie & Überzeugung",
        p: "Ich verstehe, was Menschen dazu bringt zu handeln. Das ist die Basis jedes Werbetexts — und der Grund, warum meine Texte nicht nur klingen, sondern wirken.",
      },
    ],
  },

  // ── ARBEITSPROBEN TEASER ───────────────────────────────────
  teaser: {
    count: "Portfolio · 15 Projekte · PDFs & Live-Seiten · Frankfurt am Main",
    h2: "Alle Arbeitsproben auf einen Blick",
    desc: "Wahlprogramme, Landingpages, politische Anträge, Hoteldokumentation in 30 Sprachen — alle mit direkten PDF-Links und nachweisbaren Ergebnissen.",
    cta: { label: "Alle ansehen →", href: "arbeitsproben.html" },
  },

  // ── CARDS ──────────────────────────────────────────────────
  arbeiten: {
    label: "Ausgewählte Arbeiten",
    h2: "Arbeitsproben",
    pdf_banner: { label: "Alle Nischen als PDF — Portfolio herunterladen", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    cards: [
      {
        tag: "Hotellerie · Gästekommunikation · 30 Sprachen",
        h3: "Willkommensbuch — Turmhotel Frankfurt",
        p: "Mehrsprachiges Willkommensbuch (30 Sprachen) für ein Frankfurter Stadthotel. Check-in, WLAN, Notfälle, Sehenswürdigkeiten — handwerklich lokalisiert für jede Kultur, nicht maschinell übersetzt.",
        meta: [
          { label: "Showcase →", href: "willkommensbuch.html" },
          { label: "Konzept · Text · 30 Sprachen" },
        ],
      },
      {
        tag: "Politik · Programmtext · Ghostwriting Frankfurt",
        h3: "Wahlprogramm — Freie Wähler Frankfurt 2026",
        p: "Vollständige Neuschreibung des Wahlprogramms zur Frankfurter Kommunalwahl März 2026. Stadtentwicklung, Verkehr, Soziales, Sicherheit — recherchiert, strukturiert, in politisch tragfähige Sprache übersetzt. Die Version, die heute im Internet steht, ist meine.",
        meta: [
          { label: "PDF ansehen →", href: "./Wahlprogramm-Freie-Waehler-Frankfurt-2026.pdf", external: true },
          { label: "Programmtext · Ghostwriting" },
        ],
      },
      {
        tag: "Politik · Antragstexte · Ortsbeirat Frankfurt",
        h3: "Die Weinbahnstraße — Text, der Fakten schafft",
        p: "Jahrelang konnten sich die Altparteien nicht einigen, in welche Richtung die Einbahnstraße gehen soll. Bei unserem Antrag war das anders — wir gaben die Richtung vor. Fünfmal vertagt, einmal neu geschrieben, einstimmig angenommen. Anwohner und alle Fraktionen haben sich bedankt.",
        meta: [
          { label: "Case Study →", href: "case-studies/weinstrasse.html" },
          { label: "Alle Anträge →", href: "antraege.html" },
          { label: "Antragstexte · Argumentation · nachweisbare Ergebnisse" },
        ],
      },
      {
        tag: "Fachtext · Komplexe Materie · Entscheidungsvorlage",
        h3: "Komplexe Materie einfach erklärt — Turmhotel Frankfurt",
        p: "PMS-Evaluation, Prozessanalyse, digitale Transformation — aufbereitet als klare Entscheidungsvorlage für die Geschäftsführung. Zeigt: Ich arbeite mich in fremde Themengebiete ein und bringe das Ergebnis auf den Punkt.",
        meta: [
          { label: "Alle Dokumente →", href: "arbeitsproben.html" },
          { label: "Fachtext · Recherche · auf Anfrage" },
        ],
      },
      {
        tag: "Tech · Produktkommunikation · Komplexe Themen",
        h3: "Technische Systeme klar erklären — CROWN v10",
        p: "Produkttext für ein datengetriebenes Analyse-System mit Multi-Threading, Kelly-Criterion und Telegram-Integration — technische Tiefe, verständlich geschrieben. Komplexe Materie so aufbereitet, dass sie auch ohne Vorkenntnisse überzeugt.",
        meta: [
          { label: "Arbeitsprobe →", href: "crown-valuebet.html" },
          { label: "Produkttext · Technik verständlich · B2C" },
        ],
      },
      {
        tag: "Zielgruppenverständnis · Erklärungstext · Bilingual",
        h3: "BanglaHilfe Deutschland",
        p: "Zweisprachige Plattform (Deutsch / Bengali): Behördenwege, Visa, Sozialleistungen — erklärt für Menschen, die komplexe Inhalte in einfacher Sprache brauchen. Zeigt Zielgruppenverständnis jenseits der Komfortzone.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/bangla-hilfe", external: true },
          { label: "Erklärungstext · Zielgruppenverständnis · DE/Bengali" },
        ],
      },
      {
        tag: "Sales-Funnel · Coaching · Wellness",
        h3: "mindful7777 — Sales-Funnel für ein Coaching-Produkt",
        p: "Kompletter Sales-Funnel für ein Wellness- und Selbsthypnose-Angebot: Lead-Magnet, Landingpage, E-Mail-Sequenz, Gumroad-Shop. Vom ersten Kontakt bis zum Kauf — jeder Schritt durchdacht und getextet.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/mindful7777", external: true },
          { label: "Sales-Funnel · Lead-Magnet · E-Mail-Copy" },
        ],
      },
      {
        tag: "Agentur · Conversion Copy · KI-Produkte",
        h3: "Copy Code Agency",
        p: "Digitalagentur mit Fullstack-Entwickler-Partner: KI-CV-Optimizer, Value Bet SaaS, IT-Recruiting-Plattform. Meine Rolle: Conversion Copy, Brand und SEO. Zeigt: Ich arbeite mit Entwicklern auf Augenhöhe.",
        meta: [
          { label: "Live →", href: "https://intelligentresponder-max.github.io/copy-code-agency-website/", external: true },
          { label: "Conversion Copy · KI-Integration" },
        ],
      },
      {
        tag: "Energie · Verkaufstext · Mehrsprachig",
        h3: "Energie & Ökostrom — Verkaufstexte (ASGlobal)",
        p: "Ökostrom-Landingpage, Energiemarkt-Glossar A–Z und Recruiting-Dokument in acht Sprachen. Aus eigener Praxis als Energieberater — Branchensprache, die sitzt.",
        meta: [
          { label: "Live →", href: "https://frankfurt-energie.online", external: true },
          { label: "Verkaufstext · DE + 7 Sprachen" },
        ],
      },
      {
        tag: "Fachtext · Strategie · Recht",
        h3: "Strategiepapiere & juristische Korrespondenz",
        p: "Juristische Korrespondenz als Bevollmächtigter sowie Vereinsgründung mit KfW-Businessplan. Präzise Sprache, die rechtlich standhält — und trotzdem lesbar bleibt.",
        meta: [
          { label: "Alle Dokumente →", href: "arbeitsproben.html" },
          { label: "Juristisch · Fachtext · auf Anfrage" },
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
        p: "Ich denke vom Kunden Ihres Kunden her — nicht vom Lehrbuch. Jeder Satz hat eine Aufgabe. Direktvertrieb-Erfahrung macht den Unterschied zwischen Texten, die klingen, und Texten, die kaufen lassen.",
      },
      {
        h3: "Deadline ist Deadline",
        p: "Keine Nachverhandlung, kein stilles Verschieben. Wer mir ein Datum gibt, bekommt die Datei zu diesem Datum — oder vorher.",
      },
      {
        h3: "Zweisprachig DE/EN",
        p: "Deutsch und Englisch — Cambridge C1 Advanced. Ich lese US-Direct-Response-Vorlagen im Original und weiß, was Ogilvy, Sugarman und Caples meinen.",
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
      { label: "Weinbahnstraße Case Study", href: "case-studies/weinstrasse.html" },
      { label: "Willkommensbuch",    href: "willkommensbuch.html" },
      { label: "CROWN v10",          href: "crown-valuebet.html" },
      { label: "GitHub",             href: "https://github.com/intelligentresponder-max", external: true },
    ],
    pdf: { label: "📄 Portfolio als PDF", href: "./Portfolio_Andre_Schwarz_v2.pdf" },
    ai_disclosure: "KI-unterstützt · geprüft und freigegeben von André Schwarz · E-E-A-T 2026.",
  },

};

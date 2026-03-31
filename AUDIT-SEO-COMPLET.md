# AUDIT SEO COMPLET — Homologation VP
**Site :** homologation-vp.fr
**Dernière mise à jour :** 31 mars 2026 (session 4 — audit complet)
**Score global : 8.5 / 10**

---

## LÉGENDE
- ✅ Fait et correct
- ⚠️ Présent mais à améliorer
- ❌ Absent ou incorrect
- 🔴 CRITIQUE (impact direct sur SEO ou partage social)
- 🟠 IMPORTANT (impact significatif)
- 🟡 AMÉLIORATION (bonus de qualité)

---

## RÉSUMÉ EXÉCUTIF

| Domaine | Score | Statut |
|---------|-------|--------|
| SEO On-page (title, meta, H1) | 9/10 | ✅ 4 meta descriptions trop courtes |
| Canonical & robots | 10/10 | ✅ Parfait |
| Open Graph & Twitter Card | 8/10 | ⚠️ Complet mais image OG manquante en .jpg |
| JSON-LD Structured Data | 9/10 | ⚠️ Offer absent sur tarifs.html |
| robots.txt | 10/10 | ✅ Excellent (crawlers IA autorisés) |
| sitemap.xml | 10/10 | ✅ 17 URLs cohérentes |
| Sécurité (.htaccess) | 8/10 | ⚠️ Manque www redirect |
| Performance | 8/10 | ⚠️ lazy loading absent, GA absent |
| Responsive / Mobile | 10/10 | ✅ Excellent |
| Accessibilité (ARIA) | 9/10 | ⚠️ Skip link absent |
| Contenu & mots-clés | 9/10 | ✅ Riche et bien densifié |
| Conversion (CRO) | 8/10 | ✅ Quiz, WhatsApp, formulaire |
| GEO (IA crawlers) | 10/10 | ✅ robots.txt + JSON-LD + FAQ |
| Fichiers essentiels | 6/10 | 🔴 3 fichiers critiques manquants |

---

## PARTIE 1 — AUDIT PAGE PAR PAGE

### index.html (Page d'accueil)

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Homologation VASP Dériv-VP en 48h \| Homologation VP — Agréé ANTS" (80 car.) |
| Meta description | ✅ | 155 car. — mot-clé + CTA "Devis gratuit" |
| H1 unique | ✅ | "L'homologation de votre véhicule en 48 heures." |
| H2/H3 | ✅ | Bien structurés avec mots-clés secondaires |
| Canonical | ✅ | https://homologation-vp.fr/ |
| Meta robots | ⚠️ | Absent (index/follow implicite — OK mais à expliciter) |
| Densité mots-clés | ✅ | "homologation" ~25x, "VASP" ~10x, "Dériv-VP" ~8x |
| Longueur contenu | ✅ | ~3 500 mots |
| Liens internes | ✅ | ~18 liens vers pages et blog |
| Balise lang="fr" | ✅ | Présente |
| Open Graph | ✅ | Complet : type, title, desc, image 1200×630, url, site_name, locale |
| Twitter Card | ✅ | summary_large_image + title + desc + image |
| JSON-LD | ✅ | Organization + WebSite + FAQPage + BreadcrumbList |
| Breadcrumb visible | ✅ | Présent |
| loading="lazy" images | ❌ | Absent sur images sous le fold |
| Skip link | ❌ | Absent |
| Preconnect fonts | ✅ | Présent |
| Script defer | ✅ | `<script src="js/main.js" defer>` |

---

### a-propos.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "À propos d'Homologation VP \| Agréé ANTS n°228833 depuis 2016" (66 car.) |
| Meta description | ✅ | 154 car. |
| H1 unique | ✅ | "Qui sommes-nous ?" |
| Canonical | ✅ | https://homologation-vp.fr/a-propos.html |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD | ✅ | BreadcrumbList |

---

### carte-grise.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Carte Grise en Ligne : Changement, Duplicata, Mutation \| Homologation VP" (78 car.) |
| Meta description | 🟠 ⚠️ | **112 car. — TROP COURT** (idéal 150-160) — à allonger |
| H1 unique | ✅ | "Votre carte grise en ligne, sans passer par la préfecture." |
| Canonical | ✅ | https://homologation-vp.fr/carte-grise.html |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD | ✅ | Service + BreadcrumbList |
| Longueur contenu | ✅ | ~3 200 mots |

---

### contact.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Contact Homologation VP — Devis Gratuit \| Bordeaux" (58 car.) |
| Meta description | ✅ | 142 car. |
| H1 unique | ✅ | "Parlons de votre projet d'homologation." |
| Canonical | ✅ | https://homologation-vp.fr/contact.html |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD | ✅ | LocalBusiness avec adresse, tél, email, horaires |
| Formulaire | ✅ | Formspree + validation JS |
| Google Maps iframe | ✅ | Présent avec title et aria-label |

---

### homologation-vasp.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Homologation VASP : Transformer son Utilitaire en 5 Places \| Homologation VP" (84 car.) |
| Meta description | 🟠 ⚠️ | **127 car. — TROP COURT** — à allonger |
| H1 unique | ✅ | "Homologation VASP : votre utilitaire légalement transformé en 5 places." |
| Canonical | ✅ | Correct |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD | ✅ | Service + AggregateOffer + HowTo + BreadcrumbList |
| Longueur contenu | ✅ | ~4 500 mots — EXCELLENT |
| FAQ section | ✅ | Présente avec JSON-LD FAQPage |

---

### homologation-deriv-vp.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Homologation Dériv-VP : Reclassification Véhicule Dérivé \| Homologation VP" (79 car.) |
| Meta description | 🟠 ⚠️ | **123 car. — TROP COURT** — à allonger |
| H1 unique | ✅ | "Homologation Dériv-VP : la reclassification officielle de votre véhicule." |
| Canonical | ✅ | Correct |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD | ✅ | Service + AggregateOffer + BreadcrumbList |
| Tableau comparatif | ✅ | VASP vs Dériv-VP bien balisé (thead/tbody) |

---

### tarifs.html

| Critère | Statut | Valeur exacte |
|---------|--------|---------------|
| Title | ✅ | "Tarifs Homologation VASP et Dériv-VP \| Homologation VP" (62 car.) |
| Meta description | 🟠 ⚠️ | **130 car. — TROP COURT** — à allonger |
| H1 unique | ✅ | "Des tarifs clairs, sans frais cachés." |
| Canonical | ✅ | Correct |
| Open Graph / Twitter | ✅ | Complet |
| JSON-LD Offer/Price | 🟠 ❌ | **ABSENT** — ajouter schema Offer/PriceSpecification pour rich results |

---

### mentions-legales.html & politique-confidentialite.html

| Critère | Statut | Détail |
|---------|--------|--------|
| Meta robots | ✅ | noindex, follow — CORRECT |
| Canonical | ✅ | Correct |
| Contenu mentions légales | ✅ | 9 sections : éditeur, hébergeur, propriété, CNIL... |
| Contenu RGPD | ✅ | 9 sections : droits, DPO, cookies, durée conservation... |

---

### 404.html

| Critère | Statut | Détail |
|---------|--------|--------|
| Meta robots | ✅ | noindex, follow |
| Canonical | ✅ | Pointe vers homepage (standard) |
| Déclaration .htaccess | ✅ | `ErrorDocument 404 /404.html` |
| Contenu utile | ✅ | Navigation + CTA WhatsApp |

---

### blog/index.html

| Critère | Statut | Détail |
|---------|--------|--------|
| Title | ✅ | "Blog Homologation VP — Guides et Conseils sur l'Homologation" (67 car.) |
| Meta description | ✅ | 150 car. — PARFAIT |
| H1 unique | ✅ | "Guides et conseils sur l'homologation de véhicules" |
| JSON-LD | ⚠️ | BreadcrumbList uniquement — CollectionPage schema absent |
| Articles listés | ✅ | 6 articles avec catégorie, date, temps de lecture |

---

### Articles de blog (6 articles)

| Page | Title | Meta desc | H1 | JSON-LD |
|------|-------|-----------|-----|---------|
| guide-homologation-vasp.html | ✅ 67 car. | ✅ 142 car. | ✅ | ✅ Article + BC |
| cout-homologation-vasp.html | ✅ 70 car. | ✅ 129 car. | ✅ | ✅ Article + BC |
| difference-vasp-deriv-vp.html | ✅ 62 car. | ✅ 130 car. | ✅ | ✅ Article + BC |
| documents-homologation.html | ✅ 70 car. | ✅ 133 car. | ✅ | ✅ Article + BC |
| homologation-distance.html | ✅ 73 car. | ✅ 124 car. | ✅ | ✅ Article + BC |
| utilitaire-5-places-legislation.html | ✅ 74 car. | ✅ 121 car. | ✅ | ✅ Article + BC |

Tous les articles : ✅ Open Graph + Twitter Card + Breadcrumb visible + Article schema.

---

## PARTIE 2 — AUDIT FICHIERS TECHNIQUES

### robots.txt — Score : 10/10 ✅

| Critère | Statut |
|---------|--------|
| Syntaxe correcte | ✅ |
| Sitemap déclaré | ✅ `Sitemap: https://homologation-vp.fr/sitemap.xml` |
| Crawlers IA autorisés | ✅ GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, Google-Extended, PerplexityBot, Anthropic-AI, CCBot |
| Pages sensibles bloquées | ✅ /admin/ + /espace-client/ |
| Accès global autorisé | ✅ `User-agent: *` + `Allow: /` |

---

### sitemap.xml — Score : 10/10 ✅

| Critère | Statut |
|---------|--------|
| Format XML valide | ✅ |
| Nombre d'URLs | ✅ 17 URLs — cohérent avec les 17 pages HTML |
| Toutes les pages indexables | ✅ Cohérence parfaite HTML ↔ Sitemap |
| 404 absente du sitemap | ✅ Correct |
| Dates lastmod récentes | ✅ Mars 2026 |
| Priorités logiques | ✅ Homepage 1.0, services 0.9, contact 0.8, légales 0.3 |
| changefreq logiques | ✅ Weekly/Monthly/Yearly |

---

### .htaccess — Score : 8/10

| Critère | Statut | Détail |
|---------|--------|--------|
| HTTPS forcé (301) | ✅ | RewriteCond HTTPS off |
| Redirection www | 🟠 ❌ | **ABSENT** — risque de duplicate content www/non-www |
| Trailing slash | ⚠️ | Non configuré |
| X-Frame-Options SAMEORIGIN | ✅ | |
| X-Content-Type-Options nosniff | ✅ | |
| X-XSS-Protection | ✅ | |
| Referrer-Policy | ✅ | strict-origin-when-cross-origin |
| HSTS | ✅ | max-age=31536000 + includeSubDomains + preload |
| Permissions-Policy | ✅ | camera, microphone, geolocation, payment désactivés |
| Content-Security-Policy | ✅ | Présente — contient `unsafe-inline` pour style (acceptable) |
| Masquage info serveur | ✅ | X-Powered-By + Server supprimés |
| Fichiers sensibles bloqués | ✅ | .sql, .log, .env, .git, .htpasswd, fichiers cachés |
| Compression GZIP | ✅ | HTML, CSS, JS, JSON, SVG, XML |
| Cache navigateur | ✅ | HTML 1h, CSS/JS 1 an, images 1 an, fonts 1 an |
| ETags supprimés | ✅ | |
| Charset UTF-8 | ✅ | |
| Page 404 | ✅ | ErrorDocument 404 /404.html |

---

### CSS (styles.css — 3 410 lignes) — Score : 9/10

| Critère | Statut | Détail |
|---------|--------|--------|
| Variables CSS | ✅ | --navy, --orange, --green, --dark, --font-head, --r-sm, --sh-sm... |
| Responsive (media queries) | ✅ | 12 breakpoints : 480, 640, 760, 860, 900, 1100px |
| Mobile-first | ✅ | Design adaptatif complet |
| Focus visible (accessibilité) | ✅ | `.btn:focus-visible { outline: 3px solid var(--orange) }` |
| Print stylesheet | 🟡 ❌ | **ABSENT** — @media print non configuré |
| CSS minifié | ⚠️ | Non minifié (OK en dev, à minifier en production) |

---

### JavaScript (main.js — 551 lignes) — Score : 9/10

| Module | Statut |
|--------|--------|
| Menu hamburger mobile | ✅ |
| Smooth scroll | ✅ |
| Animations IntersectionObserver | ✅ |
| FAQ accordion (ARIA) | ✅ |
| Formulaire contact (validation + Formspree) | ✅ |
| Cookie consent RGPD (localStorage) | ✅ |
| WhatsApp FAB + tooltip | ✅ |
| Compteurs animés (requestAnimationFrame) | ✅ |
| Quiz eligibilité multi-étapes | ✅ |
| Google Analytics 4 | 🟠 ❌ ABSENT |
| Erreurs / TODO dans le code | ✅ Aucun |
| Performance (passive listeners) | ✅ |

---

### Fichiers — Présence & État

| Fichier | Statut | Priorité |
|---------|--------|---------|
| robots.txt | ✅ Présent | — |
| sitemap.xml | ✅ Présent | — |
| .htaccess | ✅ Présent | — |
| css/styles.css | ✅ Présent | — |
| js/main.js | ✅ Présent | — |
| favicon.svg | ✅ Présent | — |
| **favicon.ico** | 🔴 ❌ ABSENT | CRITIQUE — navigateurs anciens |
| **img/apple-touch-icon.png** | 🔴 ❌ ABSENT | CRITIQUE — iOS/bookmark |
| **img/og-homologation-vp.jpg** | 🔴 ❌ ABSENT | CRITIQUE — HTML pointe vers .jpg mais seul .svg existe → prévisualisations réseaux sociaux cassées |
| manifest.json | ⚠️ Absent | Optionnel (PWA) |

---

## PARTIE 3 — CHECKLIST GLOBALE ✅ / ❌

### SEO Technique de base
- [x] Title unique sur toutes les pages (17/17)
- [x] Meta description sur toutes les pages (17/17)
- [x] Un seul H1 par page (17/17)
- [x] Canonical HTTPS sur toutes les pages
- [x] Balise `lang="fr"` sur toutes les pages
- [x] Charset UTF-8 + Viewport
- [x] Meta robots noindex sur pages légales et 404

### Partage social (OG + Twitter)
- [x] og:title sur toutes les pages
- [x] og:description sur toutes les pages
- [x] og:url sur toutes les pages
- [x] og:type sur toutes les pages
- [x] og:site_name sur toutes les pages
- [x] og:locale (fr_FR) sur toutes les pages
- [x] og:image:width (1200) + og:image:height (630)
- [x] Twitter Card summary_large_image
- [ ] **og:image en .jpg réellement existant** ← 🔴 À corriger

### Structured Data JSON-LD
- [x] Organization + WebSite sur homepage
- [x] FAQPage sur homepage
- [x] BreadcrumbList sur toutes les pages (sauf homepage)
- [x] LocalBusiness sur contact.html
- [x] Service + AggregateOffer sur pages de service
- [x] HowTo sur homologation-vasp.html
- [x] Article + datePublished + dateModified sur tous les articles blog
- [ ] **Offer/PriceSpecification sur tarifs.html** ← 🟠 Manquant

### Fichiers techniques
- [x] robots.txt avec crawlers IA (GEO)
- [x] sitemap.xml complet (17 URLs)
- [x] .htaccess complet (HTTPS, sécurité, GZIP, cache)
- [x] Page 404 personnalisée
- [x] favicon.svg
- [ ] **favicon.ico** ← 🔴 Manquant
- [ ] **apple-touch-icon.png** ← 🔴 Manquant
- [ ] **og-homologation-vp.jpg** (1200×630) ← 🔴 Manquant

### Sécurité
- [x] HTTPS forcé (301)
- [x] HSTS (1 an + preload)
- [x] X-Frame-Options, X-Content-Type, X-XSS-Protection
- [x] Content-Security-Policy
- [x] Permissions-Policy
- [x] Fichiers sensibles bloqués
- [x] Info serveur masquée
- [ ] **Redirection www → non-www** ← 🟠 Manquant

### Performance
- [x] GZIP pour HTML/CSS/JS/SVG
- [x] Cache navigateur (1h HTML, 1 an assets)
- [x] ETags supprimés
- [x] Preconnect Google Fonts
- [x] Script JS en defer
- [ ] **loading="lazy" sur images** ← 🟠 Manquant
- [ ] **CSS/JS minifiés** ← 🟡 Optionnel en prod

### Responsive & Mobile
- [x] Viewport meta tag
- [x] 12 breakpoints CSS
- [x] Menu hamburger mobile
- [x] Typo fluide avec clamp()
- [x] Images max-width: 100%

### Accessibilité
- [x] ARIA labels sur navigation, boutons, formulaires
- [x] Balises sémantiques (header, main, footer, nav, article)
- [x] Focus visible (outline 3px orange)
- [x] rel="noopener noreferrer" sur liens externes
- [ ] **Skip link "Aller au contenu"** ← 🟡 Manquant

### Contenu & Conversion
- [x] FAQ section avec JSON-LD
- [x] Cookie consent RGPD
- [x] WhatsApp FAB
- [x] Formulaire de contact (Formspree + validation JS)
- [x] Quiz eligibilité multi-étapes
- [x] Mentions légales + Politique de confidentialité complètes
- [x] Blog avec 6 articles optimisés
- [x] Compteurs animés (2400+ véhicules, 4.7/5)
- [ ] **Google Analytics 4** ← 🟠 Manquant
- [ ] **Images** sur pages de service ← 🟠 Manquant

### GEO (Generative Engine Optimization)
- [x] Crawlers IA autorisés dans robots.txt
- [x] FAQ complètes pour extraction LLM
- [x] JSON-LD riche avec données factuelles
- [x] Contenu structuré et chiffré (ANTS n°228833, 2400+ véhicules)

---

## PARTIE 4 — PLAN D'ACTION PRIORISÉ

### 🔴 AVANT la mise en ligne (bloquant)

| # | Tâche | Fichier | Temps |
|---|-------|---------|-------|
| 1 | Créer `img/og-homologation-vp.jpg` (1200×630px) — exporter le SVG existant | Toutes les pages | 15 min |
| 2 | Créer `favicon.ico` (16×16 + 32×32) | Racine | 5 min |
| 3 | Créer `img/apple-touch-icon.png` (180×180px) | Racine/img | 5 min |

### 🟠 Semaine 1 après mise en ligne

| # | Tâche | Fichier | Temps |
|---|-------|---------|-------|
| 4 | Allonger meta description de `carte-grise.html` (112→155 car.) | carte-grise.html | 5 min |
| 5 | Allonger meta description de `homologation-vasp.html` (127→155 car.) | homologation-vasp.html | 5 min |
| 6 | Allonger meta description de `homologation-deriv-vp.html` (123→155 car.) | homologation-deriv-vp.html | 5 min |
| 7 | Allonger meta description de `tarifs.html` (130→155 car.) | tarifs.html | 5 min |
| 8 | Ajouter JSON-LD Offer/PriceSpecification sur `tarifs.html` | tarifs.html | 15 min |
| 9 | Ajouter redirection www→non-www dans .htaccess | .htaccess | 5 min |
| 10 | Connecter Google Analytics 4 | Toutes les pages + main.js | 30 min |
| 11 | Soumettre le sitemap à Google Search Console | External | 10 min |
| 12 | Ajouter `loading="lazy"` sur images sous le fold | Toutes les pages | 15 min |

### 🟡 Semaine 2-4 (optimisations)

| # | Tâche |
|---|-------|
| 13 | Ajouter skip link "Aller au contenu principal" (accessibilité WCAG) |
| 14 | Ajouter `@media print` dans styles.css |
| 15 | Ajouter meta robots="index, follow" explicite sur pages principales |
| 16 | Créer compte Google Business Profile |
| 17 | Vérifier Core Web Vitals (PageSpeed Insights) |
| 18 | Minifier CSS et JS en production |
| 19 | Ajouter CollectionPage schema sur blog/index.html |
| 20 | Ajouter des photos de véhicules sur les pages service |

---

## NOTES IMPORTANTES

**1. Image OG (URGENT)**
Toutes les balises `<meta property="og:image">` pointent vers `https://homologation-vp.fr/img/og-homologation-vp.jpg` mais ce fichier n'existe qu'en `.svg`. Résultat : quand on partage un lien sur LinkedIn, Facebook, WhatsApp — **aucune image ne s'affiche**. C'est le problème le plus urgent.

**2. www vs non-www**
Sans redirection .htaccess, Google peut indexer `www.homologation-vp.fr` ET `homologation-vp.fr` comme deux sites distincts → duplicate content. Ajouter avant ou juste après la mise en ligne :
```apache
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]
```

**3. Google Analytics**
Sans GA4, impossible de mesurer le trafic, les conversions, ni l'efficacité des CTAs. À connecter immédiatement après la mise en ligne.

**4. Formulaire de contact**
Le formulaire est branché sur Formspree (`action="https://formspree.io/f/xnjododa"`). ✅ Fonctionnel.

---

*Audit réalisé le 31 mars 2026 — Basé sur l'analyse complète des 17 pages HTML + robots.txt + sitemap.xml + .htaccess + styles.css + main.js*

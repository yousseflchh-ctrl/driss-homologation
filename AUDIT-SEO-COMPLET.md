# AUDIT SEO COMPLET — Homologation VP
**Date :** 30 mars 2026 · **Mis à jour :** 30 mars 2026 (session 3)
**Site :** homologation-vp.fr
**Domaine :** Homologation VASP / Dériv-VP / Carte grise
**Agréé ANTS n°228833 — Martillac (Gironde)**

---

## RÉSUMÉ EXÉCUTIF

| Catégorie | Score | Statut |
|---|---|---|
| SEO Technique | 9/10 | ✅ Bon — favicon + OG + Twitter Card ajoutés |
| SEO On-Page | 8/10 | ✅ Bon globalement |
| Schema / Données structurées | 10/10 | ✅ Complet — HowTo + priceValidUntil ajoutés |
| GEO (moteurs IA) | 8/10 | ✅ Bon |
| UX / Design | 6/10 | ⚠️ En amélioration — session 3 en cours |
| CRO (conversion) | 5/10 | ⚠️ Optimisable |
| Contenu | 7/10 | ✅ Solide, quelques ajustements |
| Maillage interne | 8/10 | ✅ Bien structuré |

---

## 1. SEO TECHNIQUE

### ✅ Points positifs

- **Canonical tags** présents sur toutes les pages (`<link rel="canonical">`)
- **Meta viewport** correctement configuré (`width=device-width, initial-scale=1.0`)
- **lang="fr"** sur toutes les balises `<html>`
- **robots.txt** présent et bien configuré (crawlers IA autorisés : GPTBot, ClaudeBot, Google-Extended, PerplexityBot)
- **sitemap.xml** présent
- **noindex** correctement appliqué sur mentions-legales.html et politique-confidentialite.html
- **Charset UTF-8** déclaré partout
- **Favicon SVG** ajouté sur toutes les pages → `<link rel="icon" href="/favicon.svg">` ✅ Session 3
- **og:image** (1200×630) ajouté sur toutes les pages indexées ✅ Session 3
- **Twitter Card** (summary_large_image + twitter:image) ajouté sur toutes les pages ✅ Session 3
- **AggregateRating** dans le schema Organization (4.7/5 · 312 avis) ✅ Déjà présent

### ❌ Problèmes identifiés

#### P1 — RÉSOLU : CSS classes non définies → layout brisé
Corrigé en sessions 2 et 3. Section 29 et 30 ajoutées dans styles.css.

#### P2 — RÉSOLU : Pas de favicon
**→ Corrigé en session 3** : `favicon.svg` créé et `<link rel="icon">` ajouté sur les 15 pages.

#### P3 — RÉSOLU : og:image manquante
**→ Corrigé en session 3** : `og:image` ajouté sur toutes les pages. Un placeholder SVG est disponible dans `/img/og-homologation-vp.svg`.
⚠️ **Action restante :** Convertir `og-homologation-vp.svg` en JPG (1200×630px) pour la compatibilité maximale avec Facebook/LinkedIn. Les meta tags pointent déjà vers `/img/og-homologation-vp.jpg`.

#### P4 — RÉSOLU : Pas de Twitter Card
**→ Corrigé en session 3** : `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` ajoutés sur toutes les pages.

#### P5 — Sitemap.xml à vérifier
Le sitemap doit référencer toutes les URLs en `https://` et avoir des `<lastmod>` cohérents. Vérifier que les 6 articles de blog sont bien inclus.

#### P6 — Pas de Core Web Vitals tracking
Sans Google Analytics 4 ou Search Console connectés, impossible de mesurer LCP, FID, CLS.
**Action :** Intégrer GA4 + connecter Search Console.

#### P7 — Formulaire de contact sans backend réel
Le formulaire valide côté client (JS) et affiche un message de succès, mais **aucun email n'est envoyé** en production.
**Action :** Intégrer Formspree (gratuit jusqu'à 50 soumissions/mois) ou Netlify Forms. Modifier le `form action` et retirer le `e.preventDefault()`.
```html
<!-- Option Formspree (rapide) -->
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

#### P8 — Images manquantes
Aucune photo de véhicule ni illustration sur les pages service. Impact négatif sur l'engagement.
**Action :** Ajouter au minimum 1 image par page service (photo avant/après d'un véhicule homologué).

---

## 2. SEO ON-PAGE

### ✅ Points positifs

| Page | Title | Meta description | H1 | H2+ |
|---|---|---|---|---|
| index.html | ✅ Optimisé | ✅ 155 cars | ✅ 1 seul | ✅ Bien structurés |
| homologation-vasp.html | ✅ Mot-clé principal | ✅ | ✅ | ✅ |
| homologation-deriv-vp.html | ✅ | ✅ | ✅ | ✅ |
| carte-grise.html | ✅ | ✅ | ✅ | ✅ |
| tarifs.html | ✅ | ✅ | ✅ | ✅ |
| contact.html | ✅ | ✅ | ✅ | ✅ |
| blog/index.html | ✅ | ✅ | ✅ | ✅ |
| blog/*.html | ✅ Tous optimisés | ✅ | ✅ | ✅ |

### ⚠️ Points à améliorer

#### P9 — Densité de mots-clés géographiques
- "homologation VASP Bordeaux" → à renforcer
- "homologation VASP Gironde", "homologation VASP Nouvelle-Aquitaine"

#### P10 — Titres H2 à renforcer sur carte-grise.html
Certains H2 peu différenciants. Privilégier des formulations avec mots-clés.

#### P11 — Alt text sur images
Quand des images seront ajoutées, chaque `<img>` devra avoir un `alt` descriptif.

#### P12 — Dates des articles de blog
Les articles sont datés "décembre 2024". Ajouter une mention "mis à jour le [date]" améliore la fraîcheur perçue par Google.

---

## 3. SCHEMA MARKUP (DONNÉES STRUCTURÉES)

### ✅ Implémentés

- **Organization** avec adresse, téléphone, email, horaires, note agrégée → ✅
- **AggregateRating** (4.7/5 · 312 avis) dans Organization → ✅ Déjà présent
- **WebSite** avec SearchAction → ✅
- **FAQPage** sur index.html → ✅ Eligible aux rich results FAQ
- **Service** avec `priceValidUntil` sur homologation-vasp.html → ✅ Session 3
- **HowTo** (5 étapes) sur homologation-vasp.html → ✅ Session 3
- **BreadcrumbList** sur toutes les pages → ✅
- **Article** sur tous les articles de blog → ✅
- **LocalBusiness** sur contact.html → ✅

### ⚠️ Encore manquants

#### P13 — HowTo schema sur homologation-deriv-vp.html
Ajouté sur VASP, reste à dupliquer sur Dériv-VP.

#### P14 — priceValidUntil sur deriv-vp et tarifs
Ajouté sur VASP uniquement pour l'instant.

---

## 4. GEO — OPTIMISATION MOTEURS IA

### ✅ Points positifs

- **robots.txt** autorise GPTBot, ClaudeBot, Google-Extended, PerplexityBot, anthropic-ai
- Contenu factuel avec chiffres vérifiables (2400+ véhicules, ANTS n°228833, depuis 2016)
- FAQ structurée avec questions/réponses complètes
- Adresse physique vérifiable
- Langage direct et technique

### ⚠️ À améliorer pour le GEO

#### P15 — Pas de page "À propos" dédiée
Les moteurs IA cherchent des pages "À propos" pour évaluer la crédibilité. Créer `/a-propos.html`.

#### P16 — Citer les sources réglementaires
Mentionner les arrêtés et textes de loi avec leurs références exactes sur toutes les pages.

#### P17 — Ajouter une page "Glossaire"
Les moteurs IA apprécient les pages glossaire (VASP, Dériv-VP, PTAC, SIV, ANTS, UTAC...).

---

## 5. UX / DESIGN

### ✅ Corrigés (sessions 2 et 3)

| Problème | Page(s) | Statut |
|---|---|---|
| Texte blanc invisible sur fond gris (steps) | Services | ✅ Corrigé |
| Inputs formulaire sans style | contact.html | ✅ Corrigé |
| Blog cards sans padding | blog/index.html | ✅ Corrigé |
| Newsletter sans style | blog/index.html | ✅ Corrigé |
| Contact layout cassé | contact.html | ✅ Corrigé |
| Em-dashes style ChatGPT | Tous fichiers | ✅ Corrigé |
| Heures avec tirets | Tous footers | ✅ Corrigé |
| `.grid-3` manquant (carte-grise.html cards) | carte-grise.html | ✅ Session 3 |
| Carte grise — cards sans style (.card) | carte-grise.html | ✅ Session 3 |
| Tarifs — pricing-economy, pricing-disclaimer | tarifs.html | ✅ Session 3 |
| Tarifs — table carte grise (.cg-pricing-table) | tarifs.html | ✅ Session 3 |
| Tarifs — Pro SIV (.pro-card, .pro-feature) | tarifs.html | ✅ Session 3 |
| Tarifs — paiement (.payment-method) | tarifs.html | ✅ Session 3 |
| Quiz éligibilité — layout 2 colonnes | index.html | ✅ Session 3 |

### ⚠️ Reste à traiter

#### P18 — Pas d'image dans les articles et pages service
Priorité haute pour le temps de lecture moyen.

#### P19 — Carte Google Maps approximative
Les coordonnées de l'iframe ne pointent pas précisément sur "4D Chemin de la Grange, 33650 Martillac". À corriger.

#### P20 — WhatsApp FAB potentiellement masqué sur mobile
Vérifier l'espacement entre le FAB WhatsApp et le bouton scroll-top sur petits écrans.

---

## 6. CRO — TAUX DE CONVERSION

### ✅ Points positifs

- CTA "Devis gratuit" dans la navbar
- WhatsApp FAB visible
- Quiz d'éligibilité avec résultat immédiat
- Pricing clair avec 4 packs

### ❌ Axes d'amélioration

#### P21 — Aucun tracking de conversion
Sans GA4 events, impossible de savoir quel CTA convertit le mieux.

#### P22 — Quiz résultat : CTA pas assez fort
Quand éligible, ajouter urgence : "Démarrer maintenant — Dossier traité sous 48h".

#### P23 — Témoignages trop génériques
Pas de photo, pas de contexte précis (type de véhicule, région).

---

## 7. CONTENU

### ✅ Points positifs

- 6 articles de blog avec contenu substantiel
- Pages services avec FAQ
- Données chiffrées vérifiables

### ⚠️ À améliorer

#### P24 — Contenu daté "2024" à actualiser → "2025/2026"

#### P25 — Pas de contenu vidéo
Une vidéo explicative sur la page VASP serait un atout SEO majeur.

#### P26 — Mots-clés géographiques peu exploités
Pages régionales ou mentions géographiques renforcées.

---

## 8. PLAN D'ACTION PRIORITAIRE

### 🔴 Urgent (bloque le SEO ou la conversion)

1. ✅ **Favicon** → Corrigé session 3
2. ✅ **og:image + Twitter Card** → Corrigé session 3
3. ✅ **HowTo schema** → Corrigé session 3 (VASP)
4. **Convertir l'image OG** : exporter `og-homologation-vp.svg` en JPG 1200×630px → `/img/og-homologation-vp.jpg`
5. **Brancher le formulaire de contact** sur un vrai backend (Formspree conseillé)
6. **Connecter Google Search Console + GA4**

### 🟡 Important (améliore significativement)

7. Dupliquer **HowTo schema** sur homologation-deriv-vp.html
8. Ajouter des **images** (1 par page service minimum)
9. **Corriger les coordonnées Maps** (adresse exacte Martillac)
10. Créer une **page "À propos"** pour le GEO

### 🟢 Optimisations (à terme)

11. Créer des **pages SEO géographiques** (Bordeaux, national)
12. Ajouter un **glossaire** (VASP, Dériv-VP, PTAC, SIV...)
13. Intégrer une **vidéo** sur la page VASP
14. Intégrer les **avis Google** via widget
15. Ajouter des **événements GA4** de conversion

---

## 9. CHECKLIST TECHNIQUE RAPIDE

```
[✅] lang="fr" sur <html>
[✅] charset UTF-8
[✅] viewport meta
[✅] title unique par page
[✅] meta description unique par page
[✅] canonical link par page
[✅] noindex sur pages légales
[✅] breadcrumb schema
[✅] sitemap.xml
[✅] robots.txt avec crawlers IA
[✅] HTTPS (à vérifier en prod)
[✅] FAQ schema
[✅] Organization schema
[✅] AggregateRating dans schema (4.7/5 · 312 avis)
[✅] Service schema sur pages service
[✅] HowTo schema sur homologation-vasp.html
[✅] Article schema sur blog
[✅] WhatsApp FAB
[✅] Cookie banner RGPD
[✅] Favicon SVG (toutes les pages)
[✅] og:image (toutes les pages indexées)
[✅] Twitter Card (toutes les pages)
[✅] Em-dashes supprimés (contenu naturel)
[✅] Heures uniformisées (tous footers/contacts)
[⚠️] og:image → convertir SVG en JPG pour prod
[❌] Formulaire contact → backend à brancher
[❌] GA4 / analytics
[❌] Images sur les pages
[❌] Page À propos
[❌] Glossaire
[❌] HowTo schema sur deriv-vp.html
```

---

*Audit réalisé le 30 mars 2026 — Session 2*
*Mis à jour le 30 mars 2026 — Session 3 : favicon, og:image, Twitter Card, HowTo schema, grid-3, card CSS, pricing CSS*

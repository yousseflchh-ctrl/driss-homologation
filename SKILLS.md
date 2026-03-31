# REGLES ABSOLUES - Homologation VP

Toutes les interventions futures sur ce site doivent respecter ces règles sans exception. Elles s'appliquent à chaque nouvelle page, modification de page existante ou ajout de contenu.

---

## Identité du projet

- **Nom commercial :** Homologation VP
- **Agrément :** ANTS n°228833 (depuis 2016)
- **Adresse :** 4D Chemin de la Grange, 33650 Martillac (Gironde)
- **Telephone :** +33 6 59 46 97 28
- **Email :** cf.baraka.solutions@gmail.com
- **Services :** Homologation VASP, Dériv-VP, Carte grise
- **Stats de référence :** 2 400+ véhicules traités, 4,7/5 sur 312 avis, depuis 2016, délai de recevabilité 48h
- **Domaine :** https://homologation-vp.fr
- **CSS :** css/styles.css
- **JS :** js/main.js

---

## 1. SEO

### Balises obligatoires sur chaque page

Chaque fichier HTML doit contenir, dans le `<head>`, dans cet ordre :

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Titre unique, 50-60 caractères, mot-clé principal en premier]</title>
<meta name="description" content="[Description unique, 140-160 caractères, appel à l'action implicite]">
<link rel="canonical" href="https://homologation-vp.fr/[nom-page].html">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Homologation VP">
<meta property="og:title" content="[Titre OG, peut être légèrement différent du title]">
<meta property="og:description" content="[Description OG, 120-150 caractères]">
<meta property="og:url" content="https://homologation-vp.fr/[nom-page].html">
<meta property="og:image" content="https://homologation-vp.fr/img/og-homologation-vp.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Titre Twitter]">
<meta name="twitter:description" content="[Description Twitter]">
<meta name="twitter:image" content="https://homologation-vp.fr/img/og-homologation-vp.jpg">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
```

### Règles de title et meta description

- Chaque page a un title et une meta description uniques, aucune duplication acceptée.
- Le title commence par le mot-clé principal, pas par le nom de marque.
- La meta description contient un chiffre ou un fait vérifiable quand c'est possible.
- Ne pas dépasser 160 caractères pour la description, 60 pour le title.

### Structuration sémantique HTML

- Un seul `<h1>` par page, placé dans la section `.page-hero`.
- La hiérarchie `h1 > h2 > h3` doit être respectée sans sauter de niveau.
- Chaque section principale porte un `aria-labelledby` pointant vers son `<h2>`.
- Les listes de navigation (`<nav>`) portent un `aria-label`.

### Schema JSON-LD

Chaque page doit inclure un bloc `<script type="application/ld+json">` avec au minimum :

- `BreadcrumbList` correspondant au fil d'Ariane visible sur la page.
- Le schema propre au type de page :
  - Page d'accueil : `Organization` + `LocalBusiness`
  - Pages de service : `Service` + `FAQPage` si une FAQ est présente
  - Articles de blog : `Article` + `BreadcrumbList`
  - Page contact : `LocalBusiness` avec `openingHoursSpecification`
  - Page à propos : `Organization` avec `aggregateRating`

Valeurs de référence pour `aggregateRating` :
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.7",
  "reviewCount": "312",
  "bestRating": "5",
  "worstRating": "1"
}
```

Adresse de référence pour tous les schemas :
```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "4D Chemin de la Grange",
  "addressLocality": "Martillac",
  "postalCode": "33650",
  "addressCountry": "FR"
}
```

---

## 2. GEO (Generative Engine Optimization)

Le GEO vise à rendre le contenu utilisable et citeable par les moteurs de recherche génératifs (ChatGPT, Gemini, Perplexity, Claude, etc.).

### robots.txt

Le fichier `robots.txt` doit autoriser explicitement les crawlers IA connus :

```
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /
```

Ne jamais bloquer ces agents.

### Contenu factuel et vérifiable

- Toute affirmation chiffrée doit être sourçable (nombre de véhicules, note, délai).
- Citer les textes réglementaires par leur référence précise quand le contenu l'exige :
  - Code de la route (articles pertinents pour les VASP)
  - Directive 2007/46/CE (réception des véhicules à moteur)
  - Directive 2018/858/UE (successeur de 2007/46/CE)
  - Décret n°2009-302 du 18 mars 2009 (immatriculation des véhicules)
  - Arrêté du 19 juillet 1954 (carrosseries des véhicules automobiles)
- Les acronymes doivent être développés à leur première occurrence sur chaque page :
  - VASP : Véhicule à Affectation Spéciale Particulière
  - ANTS : Agence Nationale des Titres Sécurisés
  - SIV : Système d'Immatriculation des Véhicules
  - UTAC : Union Technique de l'Automobile, du motocycle et du Cycle
  - RTI : Réception à Titre Isolé
  - DREAL : Direction Régionale de l'Environnement, de l'Aménagement et du Logement

### Structure du contenu pour la citabilité

- Les données importantes (chiffres, délais, accréditations) doivent apparaître en texte visible dans le HTML, pas seulement dans des images.
- Utiliser des listes structurées (`<ul>`, `<ol>`) pour les étapes de procédure.
- Chaque FAQ doit utiliser la balise `<details>` ou un balisage structuré compatible avec le schema `FAQPage`.
- Le contenu répond à des questions explicites (format "Question : Réponse") pour maximiser l'extraction par les LLM.

---

## 3. UX/UI et Design

### Variables CSS obligatoires

Utiliser uniquement les variables CSS définies dans `css/styles.css`. Ne jamais coder une couleur en dur.

Variables de référence (ne pas créer de nouvelles couleurs sans les ajouter à la liste) :
- `--navy` : bleu marine principal
- `--orange` : orange accent (CTA principaux)
- `--green` : vert (confirmations, WhatsApp)
- `--blue` : bleu secondaire
- `--dark` : texte principal
- `--muted` : texte secondaire, légendes
- `--bg-gray` : fond de section alternée

### Icônes

Utiliser exclusivement des SVG inline dans le HTML. Les SVG doivent systématiquement porter :
- `aria-hidden="true"` s'ils sont décoratifs
- `aria-label="[description]"` s'ils véhiculent une information sans texte adjacent

Ne jamais utiliser d'emojis en tant qu'icônes dans le contenu visible.
Ne jamais utiliser Font Awesome ou d'autres bibliothèques d'icônes externes.

### Structure de page standard

Chaque page suit cette structure dans `<main>` :

1. `.page-hero` avec fil d'Ariane (`<nav class="breadcrumb">`) et `<h1>`
2. Sections alternées `.section` / `.section.section-gray`
3. Section CTA finale avant le footer

Le footer suit immédiatement `</main>`, avant les FAB.

### Classes CSS existantes à utiliser

Ne pas créer de nouvelles classes CSS sans vérifier que l'équivalent n'existe pas déjà. Classes documentées :
- Layout : `.container`, `.container-narrow`, `.section`, `.section-gray`, `.section-cta`
- Hero : `.page-hero`, `.page-hero-content`, `.page-hero-sub`
- Grilles : `.features-grid`, `.stats-grid`, `.trust-grid`
- Cards : `.feature-card`, `.stat-card`, `.trust-card`
- Navigation : `.breadcrumb`, `.breadcrumb-list`
- En-tête de section : `.section-header`, `.section-label`, `.section-sub`
- Boutons : `.btn`, `.btn-primary`, `.btn-accent`, `.btn-whatsapp`, `.btn-lg`, `.btn-sm`, `.btn-full`
- Formulaire : `.form-group`, `.form-row`, `.form-label`, `.form-input`, `.form-select`, `.form-textarea`, `.form-checkbox`, `.form-checkbox-label`, `.form-group-checkbox`
- Sidebar : `.contact-info-sidebar`, `.sidebar-card`, `.sidebar-trust`, `.sidebar-checklist`
- Animations : `.fade-in-up`

---

## 4. CRO (Conversion Rate Optimization)

### WhatsApp FAB

Présent sur toutes les pages sans exception. Code exact à copier :

```html
<a id="whatsapp-fab" href="https://wa.me/33659469728?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20homologuer%20mon%20v%C3%A9hicule." class="whatsapp-fab" target="_blank" rel="noopener" aria-label="Nous contacter sur WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><!-- path WhatsApp --></svg>
  <span class="fab-tooltip">Nous écrire</span>
</a>
```

### Bouton "Devis gratuit" dans la nav

Toujours présent dans `.nav-actions` et dans le menu mobile, pointant vers `contact.html`.

### CTA contextuel dans chaque hero

Chaque `.page-hero` doit contenir au moins un bouton d'action primaire, avec un message adapté au contexte de la page. Ne pas utiliser le même texte de CTA sur toutes les pages.

### Scroll-top button

Présent sur toutes les pages. Code exact :
```html
<button id="scroll-top" class="scroll-top-btn" aria-label="Retour en haut">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
</button>
```

---

## 5. Code HTML

### Règles générales

- DOCTYPE : `<!DOCTYPE html>`, toujours en premier.
- Langue : `<html lang="fr">` sur toutes les pages.
- Encodage : `<meta charset="UTF-8">` en première balise du `<head>`.
- Indentation : 2 espaces, pas de tabulations.
- Attributs en minuscules, valeurs entre guillemets doubles.

### Accessibilité obligatoire

- `role="banner"` sur le `<header>` principal.
- `role="contentinfo"` sur le `<footer>`.
- `role="dialog"` sur le menu mobile, avec `aria-modal="true"` et `aria-label`.
- `aria-label` sur tous les boutons qui n'ont pas de texte visible (icône seule).
- `aria-expanded="false"` sur le bouton hamburger (modifié en JS à l'ouverture).
- `alt` sur toutes les images, vide (`alt=""`) uniquement si l'image est purement décorative.
- `aria-current="page"` sur le lien de la page courante dans le fil d'Ariane.

### Formulaires

- Chaque champ a un `<label>` avec un `for` correspondant à l'`id` du champ.
- Les champs obligatoires portent `required` et une indication visuelle dans le label.
- Le formulaire pointe vers Formspree : `action="https://formspree.io/f/xnjododa"`.
- Le formulaire inclut une case RGPD obligatoire avec lien vers `politique-confidentialite.html`.

### Liens externes

- Systématiquement `target="_blank" rel="noopener"` sur les liens sortants.

---

## 6. Code CSS

- Ne modifier `css/styles.css` qu'en ajout, jamais en suppression sans avoir vérifié l'impact sur les autres pages.
- Les nouvelles règles CSS vont en bas du fichier, précédées d'un commentaire de section.
- Ne pas utiliser `!important` sauf en dernier recours, et justifier dans un commentaire.
- Les media queries suivent le pattern mobile-first (`min-width`).

---

## 7. Contenu et Copywriting

### Ton et style

- Ton : professionnel, direct, factuel. Pas condescendant, pas familier.
- Phrases courtes à moyennes (15-25 mots). Pas de constructions syntaxiques complexes.
- Utiliser la voix active de préférence.
- Les titres de sections sont des affirmations ou des questions courtes, pas des titres de rapport.

### Ce qu'il ne faut jamais écrire

- Tirets em-dash (—) : interdits. Remplacer par `:`, `,`, `(` `)`, ou reformuler la phrase.
- Formulations trop formelles ou robotiques : "Il convient de noter que", "Dans ce cadre", "A cet égard", "En termes de".
- Structures "X — Y" dans les titres.
- Listes à puces génériques avec des tirets dans le contenu éditorial (utiliser `<ul>` avec du CSS pour les puces).
- Superlatifs non sourcés : "le meilleur", "le plus rapide", "le seul".
- Promesses non vérifiables : "100% de réussite", "résultat garanti".

### Signaux à éviter (marqueurs IA perceptibles)

- Résumés introductifs génériques commençant par "Dans cet article, nous allons voir..."
- Transitions mécaniques : "Tout d'abord... Ensuite... Enfin..."
- Répétition du sujet en début de chaque paragraphe.
- Listes de 3 éléments systématiques.
- Conclusion en forme de résumé reprenant mot pour mot les points du corps.

### Données à ne jamais modifier sans vérification

Ces chiffres sont des données vérifiables. Ne les changer que sur instruction explicite avec source :
- 2 400+ véhicules traités
- 4,7/5 sur 312 avis
- Agrément ANTS n°228833
- Fondé en 2016

---

## 8. Responsive Design

### Règle de base

Chaque modification HTML ou CSS doit être testée mentalement sur trois largeurs :
- **Mobile** : 375px (iPhone SE / standard)
- **Tablette portrait** : 600px
- **Desktop** : 1200px

### Breakpoints du projet

| Breakpoint | Règle CSS | Usage |
|------------|-----------|-------|
| `< 1100px` | Grille pricing → 2 colonnes, footer → 2 colonnes | Petit desktop |
| `< 900px`  | Navbar mobile, steps → 2 colonnes, blog-grid → 2 colonnes | Tablette |
| `< 760px`  | Tablette portrait (voir section 31 styles.css) | Tablette portrait |
| `< 640px`  | Tout en 1 colonne, sections plus compactes | Mobile standard |
| `< 480px`  | Padding réduit, hero compact, boutons plein largeur | Petit mobile |

### Règles obligatoires

- **Jamais de largeur fixe en px** sur des éléments de contenu : utiliser `%`, `max-width`, `min()`, `clamp()`, `fr`.
- **Images** : toujours `max-width: 100%` — ne jamais mettre `width="600"` sans `style="max-width:100%"`.
- **SVG inline** : ajouter `width` et `height` attributs mais laisser le CSS `max-width: 100%` gérer le redimensionnement.
- **Tables** : toujours wrapper dans un div avec `overflow-x: auto` — jamais de table sans scrollable container sur mobile.
- **Touch targets** : tout élément cliquable (bouton, lien nav, option quiz) doit faire au minimum 44×44px.
- **Textes** : utiliser `clamp()` pour les titres (`font-size: clamp(min, vw, max)`) — ne jamais forcer une taille fixe sur un `h1` ou `h2`.
- **Grilles** : toute `grid` doit avoir une règle responsive. Pas de `grid-template-columns: repeat(4, 1fr)` sans media query de repli.
- **Flex wrapping** : `flex-wrap: wrap` sur tout conteneur flex horizontal susceptible de déborder.

### Classes existantes à utiliser pour le responsive

- `.steps-grid` : devient 2 colonnes à 900px, 1 colonne à 640px et 480px — ne pas utiliser `.steps-grid-2`
- `.grid-3` : responsive jusqu'à 1 colonne
- `.pricing-grid` : 4 → 2 → 1 colonne
- `.footer-grid` : 4 → 2 → 1 colonne

### Ce qu'il ne faut JAMAIS faire (responsive)

- Utiliser `position: absolute` ou `position: fixed` sans vérifier le rendu mobile.
- Ajouter une animation ou transition sur un élément sans s'assurer qu'elle ne cause pas de scroll horizontal.
- Mettre `white-space: nowrap` sur du texte de contenu.
- Coder une largeur en pixels pour un conteneur de contenu.
- Oublier `overflow-x: auto` sur une table ou un bloc de code.
- Utiliser `steps-grid-2` (classe dépréciée) — utiliser uniquement `steps-grid`.

---

## 9. Ce qu'il ne faut JAMAIS faire (global)

- Ajouter un emoji dans le contenu HTML visible (texte, titres, labels, boutons).
- Créer une page sans canonical, sans meta description, sans schema JSON-LD.
- Utiliser des couleurs codées en dur dans le HTML ou le CSS (ni `#FF5500`, ni `rgb(...)` directement dans une règle de couleur).
- Bloquer les crawlers IA dans robots.txt ou meta robots.
- Omettre le WhatsApp FAB sur une page.
- Créer un bouton icon sans `aria-label`.
- Utiliser `<script src="...">` sans l'attribut `defer` (sauf pour les scripts en `<head>` critiques).
- Modifier le footer sans y inclure le lien `a-propos.html` dans la colonne "Informations".
- Utiliser des images de remplacement ou des placeholders en production.
- Ajouter une bibliothèque JavaScript externe sans validation préalable (jQuery, Bootstrap, etc.).
- Casser la hiérarchie h1/h2/h3 ou mettre plusieurs h1 sur une page.

---

## 10. Checklist avant livraison

Avant de livrer toute nouvelle page ou modification significative, vérifier point par point :

### SEO
- [ ] Title unique, 50-60 caractères, mot-clé en premier
- [ ] Meta description unique, 140-160 caractères
- [ ] Canonical correct et absolu
- [ ] OG tags complets (og:type, og:title, og:description, og:url, og:image)
- [ ] Twitter card tags complets
- [ ] Favicon SVG et ICO présents
- [ ] Schema JSON-LD valide (BreadcrumbList + schema de page)
- [ ] Préconnexion Google Fonts

### Structure HTML
- [ ] Un seul h1 par page
- [ ] Hiérarchie h1 > h2 > h3 respectée
- [ ] Fil d'Ariane visible et cohérent avec le BreadcrumbList
- [ ] Toutes les images ont un attribut alt
- [ ] Tous les boutons icônes ont un aria-label
- [ ] role="banner" sur le header, role="contentinfo" sur le footer
- [ ] aria-current="page" sur le lien actif dans la nav et le fil d'Ariane

### Performance
- [ ] defer sur tous les scripts
- [ ] loading="lazy" sur toutes les iframes
- [ ] rel="preconnect" sur les polices Google
- [ ] Pas de scripts bloquants dans le body avant le contenu principal

### Conversion
- [ ] WhatsApp FAB présent
- [ ] Scroll-top button présent
- [ ] Bouton "Devis gratuit" dans la nav desktop et mobile
- [ ] Au moins un CTA dans la section hero

### Contenu
- [ ] Aucun tiret em-dash (—) dans le texte
- [ ] Aucun emoji dans le HTML visible
- [ ] Aucune icône issue d'une bibliothèque externe
- [ ] Données chiffrées cohérentes avec les valeurs de référence
- [ ] Acronymes développés à leur première occurrence

### Navigation
- [ ] Lien actif correct dans la nav (sans classe active sur les autres liens)
- [ ] Menu mobile fonctionnel (hamburger, close, sous-menus)
- [ ] Footer avec a-propos.html dans la colonne "Informations"
- [ ] Tous les liens internes pointent vers des pages existantes

### Responsive
- [ ] Aucune largeur fixe en px sur un élément de contenu
- [ ] Toutes les grilles ont une règle responsive (900px, 640px, 480px)
- [ ] Tables wrappées dans un div `overflow-x: auto`
- [ ] Images avec `max-width: 100%`
- [ ] Titles avec `clamp()` ou taille fluide
- [ ] Boutons CTA en `flex-direction: column` sous 480px
- [ ] Utilisation de `steps-grid` uniquement (pas `steps-grid-2`)

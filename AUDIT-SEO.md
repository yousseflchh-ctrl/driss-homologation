# Audit SEO & GEO — Homologation VP
## homologation-vp.fr — Rapport complet

---

## CE QUI EST DÉJÀ EN PLACE (intégré dans le site)

### SEO On-Page
- **1 seul `<title>` par page** — conforme, unique sur chaque page
- **1 seule `<meta description>` par page** — conforme, unique, entre 140-160 caractères
- **1 seul `<h1>` par page** — conforme
- **Structure H1 > H2 > H3** correcte sur toutes les pages
- **Balises canoniques** sur toutes les pages (`<link rel="canonical">`)
- **Open Graph tags** (og:title, og:description, og:url, og:type, og:site_name)
- **Meta robots `noindex, follow`** sur les pages légales (mentions légales, confidentialité) — correct, ces pages ne doivent pas être indexées
- **Attributs `lang="fr"`** sur toutes les pages HTML
- **Attributs `alt` sur tous les éléments visuels SVG** (aria-label / aria-hidden selon usage)
- **Fil d'Ariane (breadcrumb)** HTML sur toutes les pages internes

### Schémas JSON-LD (Schema.org)
- **Organization** (homepage) — nom, adresse, téléphone, email, coordonnées GPS, horaires, aggregateRating
- **WebSite** (homepage) — avec SearchAction potentialAction
- **FAQPage** (homepage) — 4 questions/réponses structurées
- **Service** (pages homologation-vasp, deriv-vp, carte-grise) — avec areaServed, offers, provider
- **BreadcrumbList** sur toutes les pages internes
- **LocalBusiness** (contact.html)
- **Article** (6 articles de blog) — avec datePublished, author, publisher, mainEntityOfPage

### Fichiers SEO techniques
- **robots.txt** — Allow all, incluant GPTBot, ClaudeBot, Google-Extended (GEO)
- **sitemap.xml** — 17 URLs avec priorités et changefreq
- **HTTPS** — à configurer sur l'hébergeur (voir section "Actions à faire")

### Architecture
- **Structure multi-pages** au lieu du single-page initial — meilleur référencement par page
- **Blog avec 6 articles** longue traîne sur les mots-clés principaux
- **Maillage interne** entre pages de services, articles de blog et pages contact
- **URLs propres** avec fichiers .html (à améliorer via configuration serveur — voir ci-dessous)

### GEO (Generative Engine Optimization — pour ChatGPT, Claude, Gemini…)
- **robots.txt autorisant** GPTBot, ClaudeBot, Google-Extended, PerplexityBot, Anthropic-AI, CCBot
- **Schema.org complet** — les LLM utilisent ces données structurées pour répondre
- **Contenu factuel dense** — dates précises, numéros d'agrément, tarifs, réglementation → les LLM citent des données vérifiables
- **FAQ structurée** — format question/réponse directement consommable par les LLM
- **Entités nommées claires** : "VASP", "Dériv-VP", "ANTS n°228833", "arrêté du 7 novembre 2014"

---

## ACTIONS OBLIGATOIRES DE TON CÔTÉ

### 1. Hébergement & HTTPS (PRIORITÉ HAUTE)
Mets en place un certificat SSL sur ton hébergeur. Sans HTTPS :
- Google déclasse le site
- Chrome affiche "Non sécurisé" → perte de conversion immédiate
- La majorité des hébergeurs (OVH, o2switch, Hostinger, Infomaniak) incluent Let's Encrypt gratuit dans leurs offres.

### 2. Soumettre le sitemap à Google Search Console (PRIORITÉ HAUTE)
1. Va sur [Google Search Console](https://search.google.com/search-console/)
2. Ajoute la propriété `homologation-vp.fr`
3. Vérifie via le fichier HTML ou la balise DNS
4. Va dans "Sitemaps" → Soumettre `https://homologation-vp.fr/sitemap.xml`
5. Surveille les erreurs d'indexation

### 3. Soumettre à Bing Webmaster Tools (PRIORITÉ MOYENNE)
Même procédure sur [Bing Webmaster Tools](https://www.bing.com/webmasters) — Bing alimente aussi Copilot (IA de Microsoft).

### 4. Créer/optimiser la fiche Google Business Profile (PRIORITÉ HAUTE)
C'est le facteur n°1 pour le référencement local :
1. Va sur [Google Business Profile](https://business.google.com/)
2. Crée ou revendique la fiche "Homologation VP / CFBS Solutions"
3. Renseigne : adresse exacte (4D Chemin de la Grange, 33650 Martillac), téléphone, site web, horaires, catégorie ("Agence administrative" ou "Service d'immatriculation")
4. Ajoute des photos de l'entreprise
5. Demande des avis Google à tes clients (lien direct depuis Google Business)
6. Réponds à tous les avis, positifs comme négatifs

### 5. Configurer la redirection www → non-www (ou inverse) sur le serveur
Choisir une seule version canonique :
- Soit `homologation-vp.fr` (recommandé — plus court)
- Soit `www.homologation-vp.fr`
- Configurer une redirection 301 permanent depuis l'autre version
- Mettre à jour la balise canonique si nécessaire

### 6. Configurer les redirections d'URLs propres (optionnel mais recommandé)
Pour avoir `/homologation-vasp` au lieu de `/homologation-vasp.html`, configurer sur le serveur Apache (.htaccess) :
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```
Ou sur Nginx :
```nginx
try_files $uri $uri/ $uri.html =404;
```

### 7. Ajouter les images réelles (PRIORITÉ HAUTE pour CRO)
Le site utilise actuellement des icônes SVG et pas d'images. Il faut ajouter :
- Photo professionnelle de l'équipe ou du bureau (trust signal fort)
- Photo d'un utilitaire en cours de transformation / avec l'attestation
- Logo officiel en SVG ou PNG (à créer avec un designer ou outil comme Canva/Looka)
- Images pour les articles de blog (photos de véhicules réels)
- Une image OG (1200×630px) pour les réseaux sociaux

### 8. Ajouter Google Analytics 4 / suivi de conversions
Pour mesurer les performances :
```html
<!-- Coller avant </head> sur toutes les pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
Remplace `G-XXXXXXXXXX` par ton ID Google Analytics 4.

### 9. Connecter le formulaire de contact à un vrai backend
Actuellement le formulaire simule un envoi avec succès (setTimeout). Pour un vrai envoi :
- Option 1 : **Formspree.io** (gratuit jusqu'à 50 envois/mois) — ajoute `action="https://formspree.io/f/XXXXXXXX"` sur le `<form>`
- Option 2 : **EmailJS** — SDK JavaScript pour envoyer des emails
- Option 3 : PHP côté serveur si hébergeur mutualisé

### 10. Ajouter une page d'Accueil pour les erreurs 404
Créer un fichier `404.html` qui redirige vers l'accueil et affiche un message utile. Configurer sur le serveur (`ErrorDocument 404 /404.html` sur Apache).

---

## ACTIONS RECOMMANDÉES (pour aller plus loin)

### Netlinking (backlinks)
Le SEO hors-page est aussi important que le SEO on-page :
- Demander des citations sur des annuaires automobiles (L'Argus, La Centrale, Caradisiac)
- Proposer des articles invités sur des blogs auto/entrepreneurs
- Vérifier que la fiche Google Business est cohérente avec les données NAP du site (Nom, Adresse, Téléphone)

### Core Web Vitals
Après mise en ligne, tester sur [PageSpeed Insights](https://pagespeed.web.dev/) :
- Objectif : score vert (90+) sur mobile et desktop
- Les points à surveiller : chargement des fonts (déjà optimisé avec `display=swap`), images (poids), JavaScript (defer déjà en place)

### Structured Data — Ajouter un schéma HowTo
Pour les articles de blog (ex: "Comment constituer son dossier"), le schéma `HowTo` améliore la visibilité dans les résultats enrichis Google.

### AMP (optionnel)
Non prioritaire en 2024 (Google n'avantage plus AMP), mais si le site est lent sur mobile après audit PageSpeed, envisager.

---

## MOTS-CLÉS CIBLES (déjà couverts par les pages)

| Mot-clé | Volume estimé | Page cible |
|---|---|---|
| homologation VASP | Moyen | homologation-vasp.html + guide blog |
| homologation Dériv-VP | Moyen | homologation-deriv-vp.html |
| transformer utilitaire 5 places | Fort | index.html + homologation-vasp.html |
| homologation VASP prix | Moyen | cout-homologation-vasp.html + tarifs.html |
| homologation VASP 48h | Moyen | index.html |
| carte grise en ligne | Fort | carte-grise.html |
| homologation véhicule agréé ANTS | Faible | toutes pages |
| VASP vs Dériv-VP différence | Faible | difference-vasp-deriv-vp.html |
| utilitaire 5 places légal | Faible | utilitaire-5-places-legislation.html |
| homologation à distance | Faible | homologation-distance.html |

---

## RÉSUMÉ — CE QUI NE PEUT PAS ÊTRE FAIT PAR MOI

| Action | Raison | Priorité |
|---|---|---|
| Activer HTTPS | Nécessite accès hébergeur | CRITIQUE |
| Soumettre sitemap Google | Nécessite compte Google Search Console | HAUTE |
| Créer fiche Google Business | Nécessite compte Google + vérification physique | HAUTE |
| Ajouter images réelles | Nécessite photos du client | HAUTE |
| Connecter formulaire backend | Nécessite hébergeur ou service tiers | HAUTE |
| Ajouter Google Analytics | Nécessite compte GA4 | MOYENNE |
| Configurer redirections serveur | Nécessite accès hébergeur | MOYENNE |
| Créer logo | Nécessite designer ou outil | MOYENNE |
| Campagne de netlinking | Démarche manuelle/partenariats | LONG TERME |

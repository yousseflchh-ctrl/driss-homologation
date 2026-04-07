# Homologation VP — Site Web

Site vitrine et service en ligne pour **Homologation VP**, spécialiste de l'homologation VASP et Dériv-VP, agréé ANTS n°228833 depuis 2016.

**URL :** https://homologation-vp.fr  
**Activité :** Homologation de véhicules (VASP, Dériv-VP, carte grise) — 100% à distance, partout en France  
**Localisation :** 4D Chemin de la Grange, 33650 Martillac (Gironde)  
**Contact :** +33 6 59 46 97 28 · cf.baraka.solutions@gmail.com

---

## Stack technique

| Aspect | Détail |
|---|---|
| Frontend | HTML5 sémantique, CSS3 (variables, flexbox, grid), Vanilla JS ES6+ |
| Fonts | Google Fonts — Outfit (titres) + Inter (corps) |
| Formulaires | Formspree (ID : xnjododa) |
| Analytics | Google Analytics 4 (à configurer) |
| Serveur | Apache — o2switch.fr (~7€/mois) |
| Config serveur | `.htaccess` — HTTPS forcé, sécurité, cache, GZIP |
| SEO | Sitemap XML, robots.txt, Schema.org JSON-LD, Open Graph |
| Versionnement | Git + GitHub (dépôt privé) |
| SSL | Let's Encrypt via cPanel o2switch |
| Dépendances | **Aucune** — zéro framework, zéro librairie externe |

---

## Structure des fichiers

```
/
├── index.html                          → Page d'accueil (obligatoire à la racine)
├── 404.html                            → Page d'erreur personnalisée
├── .htaccess                           → Config Apache (HTTPS, sécurité, cache, GZIP)
├── robots.txt                          → Directives SEO pour les crawlers
├── sitemap.xml                         → Plan du site pour Google
├── favicon.svg                         → Icône navigateur (format moderne)
│
├── pages/                              → Toutes les pages HTML du site
│   ├── homologation-vasp.html          → Service VASP (page principale)
│   ├── homologation-deriv-vp.html      → Service Dériv-VP
│   ├── carte-grise.html                → Service carte grise
│   ├── tarifs.html                     → Grille tarifaire (4 packs)
│   ├── a-propos.html                   → Présentation de l'entreprise
│   ├── contact.html                    → Formulaire + WhatsApp + téléphone
│   ├── mentions-legales.html           → Mentions légales obligatoires
│   ├── politique-confidentialite.html  → Politique RGPD
│   └── blog/                           → Articles de blog
│       ├── index.html                  → Liste des articles
│       ├── guide-homologation-vasp.html
│       ├── cout-homologation-vasp.html
│       ├── difference-vasp-deriv-vp.html
│       ├── documents-homologation.html
│       ├── homologation-distance.html
│       └── utilitaire-5-places-legislation.html
│
├── css/
│   └── styles.css                      → Feuille de styles principale (variables, composants)
│
├── js/
│   └── main.js                         → JavaScript principal (14 modules, Vanilla ES6+)
│
├── img/
│   └── og-homologation-vp.svg          → Image preview pour les réseaux sociaux
│
└── docs/                               → Documentation interne (non déployée)
    ├── README.md                       → Ce fichier
    ├── DEPLOIEMENT.md                  → Guide complet de déploiement FTP + Git
    ├── AUDIT-SEO.md                    → Audit SEO rapide
    ├── AUDIT-SEO-COMPLET.md            → Audit SEO détaillé
    └── SKILLS.md                       → Notes sur les compétences techniques
```

---

## Fonctionnalités JavaScript (`js/main.js`)

14 modules indépendants, sans aucune dépendance externe :

1. **Navigation** — comportement au scroll (classe `.scrolled`), menu hamburger mobile
2. **Smooth scroll** — défilement fluide vers les ancres (`#eligibilite`, etc.) avec offset nav
3. **Bouton retour haut** — apparaît après 500px de scroll
4. **Animations fade-in** — `IntersectionObserver` sur les éléments `.fade-in-up`
5. **Compteurs animés** — animation chiffres clés (2 400+, 4,7/5…) avec easeOutQuad
6. **FAQ Accordion** — toggle ouverture/fermeture, animation `maxHeight`
7. **Quiz d'éligibilité** — 3 questions (date MEC, type véhicule, PTAC) → résultat VASP / Dériv-VP / non éligible + CTA WhatsApp
8. **Formulaire contact** — validation email/téléphone, envoi via Formspree (fetch), erreurs inline
9. **WhatsApp FAB** — bouton flottant avec tooltip après 3s (desktop)
10. **Cookie consent** — bannière RGPD, stockage `localStorage` (`hvp_cookie_consent`)
11. **Announcement bar** — ticker défilant, pause au hover
12. **Pack selector** — sélection offre tarifaire au clic
13. **Dropdown desktop** — menu services hover + clavier (Enter/Escape)
14. **Dropdown mobile** — sous-menu accordéon dans le menu hamburger

---

## Déploiement

### Git — commandes quotidiennes

```bash
# Avant de travailler
git pull

# Après modifications
git add .
git commit -m "Description de la modification"
git push
```

### Upload FTP (FileZilla → o2switch)

Uploader vers `public_html/` :

| Uploader | Ne pas uploader |
|---|---|
| `index.html`, `404.html` | `.git/` |
| `pages/`, `blog/` | `.claude/` |
| `css/`, `js/`, `img/` | `docs/` (README, AUDIT-SEO…) |
| `.htaccess`, `robots.txt`, `sitemap.xml` | `.vscode/` |
| `favicon.svg` | |

### Vérifications post-déploiement

- [ ] HTTPS forcé (http → https automatique)
- [ ] Page 404 personnalisée visible
- [ ] Favicon affiché dans l'onglet
- [ ] Image Open Graph visible sur [opengraph.xyz](https://opengraph.xyz)
- [ ] Sitemap soumis dans Google Search Console

---

## Fichiers manquants à créer

Ces fichiers sont référencés dans le code mais pas encore générés :

| Fichier | Format | Outil |
|---|---|---|
| `favicon.ico` | 32×32px | [favicon.io](https://favicon.io/favicon-converter/) |
| `img/apple-touch-icon.png` | 180×180px | Canva ou favicon.io |
| `img/og-homologation-vp.jpg` | 1200×630px | Canva (design + logo) |

---

## Tarifs (référence)

| Pack | Prix HT/u | Nb homologations |
|---|---|---|
| Solo | 490 € | 1 |
| Medium | 450 € | 3 |
| Compétition | 390 € | 5 |
| VIP | 350 € | 10 |

Devis gratuit — réponse sous 2h par WhatsApp.

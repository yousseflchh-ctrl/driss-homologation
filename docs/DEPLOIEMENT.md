# Guide de Déploiement — Homologation VP

---

## PARTIE 1 — GITHUB (travailler depuis n'importe quel PC)

### Pourquoi GitHub ?
GitHub stocke ton code en ligne. Tu peux récupérer le projet sur n'importe quel ordinateur, travailler dessus, puis repousser les modifications. C'est aussi un filet de sécurité : tout est versionné, rien ne se perd.

---

### Étape 1 — Créer le dépôt sur GitHub

1. Va sur **github.com** et connecte-toi (ou crée un compte si tu n'en as pas)
2. Clique sur le bouton vert **"New"** (ou le **+** en haut à droite → "New repository")
3. Remplis :
   - **Repository name** : `website-driss` (ou `homologation-vp`)
   - **Description** : Site internet Homologation VP
   - **Visibilité** : **Private** (le code ne sera pas visible publiquement)
   - **Ne pas cocher** "Add a README file" (on en a déjà un)
4. Clique sur **"Create repository"**

---

### Étape 2 — Connecter ton projet local à GitHub

Ouvre un terminal dans le dossier du projet (ou utilise VS Code → Terminal) et tape ces commandes **une par une** :

```bash
# Vérifier que git est bien initialisé (normalement déjà fait)
git status

# Ajouter tous les fichiers au suivi git
git add .

# Créer un premier commit
git commit -m "Site Homologation VP - version initiale"

# Relier ton projet au dépôt GitHub (remplace TON_USERNAME par ton pseudo GitHub)
git remote add origin https://github.com/TON_USERNAME/website-driss.git

# Envoyer le code sur GitHub
git push -u origin main
```

> Si la commande `push` te demande un identifiant/mot de passe, utilise ton **email GitHub** et un **Personal Access Token** (pas ton mot de passe). Pour créer un token : GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token.

---

### Étape 3 — Récupérer le projet sur un autre PC

Sur un nouveau PC qui a **git** installé :

```bash
# Cloner le projet (télécharger tout le code)
git clone https://github.com/TON_USERNAME/website-driss.git

# Entrer dans le dossier
cd website-driss
```

Le projet est prêt à l'emploi.

---

### Étape 4 — Travailler au quotidien (workflow)

```bash
# Avant de commencer à travailler : récupérer les dernières modifications
git pull

# Après avoir fait des modifications : sauvegarder et envoyer
git add .
git commit -m "Description de ce que tu as changé"
git push
```

---

## PARTIE 2 — HÉBERGEMENT (partager le site au client)

### Option recommandée : o2switch (France, Apache, .htaccess compatible)

C'est l'hébergeur le plus utilisé en France pour les sites HTML/PHP. Il supporte Apache et le `.htaccess`, ce qui est indispensable pour ton site (redirections HTTPS, sécurité, cache).

**Prix :** ~7€/mois — hébergement illimité, 1 IP dédiée, support français

---

### Étape 1 — Acheter le nom de domaine et l'hébergement

**Option A — Tout chez o2switch (plus simple)**
1. Va sur **o2switch.fr**
2. Commande un hébergement → le nom de domaine `homologation-vp.fr` est souvent inclus ou à 1€
3. Tu reçois les accès FTP et cPanel par email

**Option B — Domaine séparé (plus flexible)**
- Domaine chez **Namecheap** ou **OVH** (~10€/an)
- Hébergement chez **o2switch** ou **Infomaniak**
- Puis pointer le domaine vers l'hébergeur en modifiant les DNS

---

### Étape 2 — Uploader le site via FTP

**Télécharger FileZilla** (gratuit) : filezilla-project.org

**Connexion FTP :**
- Hôte : `ftp.homologation-vp.fr` (ou l'IP fournie par o2switch)
- Identifiant : fourni par o2switch dans l'email de bienvenue
- Mot de passe : fourni par o2switch
- Port : `21`

**Upload :**
1. Dans FileZilla, à gauche = ton PC, à droite = le serveur
2. Navigate à droite vers le dossier `public_html/` (c'est la racine du site web)
3. Sélectionne **tous** les fichiers de ton projet à gauche
4. Glisse-les vers `public_html/` à droite
5. Attends que le transfert soit terminé

**Fichiers à uploader (tout sauf ces dossiers) :**
```
✅ index.html
✅ tous les .html
✅ css/
✅ js/
✅ img/
✅ blog/
✅ robots.txt
✅ sitemap.xml
✅ .htaccess  ← IMPORTANT, ne pas oublier
✅ favicon.svg
✅ favicon.ico (quand créé)

❌ NE PAS uploader :
   .git/          (données git, inutiles sur le serveur)
   .claude/       (paramètres VS Code/Claude, privé)
   *.md           (AUDIT-SEO, README, etc. — documentation privée)
   .vscode/
```

---

### Étape 3 — Vérifier que le .htaccess fonctionne

Après l'upload, ouvre le site dans un navigateur et vérifie :

1. **HTTPS forcé** : tape `http://homologation-vp.fr` → tu dois être redirigé vers `https://`
2. **Page 404** : tape `https://homologation-vp.fr/page-inexistante` → tu dois voir ta page 404 personnalisée
3. **www redirect** : tape `https://www.homologation-vp.fr` → tu dois être redirigé vers sans-www (si configuré)

> Si le .htaccess ne fonctionne pas, c'est que le module `mod_rewrite` n'est pas activé sur l'hébergeur. Contact le support — chez o2switch c'est activé par défaut.

---

### Étape 4 — Activer le certificat SSL (HTTPS)

**Chez o2switch :**
1. Connecte-toi au **cPanel** (lien fourni dans l'email)
2. Cherche **"Let's Encrypt SSL"** ou **"SSL/TLS"**
3. Sélectionne ton domaine et clique sur **"Issue"**
4. Attends 2-5 minutes → le cadenas HTTPS apparaît dans le navigateur

---

### Étape 5 — Connecter Google Search Console

1. Va sur **search.google.com/search-console**
2. Clique "Ajouter une propriété" → entre `https://homologation-vp.fr`
3. Vérifie la propriété (méthode HTML tag → colle la balise `<meta>` dans le `<head>` de index.html)
4. Une fois vérifié, va dans **Sitemaps** → entre `https://homologation-vp.fr/sitemap.xml` → Envoyer

---

### Étape 6 — Connecter Google Analytics 4

1. Va sur **analytics.google.com**
2. Crée une propriété → entre le nom du site et le domaine
3. Dans "Flux de données" → "Web" → entre l'URL
4. Copie le code de suivi (commence par `G-XXXXXXXXXX`)
5. Colle ce code dans le `<head>` de **chaque page HTML** :

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## PARTIE 3 — CRÉER LES FICHIERS MANQUANTS (favicon.ico, apple-touch-icon, og-image)

Ces fichiers doivent être créés **avant** d'uploader le site.

### favicon.ico (icône navigateur — format legacy)

Le `favicon.svg` déjà présent fonctionne sur 98% des navigateurs modernes. Le `.ico` est uniquement pour les très vieux navigateurs.

**Méthode simple (en ligne) :**
1. Va sur **favicon.io/favicon-converter**
2. Upload le fichier `favicon.svg`
3. Clique "Download"
4. Extrait le ZIP → prends `favicon.ico` → place-le à la racine du projet

---

### apple-touch-icon.png (180×180px — icône iOS)

**Méthode Canva (gratuit) :**
1. Va sur **canva.com** → Nouveau design → Dimensions personnalisées → 180×180px
2. Reproduis le logo (H bleu marine + VP orange sur fond arrondi)
3. Télécharge en PNG → renomme en `apple-touch-icon.png` → place dans `img/`

**Méthode en ligne :**
- Va sur **favicon.io/favicon-converter** (même outil que ci-dessus) — le ZIP contient aussi `apple-touch-icon.png`

---

### og-homologation-vp.jpg (1200×630px — image de partage social)

C'est l'image qui s'affiche quand quelqu'un partage ton lien sur LinkedIn, Facebook, ou WhatsApp.

**Méthode Canva :**
1. **canva.com** → Nouveau design → Dimensions personnalisées → **1200×630px**
2. Fonds : bleu marine (`#0B1F3A`)
3. Ajoute :
   - Logo / nom "Homologation VP" en grand
   - Slogan : "Homologation VASP & Dériv-VP en 48h"
   - Badge "Agréé ANTS n°228833"
   - Icône voiture ou transformation utilitaire → 5 places
4. Télécharge en **JPG** → renomme en `og-homologation-vp.jpg` → place dans `img/`

**Vérifier le résultat :**
Une fois en ligne, teste sur **opengraph.xyz** ou **metatags.io** pour voir l'aperçu.

---

## RÉSUMÉ — Ordre des opérations

```
1. Créer les 3 fichiers manquants :
   [ ] favicon.ico          → favicon.io/favicon-converter
   [ ] apple-touch-icon.png → même outil ou Canva 180×180
   [ ] img/og-homologation-vp.jpg → Canva 1200×630

2. Pousser sur GitHub :
   [ ] git add .
   [ ] git commit -m "Ajout favicon.ico + apple-touch-icon + og-image"
   [ ] git push

3. Uploader sur l'hébergeur via FTP :
   [ ] Tous les fichiers HTML, CSS, JS, img/, blog/
   [ ] .htaccess (obligatoire)
   [ ] robots.txt + sitemap.xml
   [ ] NE PAS uploader .git/, .claude/, *.md de documentation

4. Vérifications post-mise en ligne :
   [ ] HTTPS fonctionne (cadenas visible)
   [ ] Page 404 personnalisée fonctionne
   [ ] Favicon visible dans l'onglet
   [ ] Image OG visible (tester sur opengraph.xyz)
   [ ] Soumettre sitemap à Google Search Console
   [ ] Connecter Google Analytics 4
```

---

*Guide rédigé le 31 mars 2026*

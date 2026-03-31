/* =========================================================
   HOMOLOGATION VP — main.js
   Vanilla JS — ES6+ — No dependencies
   ========================================================= */

'use strict';

/* =========================================================
   1. NAVIGATION — scroll behaviour + mobile menu
   ========================================================= */
(function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Add .scrolled class when page scrolled > 50px
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        mobileMenu.classList.add('open');
        document.body.classList.add('no-scroll');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });
  }

  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('no-scroll');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  // Close on overlay click
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  // Close when a mobile nav link is clicked (but NOT the dropdown toggle button)
  document.querySelectorAll('.mobile-nav-link:not(.mobile-nav-parent)').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Highlight active nav link — use full path to avoid index.html ambiguity
  const fullPath = window.location.pathname;
  const currentFile = fullPath.split('/').pop() || 'index.html';
  const inBlogDir = fullPath.includes('/blog/');

  document.querySelectorAll('.nav-link[href], .mobile-nav-link[href]').forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkFile = linkHref.split('/').pop();
    const linkInBlog = linkHref.includes('blog');

    // Remove any existing active state first
    link.classList.remove('active');

    const isHome = (currentFile === 'index.html' || currentFile === '') && !inBlogDir;
    const isBlogIndex = linkHref === 'blog/index.html' || linkHref === '../blog/index.html' || linkHref === 'index.html' && inBlogDir;

    if (isHome && (linkHref === 'index.html' || linkHref === '../index.html')) return;

    if (inBlogDir && isBlogIndex && currentFile === 'index.html') {
      link.classList.add('active');
    } else if (!inBlogDir && linkFile === currentFile && !linkInBlog) {
      link.classList.add('active');
    } else if (inBlogDir && linkInBlog && linkFile === currentFile) {
      link.classList.add('active');
    }
  });
})();

/* =========================================================
   2. SMOOTH SCROLL for anchor links
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80; // nav height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* =========================================================
   3. SCROLL-TO-TOP BUTTON
   ========================================================= */
(function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* =========================================================
   4. FADE-IN-UP ANIMATIONS (IntersectionObserver)
   ========================================================= */
(function initAnimations() {
  const elements = document.querySelectorAll('.fade-in-up, .fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* =========================================================
   5. STATS COUNTER ANIMATION
   ========================================================= */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOutQuad = t => t * (2 - t);

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = target * easeOutQuad(progress);
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* =========================================================
   6. FAQ ACCORDION
   ========================================================= */
(function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const ans = openItem.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* =========================================================
   7. ELIGIBILITY QUIZ
   ========================================================= */
(function initQuiz() {
  const quiz = document.getElementById('eligibility-quiz');
  if (!quiz) return;

  const steps = quiz.querySelectorAll('.quiz-step');
  const progressBar = quiz.querySelector('.quiz-progress-fill');
  const progressText = quiz.querySelector('.quiz-progress-text');
  const resultBox = quiz.querySelector('.quiz-result');
  const resetBtn = quiz.querySelector('.quiz-reset');
  let current = 0;
  const answers = {};

  const showStep = (index) => {
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    if (progressBar) {
      const pct = (index / steps.length) * 100;
      progressBar.style.width = pct + '%';
    }
    if (progressText) progressText.textContent = `Question ${index + 1} sur ${steps.length}`;
  };

  const showResult = () => {
    steps.forEach(s => s.classList.remove('active'));
    if (progressBar) progressBar.style.width = '100%';
    if (progressText) progressText.textContent = 'Résultat';

    // Eligibility logic
    const eligible =
      answers.date === 'after' &&
      (answers.type === 'van' || answers.type === 'car') &&
      answers.ptac !== 'over7500';

    if (resultBox) {
      resultBox.classList.remove('hidden', 'eligible', 'ineligible');
      resultBox.classList.add(eligible ? 'eligible' : 'ineligible');

      if (eligible) {
        resultBox.innerHTML = `
          <div class="quiz-result-icon">✓</div>
          <h3>Votre véhicule est éligible</h3>
          <p>Bonne nouvelle ! D'après vos réponses, votre véhicule peut être homologué VASP ou Dériv-VP. Contactez-nous pour démarrer votre dossier.</p>
          <div class="quiz-result-actions">
            <a href="https://wa.me/33659469728?text=Bonjour%2C%20mon%20v%C3%A9hicule%20est%20%C3%A9ligible%20et%20je%20souhaite%20d%C3%A9marrer%20mon%20dossier." class="btn btn-whatsapp" target="_blank" rel="noopener">Démarrer sur WhatsApp</a>
            <a href="contact.html" class="btn btn-secondary">Nous contacter</a>
          </div>
          <button class="quiz-reset btn-link" type="button">Recommencer le quiz</button>
        `;
      } else {
        let reason = '';
        if (answers.date === 'before') {
          reason = 'Votre véhicule a été mis en circulation avant le 1er juillet 2015. L\'arrêté du 7 novembre 2014 impose cette date limite pour être éligible à l\'homologation VASP.';
        } else if (answers.ptac === 'over7500') {
          reason = 'Votre véhicule dépasse 7 500 kg de PTAC. Les véhicules lourds ne sont pas éligibles à la procédure standard d\'homologation VASP.';
        } else {
          reason = 'D\'après vos réponses, votre véhicule ne correspond pas aux critères d\'homologation VASP ou Dériv-VP.';
        }
        resultBox.innerHTML = `
          <div class="quiz-result-icon">✗</div>
          <h3>Votre véhicule n'est pas éligible</h3>
          <p>${reason}</p>
          <p>Vous avez un doute ? Contactez-nous, nous analyserons votre situation personnellement.</p>
          <div class="quiz-result-actions">
            <a href="contact.html" class="btn btn-primary">Parler à un expert</a>
          </div>
          <button class="quiz-reset btn-link" type="button">Recommencer le quiz</button>
        `;
      }
      resultBox.classList.remove('hidden');

      // Re-bind reset
      const newReset = resultBox.querySelector('.quiz-reset');
      if (newReset) newReset.addEventListener('click', resetQuiz);
    }
  };

  const resetQuiz = () => {
    Object.keys(answers).forEach(k => delete answers[k]);
    current = 0;
    if (resultBox) resultBox.classList.add('hidden');
    showStep(0);
    // Uncheck all options
    quiz.querySelectorAll('.quiz-option.selected').forEach(o => o.classList.remove('selected'));
  };

  // Handle option selection
  quiz.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const step = opt.closest('.quiz-step');
      const key = step.dataset.key;
      const value = opt.dataset.value;

      // Deselect siblings
      step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      answers[key] = value;

      // Auto-advance after short delay
      setTimeout(() => {
        if (current < steps.length - 1) {
          current++;
          showStep(current);
        } else {
          showResult();
        }
      }, 300);
    });
  });

  if (resetBtn) resetBtn.addEventListener('click', resetQuiz);

  // Init
  showStep(0);
})();

/* =========================================================
   8. CONTACT FORM VALIDATION
   ========================================================= */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const showError = (input, msg) => {
    const group = input.closest('.form-group');
    if (!group) return;
    let err = group.querySelector('.form-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'form-error';
      group.appendChild(err);
    }
    err.textContent = msg;
    input.classList.add('error');
  };

  const clearError = (input) => {
    const group = input.closest('.form-group');
    if (!group) return;
    const err = group.querySelector('.form-error');
    if (err) err.remove();
    input.classList.remove('error');
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => phone === '' || /^[\d\s\+\-\(\)]{8,15}$/.test(phone);

  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', () => clearError(input));
    input.addEventListener('blur', () => {
      if (input.required && !input.value.trim()) {
        showError(input, 'Ce champ est obligatoire.');
      } else if (input.type === 'email' && input.value && !validateEmail(input.value)) {
        showError(input, 'Adresse email invalide.');
      } else if (input.type === 'tel' && !validatePhone(input.value)) {
        showError(input, 'Numéro de téléphone invalide.');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(input => {
      if (!input.value.trim()) {
        showError(input, 'Ce champ est obligatoire.');
        valid = false;
      }
      if (input.type === 'email' && !validateEmail(input.value)) {
        showError(input, 'Adresse email invalide.');
        valid = false;
      }
      if (input.type === 'checkbox' && !input.checked) {
        showError(input, 'Vous devez accepter pour continuer.');
        valid = false;
      }
    });

    if (!valid) return;

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
    }

    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        form.innerHTML = `
          <div class="form-success">
            <div class="form-success-icon">✓</div>
            <h3>Message envoyé !</h3>
            <p>Nous vous répondrons sous 2 heures. Vous pouvez aussi nous joindre directement sur <a href="https://wa.me/33659469728" target="_blank" rel="noopener">WhatsApp</a>.</p>
          </div>
        `;
      } else {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Envoyer mon message';
        }
        response.json().then(data => {
          const msg = data.errors ? data.errors.map(e => e.message).join(', ') : 'Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.';
          const errBox = form.querySelector('.form-send-error') || document.createElement('p');
          errBox.className = 'form-send-error';
          errBox.style.cssText = 'color:#DC2626;font-size:.85rem;margin-top:.75rem;';
          errBox.textContent = msg;
          if (!form.querySelector('.form-send-error')) form.appendChild(errBox);
        });
      }
    })
    .catch(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer mon message';
      }
    });
  });
})();

/* =========================================================
   9. WHATSAPP FAB TOOLTIP
   ========================================================= */
(function initWhatsAppFAB() {
  const fab = document.getElementById('whatsapp-fab');
  if (!fab) return;

  // Show tooltip after 3s on desktop
  if (window.innerWidth > 768) {
    setTimeout(() => {
      const tooltip = fab.querySelector('.fab-tooltip');
      if (tooltip) tooltip.classList.add('show');
      setTimeout(() => { if (tooltip) tooltip.classList.remove('show'); }, 4000);
    }, 3000);
  }
})();

/* =========================================================
   10. COOKIE CONSENT BANNER (RGPD)
   ========================================================= */
(function initCookieBanner() {
  const STORAGE_KEY = 'hvp_cookie_consent';
  if (localStorage.getItem(STORAGE_KEY)) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Consentement cookies');
  banner.innerHTML = `
    <div class="cookie-banner-content">
      <p>Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. Consultez notre <a href="politique-confidentialite.html">politique de confidentialité</a>.</p>
      <div class="cookie-actions">
        <button id="cookie-accept" class="btn btn-primary btn-sm">Accepter</button>
        <button id="cookie-decline" class="btn btn-secondary btn-sm">Refuser</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  const dismiss = (accepted) => {
    localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'declined');
    banner.classList.add('cookie-banner-hide');
    setTimeout(() => banner.remove(), 400);
  };

  document.getElementById('cookie-accept').addEventListener('click', () => dismiss(true));
  document.getElementById('cookie-decline').addEventListener('click', () => dismiss(false));

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => banner.classList.add('cookie-banner-show'));
  });
})();

/* =========================================================
   11. ANNOUNCEMENT BAR — pause on hover
   ========================================================= */
(function initAnnouncementBar() {
  const ticker = document.querySelector('.ticker-track');
  if (!ticker) return;

  ticker.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  ticker.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
})();

/* =========================================================
   12. PRICING PACK SELECTOR
   ========================================================= */
(function initPricing() {
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
})();

/* =========================================================
   13. SERVICES DROPDOWN (desktop nav)
   ========================================================= */
(function initDropdown() {
  const dropdownTriggers = document.querySelectorAll('.nav-item-dropdown');
  dropdownTriggers.forEach(trigger => {
    const dropdown = trigger.querySelector('.nav-dropdown');
    if (!dropdown) return;

    trigger.addEventListener('mouseenter', () => dropdown.classList.add('open'));
    trigger.addEventListener('mouseleave', () => dropdown.classList.remove('open'));

    // Keyboard accessibility
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
      if (e.key === 'Escape') dropdown.classList.remove('open');
    });
  });
})();

/* =========================================================
   14. MOBILE NAV DROPDOWN TOGGLE
   ========================================================= */
(function initMobileDropdown() {
  document.querySelectorAll('.mobile-nav-parent').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = btn.nextElementSibling;
      if (sub && sub.classList.contains('mobile-nav-sub')) {
        sub.classList.toggle('open');
        btn.classList.toggle('expanded');
      }
    });
  });
})();

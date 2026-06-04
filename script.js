/* ============================================
   ISABEVE KORKAMA — PORTFOLIO SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* =============================================
     1. NAVBAR — SCROLL & MOBILE TOGGLE
     ============================================= */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    navLinks.classList.contains('open')
      ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
         spans[1].style.opacity = '0',
         spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
      : (spans[0].style.transform = '',
         spans[1].style.opacity = '',
         spans[2].style.transform = '');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  /* =============================================
     2. SMOOTH SCROLL REVEAL
     ============================================= */
  const revealEls = document.querySelectorAll(
    '#about, #music, #gallery, #personal, #achievements, #contact, ' +
    '.about-card, .music-card, .gallery-item, .tl-item, ' +
    '.detail-item, .featured-player, .profile-card, .profile-details'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  /* =============================================
     3. MUSIC PLAYER (Demo / Simulated)
     ============================================= */
  let isPlaying = false;
  let progress = 35; // Starting at 35%
  let interval = null;
  const totalSeconds = 222; // 3:42

  const fpPlay = document.getElementById('fpPlay');
  const fpPlayIcon = document.getElementById('fpPlayIcon');
  const fpProgress = document.getElementById('fpProgress');
  const fpCurrent = document.getElementById('fpCurrent');

  function formatTime(pct) {
    const secs = Math.floor((pct / 100) * totalSeconds);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function updatePlayer() {
    fpProgress.style.width = `${progress}%`;
    fpCurrent.textContent = formatTime(progress);
  }

  fpPlay.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      fpPlayIcon.className = 'fas fa-pause';
      interval = setInterval(() => {
        progress += 0.04;
        if (progress >= 100) { progress = 0; isPlaying = false; fpPlayIcon.className = 'fas fa-play'; clearInterval(interval); }
        updatePlayer();
      }, 100);
    } else {
      fpPlayIcon.className = 'fas fa-play';
      clearInterval(interval);
    }
  });

  document.getElementById('fpPrev').addEventListener('click', () => {
    progress = Math.max(0, progress - 10);
    updatePlayer();
  });

  document.getElementById('fpNext').addEventListener('click', () => {
    progress = Math.min(100, progress + 10);
    updatePlayer();
  });

  // Progress bar click
  document.querySelector('.fp-progress-bar').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    progress = ((e.clientX - rect.left) / rect.width) * 100;
    updatePlayer();
  });

  updatePlayer();

  // Mini play buttons
  document.querySelectorAll('.mc-play').forEach(btn => {
    btn.addEventListener('click', function() {
      const icon = this.querySelector('i');
      const isActive = icon.classList.contains('fa-pause');
      // Reset all
      document.querySelectorAll('.mc-play i').forEach(i => {
        i.className = 'fas fa-play';
        i.closest('.mc-play').style.background = '';
      });
      if (!isActive) {
        icon.className = 'fas fa-pause';
        this.style.background = 'var(--orange-dark)';
      }
    });
  });

  /* =============================================
     4. MUSIC CATEGORY FILTER
     ============================================= */
  const musicCats = document.querySelectorAll('.music-cat');
  const musicCards = document.querySelectorAll('.music-card');

  musicCats.forEach(btn => {
    btn.addEventListener('click', () => {
      musicCats.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      musicCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = 'flex';
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.3s, transform 0.3s';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* =============================================
     5. GALLERY CATEGORY FILTER
     ============================================= */
  const gCats = document.querySelectorAll('.g-cat');
  const galleryItems = document.querySelectorAll('.gallery-item');

  gCats.forEach(btn => {
    btn.addEventListener('click', () => {
      gCats.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.gcat;
      galleryItems.forEach(item => {
        if (cat === 'all' || item.dataset.gcat === cat) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.35s, transform 0.35s';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 20);
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* =============================================
     6. GALLERY LIGHTBOX
     ============================================= */
  const lightbox = document.getElementById('lightbox');
  const lbContent = document.getElementById('lbContent');
  const lbClose = document.getElementById('lbClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const titleEl = item.querySelector('.gi-overlay span');
      const catEl = item.querySelector('.gi-overlay small');
      const iconEl = item.querySelector('.gi-placeholder i');

      const title = titleEl ? titleEl.textContent : 'Artwork';
      const cat = catEl ? catEl.textContent : '';
      const iconClass = iconEl ? iconEl.className : 'fas fa-image';

      lbContent.innerHTML = `
        <div style="text-align:center;">
          <div style="width:180px;height:180px;border-radius:20px;background:rgba(244,124,38,0.15);
            border:2px solid rgba(244,124,38,0.3);display:flex;align-items:center;
            justify-content:center;margin:0 auto 1.5rem;font-size:4rem;color:rgba(244,124,38,0.7);">
            <i class="${iconClass}"></i>
          </div>
          <h3 style="font-size:1.4rem;font-weight:800;letter-spacing:-0.02em;margin-bottom:0.5rem;">${title}</h3>
          <p style="font-size:0.85rem;opacity:0.6;letter-spacing:0.08em;">${cat}</p>
          <p style="font-size:0.8rem;margin-top:1.5rem;opacity:0.5;">
            Add your actual artwork image here by replacing the placeholder content.
          </p>
        </div>
      `;

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* =============================================
     7. CONTACT FORM
     ============================================= */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      formSuccess.classList.add('show');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove('show'), 5000);
    }, 1500);
  });

  /* =============================================
     8. ACTIVE NAV LINK ON SCROLL
     ============================================= */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) current = section.id;
    });
    navAnchors.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === `#${current}`) {
        a.style.color = 'var(--orange)';
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* =============================================
     9. STAGGERED CARD REVEALS
     ============================================= */
  const staggerGroups = [
    '.about-cards .about-card',
    '.music-grid .music-card',
    '.masonry-gallery .gallery-item',
    '.timeline .tl-item',
    '.detail-row .detail-item',
  ];

  staggerGroups.forEach(selector => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.07}s`;
    });
  });

  /* =============================================
     10. HERO PORTRAIT PARALLAX
     ============================================= */
  const portrait = document.querySelector('.portrait-placeholder');
  if (portrait) {
    window.addEventListener('mousemove', (e) => {
      const xRatio = (e.clientX / window.innerWidth - 0.5) * 10;
      const yRatio = (e.clientY / window.innerHeight - 0.5) * 10;
      portrait.style.transform = `translate(${xRatio}px, ${yRatio}px)`;
    });
  }

  /* =============================================
     11. TYPING ANIMATION FOR HERO TITLE
     ============================================= */
  const heroRoles = document.querySelectorAll('.role-badge');
  heroRoles.forEach((badge, i) => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(10px)';
    badge.style.transition = 'opacity 0.4s, transform 0.4s';
    setTimeout(() => {
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 900 + i * 180);
  });

  /* =============================================
     12. TIMELINE ITEM HOVER HIGHLIGHT
     ============================================= */
  document.querySelectorAll('.tl-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.tl-dot').style.background = 'var(--orange-dark)';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.tl-dot').style.background = '';
    });
  });

  /* =============================================
     INIT
     ============================================= */
  updateActiveNav();
  console.log('%c Isabeve Korkama Portfolio ', 'background:#F47C26;color:#fff;font-size:14px;font-weight:bold;padding:6px 12px;border-radius:6px;');
  console.log('%c Singer • Sketch Artist • Creative Soul', 'color:#F47C26;font-size:12px;');
});
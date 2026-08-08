/* Marc & Naomie — 4 July 2027 — site behavior */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Starfield ---------------- */
  const field = document.getElementById('starfield');
  if (field) {
    const COUNT = 90;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star' + (Math.random() < 0.15 ? ' big' : '') + (Math.random() < 0.4 ? ' dim' : '');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
      star.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + 's';
      frag.appendChild(star);
    }
    field.appendChild(frag);
  }

  /* ---------------- Countdown ---------------- */
  // Wedding: July 4, 2027, 3:00 PM Mountain Time (MDT, UTC-6 in July)
  const WEDDING_DATE = new Date('2027-07-04T15:00:00-06:00');

  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    let diff = WEDDING_DATE - now;

    if (diff <= 0) {
      if (els.days) els.days.textContent = '00';
      if (els.hours) els.hours.textContent = '00';
      if (els.mins) els.mins.textContent = '00';
      if (els.secs) els.secs.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    const secs = Math.floor(diff / 1000);

    if (els.days) els.days.textContent = pad(days);
    if (els.hours) els.hours.textContent = pad(hours);
    if (els.mins) els.mins.textContent = pad(mins);
    if (els.secs) els.secs.textContent = pad(secs);
  }

  if (els.days) {
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- Scroll reveals (sections + dividers) ---------------- */
  const revealables = document.querySelectorAll('.reveal, .divider');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add('in-view'));
  }

  /* ---------------- Sticky nav + floating RSVP ---------------- */
  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const floatingRsvp = document.getElementById('floatingRsvp');
  const heroEl = document.querySelector('.hero');

  function onScroll() {
    const solid = window.scrollY > 60;
    if (nav) nav.classList.toggle('is-solid', solid);

    if (floatingRsvp && heroEl) {
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      floatingRsvp.classList.toggle('visible', heroBottom < 0);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close mobile menu after a link is tapped
    nav.querySelectorAll('.nav-link, .nav-rsvp').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // close others
      document.querySelectorAll('.faq-item.is-open').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------------- Ambient audio toggle ---------------- */
  const audioBtn = document.getElementById('audioToggle');
  const audio = document.getElementById('ambientAudio');

  if (audioBtn && audio) {
    audioBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.volume = 0.4;
        audio.play().catch(() => {
          // Autoplay/decoding may fail silently if no audio file has been added yet.
          console.warn('Add an ambient.mp3 file at assets/audio/ to enable background music.');
        });
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-pressed', 'true');
      } else {
        audio.pause();
        audioBtn.classList.remove('playing');
        audioBtn.setAttribute('aria-pressed', 'false');
      }
    });
  }
});

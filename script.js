(function () {
  const CA = 'AlyciaBellapump';

  // Flying love icons
  const loveContainer = document.querySelector('.love-float');
  const heartSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  const heartOutlineSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  const sparkSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"/></svg>';

  const colors = ['love-icon--rose', 'love-icon--deep', 'love-icon--gold', 'love-icon--blush'];
  const motions = ['', 'love-icon--drift-left', 'love-icon--drift-right', 'love-icon--rise-fast', 'love-icon--sway'];
  const icons = [heartSvg, heartSvg, heartSvg, heartOutlineSvg, sparkSvg];

  for (let i = 0; i < 42; i++) {
    const el = document.createElement('div');
    const size = 10 + Math.random() * 22;
    el.className = 'love-icon ' + colors[Math.floor(Math.random() * colors.length)] + ' ' + motions[Math.floor(Math.random() * motions.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.animationDuration = 10 + Math.random() * 20 + 's';
    el.style.animationDelay = Math.random() * 20 + 's';
    el.style.setProperty('--love-opacity', (0.2 + Math.random() * 0.35).toFixed(2));
    el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    loveContainer.appendChild(el);
  }

  // Header scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile nav
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Copy CA
  const copyBtn = document.getElementById('copy-ca');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CA);
      copyBtn.classList.add('copied');
      setTimeout(() => copyBtn.classList.remove('copied'), 2000);
    } catch {
      const range = document.createRange();
      range.selectNode(document.getElementById('ca'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      copyBtn.classList.add('copied');
      setTimeout(() => copyBtn.classList.remove('copied'), 2000);
    }
  });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();

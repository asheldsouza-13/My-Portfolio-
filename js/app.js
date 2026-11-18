/**
 * ASHEL DSOUZA - PORTFOLIO INTERACTION ENGINE
 * Accessible, lightweight, zero external dependencies.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme Toggle Management (Light / Dark Mode)
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'ashel_portfolio_theme';
  const htmlElement = document.documentElement;
  const themeToggleBtns = document.querySelectorAll('[data-action="toggle-theme"]');

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) return saved;
    // Default appearance mode requested: Light Theme
    return 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    themeToggleBtns.forEach((btn) => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      showToast(`Switched to ${next} mode`);
    });
  });

  // -------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // -------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawerOverlay = document.getElementById('drawer-overlay');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openMobileDrawer() {
    document.body.classList.add('mobile-drawer-open');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    if (drawerCloseBtn) drawerCloseBtn.focus();
  }

  function closeMobileDrawer() {
    document.body.classList.remove('mobile-drawer-open');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.focus();
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === mobileDrawerOverlay) closeMobileDrawer();
    });
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  // -------------------------------------------------------------------------
  // 3. Navigation Active State on Scroll (ScrollSpy)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navOffset = 120;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - navOffset;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // -------------------------------------------------------------------------
  // 4. Project Filtering Tabs
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'grid';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 5. Toast Notifications
  // -------------------------------------------------------------------------
  let toastTimer = null;
  const toastElement = document.getElementById('toast-notice');

  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 2800);
  }

  // -------------------------------------------------------------------------
  // 6. Copy to Clipboard Utility
  // -------------------------------------------------------------------------
  const copyBtns = document.querySelectorAll('[data-copy-text]');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Text';

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for environments where navigator.clipboard might be restricted
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast(`${label} copied to clipboard!`);
      } catch (err) {
        showToast(`Could not copy. Text: ${text}`);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Modals: Project Details Modal & Resume Modal
  // -------------------------------------------------------------------------
  const resumeModal = document.getElementById('resume-modal');
  const projectModal = document.getElementById('project-modal');
  const openResumeBtns = document.querySelectorAll('[data-action="open-resume"]');
  const openProjectBtns = document.querySelectorAll('[data-action="open-project-details"]');
  const modalCloseBtns = document.querySelectorAll('[data-action="close-modal"]');
  let previouslyFocusedElement = null;

  function openModal(modal) {
    if (!modal) return;
    previouslyFocusedElement = document.activeElement;
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  openResumeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  });

  openProjectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(projectModal);
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Close when clicking overlay backdrop
  [resumeModal, projectModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Print Resume trigger
  const printResumeBtn = document.getElementById('print-resume-btn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // -------------------------------------------------------------------------
  // 8. Keyboard Accessibility (Global ESC Handler)
  // -------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.body.classList.contains('mobile-drawer-open')) {
        closeMobileDrawer();
      }
      if (resumeModal && resumeModal.classList.contains('active')) {
        closeModal(resumeModal);
      }
      if (projectModal && projectModal.classList.contains('active')) {
        closeModal(projectModal);
      }
    }
  });

  // -------------------------------------------------------------------------
  // 9. Interactive Contact Form (Generates clean mailto link)
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const recipient = 'dsouzaashel1301@gmail.com';
      const mailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via Portfolio Website`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

      // Open mail client
      window.location.href = mailtoUrl;

      showToast('Opening your default email client...');
    });
  }

  // -------------------------------------------------------------------------
  // 10. Back to Top Button
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();

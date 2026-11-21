/* DomeOS-Next · 交互
   深浅色切换、导航与入场动画 */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 深浅色 ---------------- */
  var themeBtn = document.getElementById('themeToggle');
  var themeMeta = document.getElementById('themeColor');

  function syncThemeUI() {
    var light = root.getAttribute('data-color-mode') === 'light';
    if (themeBtn) {
      themeBtn.setAttribute('aria-pressed', light ? 'true' : 'false');
      themeBtn.setAttribute('aria-label', light ? '切换到深色模式' : '切换到浅色模式');
    }
    if (themeMeta) themeMeta.setAttribute('content', light ? '#f4f7fd' : '#070b13');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-color-mode') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-color-mode', next);
      try { localStorage.setItem('dn-theme', next); } catch (e) {}
      syncThemeUI();
    });
  }

  function applyStoredTheme() {
    var saved = null;
    try { saved = localStorage.getItem('dn-theme'); } catch (e) {}
    if (saved === 'light' || saved === 'dark') {
      root.setAttribute('data-color-mode', saved);
    }
    syncThemeUI();
  }

  applyStoredTheme();
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) applyStoredTheme();
  });

  /* ---------------- 顶部导航 ---------------- */
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var menuBtn = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', '打开菜单');
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------------- 导航高光 ---------------- */
  var navHover = navLinks ? navLinks.querySelector('.nav-hover') : null;
  if (navLinks && navHover) {
    var movePill = function (link) {
      if (!link || window.matchMedia('(max-width: 820px)').matches) return;
      navHover.style.setProperty('--pill-x', link.offsetLeft + 'px');
      navHover.style.setProperty('--pill-w', link.offsetWidth + 'px');
      navLinks.classList.add('pill-on');
    };
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('mouseenter', function () { movePill(link); });
      link.addEventListener('focus', function () { movePill(link); });
    });
    navLinks.addEventListener('mouseleave', function () {
      navLinks.classList.remove('pill-on');
    });
    navLinks.addEventListener('blur', function () {
      navLinks.classList.remove('pill-on');
    }, true);
  }

  /* ---------------- 入场动画 ---------------- */
  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach(function (el) { io.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------- 年份 ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

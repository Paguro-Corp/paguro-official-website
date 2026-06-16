'use client';

import { useEffect } from 'react';

import STATIC_TEXT_EN from './staticTextTranslations';

const LANG_STORAGE_KEY = 'paguro-lang-v2';
const THEME_STORAGE_KEY = 'paguro-theme';

const COPY = {
  es: {
    'page-home': 'Home',
    'page-sobre': 'Sobre',
    'page-ecosistema': 'Ecosistema',
    'nav-sobre': 'Sobre Paguro',
    'nav-ecosistema': 'Ecosistema',
    'nav-metodo': 'Método',
    'nav-proyectos': 'Proyectos',
    'nav-insights': 'Insights / Lab',
    'nav-contacto': 'Contacto',
    'nav-cta': 'Contacto',
    'hero-eyebrow': 'HOLDING · BOGOTÁ · ARQUITECTURA EMPRESARIAL ADAPTATIVA',
    'hero-h1-a': 'No improvisamos.',
    'hero-h1-b': 'Arquitectamos.',
    'hero-lede':
      'Diseñamos estructuras inteligentes que generan valor de forma eficiente, adaptable y difícil de copiar. Como el cangrejo paguro: la arquitectura permanece, el caparazón cambia.',
    'hero-cta-1': 'Explorar el ecosistema',
    'hero-cta-2': 'Conocer la filosofía',
    'hero-stat-1-l': 'Unidades activas',
    'hero-stat-2-l': 'En desarrollo',
    'hero-stat-3-l': 'Modelo dual',
    'hero-stat-4-l': 'Sede · Bogotá',
    'contact-kicker': 'CONTACTO · PRIMER PASO',
    'contact-title': 'Hablemos del proyecto.',
    'contact-body':
      'Si tienes una idea, un reto empresarial o quieres saber cómo opera una arquitectura adaptativa, escríbenos. Respondemos en 24–48h.',
    'contact-loc-label': 'Sede',
    'contact-email-label': 'Email',
    'field-nombre': 'Nombre',
    'field-apellido': 'Apellido',
    'field-telefono': 'Teléfono',
    'field-empresa': 'Nombre empresa',
    'field-website': 'Website',
    'field-mensaje': 'Mensaje',
    opt: '(opcional)',
    'ph-nombre': 'Tu nombre',
    'ph-apellido': 'Tu apellido',
    'ph-email': 'correo@ejemplo.com',
    'ph-telefono': '+57 300 000 0000',
    'ph-website': 'https://tuempresa.com',
    'ph-empresa': 'Tu empresa',
    'ph-mensaje': 'Cuéntanos sobre tu proyecto o consulta…',
    'req-note': 'Campos obligatorios',
    'submit-btn': 'Enviar contacto',
    'success-msg': '¡Mensaje enviado! Te contactamos pronto.',
    'err-required': 'Campo obligatorio',
    'err-email': 'Ingresa un email válido',
    'err-url': 'Ingresa una URL válida (https://…)',
    'footer-brand-desc':
      'Holding institucional moderno. Arquitectura empresarial adaptativa, automatización e inteligencia sistémica. Bogotá · Colombia.',
    'footer-holding': 'Holding',
    'footer-brands': 'Marcas',
    'footer-content': 'Contenido',
    'footer-legal': 'Legal',
    'footer-about': 'Sobre Paguro',
    'footer-philosophy': 'Filosofia',
    'footer-method': 'Metodo',
    'footer-values': 'Valores',
    'footer-cases': 'Casos',
    'footer-contact': 'Contacto',
    'footer-privacy': 'Privacidad',
    'footer-terms': 'Terminos',
    'footer-tagline': 'Paguro es una arquitectura diseñada para producir excelencia repetible.',
  },
  en: {
    'page-home': 'Home',
    'page-sobre': 'About',
    'page-ecosistema': 'Ecosystem',
    'nav-sobre': 'About Paguro',
    'nav-ecosistema': 'Ecosystem',
    'nav-metodo': 'Method',
    'nav-proyectos': 'Projects',
    'nav-insights': 'Insights / Lab',
    'nav-contacto': 'Contact',
    'nav-cta': 'Contact',
    'hero-eyebrow': 'HOLDING · BOGOTÁ · ADAPTIVE BUSINESS ARCHITECTURE',
    'hero-h1-a': "We don't improvise.",
    'hero-h1-b': 'We architect.',
    'hero-lede':
      'We design intelligent structures that generate value efficiently, adaptively, and in ways hard to replicate. Like the hermit crab: the architecture stays, the shell changes.',
    'hero-cta-1': 'Explore the ecosystem',
    'hero-cta-2': 'Read the philosophy',
    'hero-stat-1-l': 'Active units',
    'hero-stat-2-l': 'In development',
    'hero-stat-3-l': 'Dual model',
    'hero-stat-4-l': 'HQ · Bogotá',
    'contact-kicker': 'CONTACT · FIRST STEP',
    'contact-title': "Let's talk about your project.",
    'contact-body':
      'If you have an idea, a business challenge, or want to understand how an adaptive architecture works — reach out. We respond within 24–48h.',
    'contact-loc-label': 'Location',
    'contact-email-label': 'Email',
    'field-nombre': 'First name',
    'field-apellido': 'Last name',
    'field-telefono': 'Phone',
    'field-empresa': 'Company name',
    'field-website': 'Website',
    'field-mensaje': 'Message',
    opt: '(optional)',
    'ph-nombre': 'Your first name',
    'ph-apellido': 'Your last name',
    'ph-email': 'email@example.com',
    'ph-telefono': '+1 300 000 0000',
    'ph-website': 'https://yourcompany.com',
    'ph-empresa': 'Your company',
    'ph-mensaje': 'Tell us about your project or inquiry…',
    'req-note': 'Required fields',
    'submit-btn': 'Send contact',
    'success-msg': "Message sent! We'll be in touch soon.",
    'err-required': 'Required field',
    'err-email': 'Enter a valid email address',
    'err-url': 'Enter a valid URL (https://…)',
    'footer-brand-desc':
      'Modern institutional holding. Adaptive business architecture, automation and systemic intelligence. Bogotá · Colombia.',
    'footer-holding': 'Holding',
    'footer-brands': 'Brands',
    'footer-content': 'Content',
    'footer-legal': 'Legal',
    'footer-about': 'About Paguro',
    'footer-philosophy': 'Philosophy',
    'footer-method': 'Method',
    'footer-values': 'Values',
    'footer-cases': 'Cases',
    'footer-contact': 'Contact',
    'footer-privacy': 'Privacy',
    'footer-terms': 'Terms',
    'footer-tagline': 'Paguro is an architecture designed to produce repeatable excellence.',
  },
};

const SUN =
  '<svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M8 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 2zm0 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 11zm-7-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 1 8zm10.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM2.636 4.05a.5.5 0 0 1 .708-.708l.707.707a.5.5 0 0 1-.707.707l-.708-.707zm9.193 8.485a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 0 1 .707.707l-.707.707zM2.636 11.95a.5.5 0 0 1 0-.707l.708-.707a.5.5 0 0 1 .707.707l-.707.708a.5.5 0 0 1-.708 0zm9.193-8.485a.5.5 0 0 1 .707.707l-.707.707a.5.5 0 0 1-.707-.707l.707-.707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>';
const MOON =
  '<svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M6 .278a.77.77 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>';

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function splitOuterWhitespace(value) {
  const leading = value.match(/^\s*/)?.[0] || '';
  const trailing = value.match(/\s*$/)?.[0] || '';
  return { leading, trailing };
}

export default function PageBehavior({ screenLabel }) {
  useEffect(() => {
    document.body.classList.add('density-regular', 'accent-orange');
    document.body.dataset.screenLabel = screenLabel;
  }, [screenLabel]);

  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return undefined;

    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let theme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    let lang = localStorage.getItem(LANG_STORAGE_KEY) || 'es';

    const applyTheme = (nextTheme) => {
      theme = nextTheme;
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      document.body.classList.toggle('theme-light', nextTheme === 'light');

      const button = document.getElementById('toggle-theme');
      if (button) {
        button.innerHTML = nextTheme === 'dark' ? SUN : MOON;
        button.title = nextTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      }
    };

    const applyLang = (nextLang) => {
      lang = nextLang;
      localStorage.setItem(LANG_STORAGE_KEY, nextLang);
      document.documentElement.lang = nextLang;
      const dictionary = COPY[nextLang];

      document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key] !== undefined) element.textContent = dictionary[key];
      });

      document.querySelectorAll('[data-i18n-ph]').forEach((element) => {
        const key = element.getAttribute('data-i18n-ph');
        if (dictionary[key] !== undefined) element.placeholder = dictionary[key];
      });

      document.querySelectorAll('[data-copy-es][data-copy-en]').forEach((element) => {
        const value = element.getAttribute(`data-copy-${nextLang}`);
        if (value !== null) element.textContent = value;
      });

      const walker = document.createTreeWalker(document.body, 4);
      let textNode = walker.nextNode();
      while (textNode) {
        const parent = textNode.parentElement;
        if (
          parent &&
          !parent.closest('[data-i18n], [data-i18n-ph], [data-copy-es][data-copy-en]') &&
          parent.tagName !== 'SCRIPT' &&
          parent.tagName !== 'STYLE'
        ) {
          const originalText = textNode.paguroOriginalText || textNode.nodeValue;
          const key = normalizeText(originalText);
          const translatedText = STATIC_TEXT_EN[key];
          if (translatedText) {
            textNode.paguroOriginalText = originalText;
            const { leading, trailing } = splitOuterWhitespace(originalText);
            textNode.nodeValue = nextLang === 'en' ? `${leading}${translatedText}${trailing}` : originalText;
          }
        }
        textNode = walker.nextNode();
      }

      const button = document.getElementById('toggle-lang');
      if (button) button.textContent = nextLang === 'es' ? 'EN' : 'ES';
    };

    const initForm = () => {
      const form = document.getElementById('contact-form');
      if (!form) return undefined;

      const onSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        const dictionary = COPY[lang];

        form.querySelectorAll('.form-group').forEach((group) => {
          group.classList.remove('has-error');
          const message = group.querySelector('.form-error-msg');
          if (message) message.textContent = '';
        });

        form.querySelectorAll('[required]').forEach((input) => {
          if (!input.value.trim()) {
            const group = input.closest('.form-group');
            group?.classList.add('has-error');
            const message = group?.querySelector('.form-error-msg');
            if (message) message.textContent = dictionary['err-required'];
            valid = false;
          }
        });

        const emailInput = form.querySelector('#cf-email');
        if (emailInput?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          const group = emailInput.closest('.form-group');
          group?.classList.add('has-error');
          const message = group?.querySelector('.form-error-msg');
          if (message) message.textContent = dictionary['err-email'];
          valid = false;
        }

        const urlInput = form.querySelector('#cf-website');
        if (urlInput?.value.trim() && !/^https?:\/\/.+/.test(urlInput.value.trim())) {
          const group = urlInput.closest('.form-group');
          group?.classList.add('has-error');
          const message = group?.querySelector('.form-error-msg');
          if (message) message.textContent = dictionary['err-url'];
          valid = false;
        }

        if (valid) form.classList.add('is-sent');
      };

      form.addEventListener('submit', onSubmit);
      return () => form.removeEventListener('submit', onSubmit);
    };

    applyTheme(theme);
    applyLang(lang);
    const cleanupForm = initForm();

    const themeButton = document.getElementById('toggle-theme');
    const langButton = document.getElementById('toggle-lang');
    const onThemeClick = () => applyTheme(theme === 'dark' ? 'light' : 'dark');
    const onLangClick = () => applyLang(lang === 'es' ? 'en' : 'es');

    themeButton?.addEventListener('click', onThemeClick);
    langButton?.addEventListener('click', onLangClick);

    return () => {
      cleanupForm?.();
      themeButton?.removeEventListener('click', onThemeClick);
      langButton?.removeEventListener('click', onLangClick);
    };
  }, []);

  return null;
}

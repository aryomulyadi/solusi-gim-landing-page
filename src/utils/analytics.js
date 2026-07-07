const SESSION_UTM_KEY = 'solusigim_utm';

function getUtmFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  for (const key of keys) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return Object.keys(utm).length > 0 ? utm : null;
}

export function initUTM() {
  const utm = getUtmFromUrl();
  if (utm) {
    try {
      sessionStorage.setItem(SESSION_UTM_KEY, JSON.stringify(utm));
    } catch {
      /* sessionStorage not available */
    }
  }
}

export function getUTMParams() {
  try {
    const raw = sessionStorage.getItem(SESSION_UTM_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackCTA(action, label, extraParams = {}) {
  trackEvent(action, {
    event_category: 'engagement',
    event_label: label,
    ...getUTMParams(),
    ...extraParams,
  });
}

export function initSectionTracking() {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            trackEvent(`view_${sectionId}`, {
              event_category: 'page_view',
              event_label: sectionId,
              ...getUTMParams(),
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
}

export function initAnalytics() {
  initUTM();
}

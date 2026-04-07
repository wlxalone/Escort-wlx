'use strict';

const STORAGE_KEYS = {
  ageVerified: 'eliteconnect_age_verified',
  favorites: 'eliteconnect_favorites',
  language: 'eliteconnect_language'
};

function $(selector, context = document) {
  return context.querySelector(selector);
}

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

function readJson(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function translateText(key, variables = {}, fallback = '') {
  return window.t ? window.t(key, variables, fallback) : (fallback || key);
}

function localizeCityName(city) {
  return window.localizeCity ? window.localizeCity(city) : city;
}

function localizePriceText(price) {
  return window.localizePrice ? window.localizePrice(price) : price;
}

function localizeLocation(city, district) {
  return window.formatLocation ? window.formatLocation(city, district) : `${city} / ${district}`;
}

function setFavoriteButtonLabel(button, profileName) {
  if (!button) return;
  button.setAttribute('aria-label', translateText('dynamic.saveModelAria', { name: profileName }, `Save ${profileName}`));
}

function getPageName() {
  return document.body?.dataset.page || '';
}

function getProfiles() {
  return Array.isArray(PROFILES) ? PROFILES : [];
}

function getProfileById(profileId) {
  return getProfiles().find((profile) => profile.id === profileId);
}

function getFavorites() {
  return new Set(readJson(STORAGE_KEYS.favorites, []));
}

function saveFavorites(favorites) {
  writeJson(STORAGE_KEYS.favorites, Array.from(favorites));
}

function isFavorite(profileId) {
  return getFavorites().has(profileId);
}

function toggleFavorite(profileId) {
  const favorites = getFavorites();

  if (favorites.has(profileId)) {
    favorites.delete(profileId);
  } else {
    favorites.add(profileId);
  }

  saveFavorites(favorites);
  return favorites.has(profileId);
}

function updateFavoriteButton(button, isActive) {
  if (!button) return;
  button.classList.toggle('active', isActive);
  button.setAttribute('aria-pressed', String(isActive));
  button.innerHTML = isActive ? '&#9829;' : '&#9825;';
}

function buildBadges(badges = []) {
  return badges
    .map((badge) => BADGE_CONFIG[badge])
    .filter(Boolean)
    .map((badgeConfig, index) => {
      const badgeKey = badges[index];
      const label = window.getBadgeLabel ? window.getBadgeLabel(badgeKey, badgeConfig.label) : badgeConfig.label;
      return `<span class="badge ${badgeConfig.cls}">${label}</span>`;
    })
    .join('');
}

function getPrimaryRate(profile) {
  return localizePriceText(profile.priceFrom || profile.rates?.[0]?.price || translateText('dynamic.onRequest', {}, 'On request'));
}

function getSearchText(profile) {
  const locationText = localizeLocation(profile.city, profile.district);
  return [
    profile.name,
    profile.city,
    profile.district,
    localizeCityName(profile.city),
    locationText,
    profile.aboutMe,
    ...(profile.tags || []),
    ...(profile.services || []),
    ...(profile.languages || [])
  ]
    .join(' ')
    .toLowerCase();
}

function matchesAge(profile, range) {
  if (!range) return true;
  if (range === '33+') return profile.age >= 33;

  const [minValue, maxValue] = range.split('-').map(Number);
  return profile.age >= minValue && profile.age <= maxValue;
}

function parseNumberFilter(value) {
  if (value === null || value === undefined || value === '') return null;
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : null;
}

function matchesMinMax(value, minValue, maxValue) {
  if (minValue !== null && value < minValue) return false;
  if (maxValue !== null && value > maxValue) return false;
  return true;
}

function matchesBust(profile, bustValue) {
  const normalizedValue = String(bustValue || '').trim().toUpperCase();
  if (!normalizedValue) return true;

  const allowedSizes = normalizedValue
    .split(',')
    .map((size) => size.trim())
    .filter(Boolean);

  if (!allowedSizes.length) return true;
  return allowedSizes.includes(String(profile.bust || '').trim().toUpperCase());
}

function matchesCategory(profile, category) {
  if (!category || category === 'all') return true;
  return profile.badges.includes(category);
}

function applyProfileFilters(state) {
  const query = (state.query || '').trim().toLowerCase();
  const ageMin = parseNumberFilter(state.ageMin);
  const ageMax = parseNumberFilter(state.ageMax);
  const heightMin = parseNumberFilter(state.heightMin);
  const heightMax = parseNumberFilter(state.heightMax);
  const weightMin = parseNumberFilter(state.weightMin);
  const weightMax = parseNumberFilter(state.weightMax);

  return getProfiles().filter((profile) => {
    if (state.city && profile.city !== state.city) return false;
    if (state.filter && state.filter !== 'all' && !profile.badges.includes(state.filter)) return false;
    if (state.category && !matchesCategory(profile, state.category)) return false;
    if (state.age && !matchesAge(profile, state.age)) return false;
    if (!matchesMinMax(profile.age, ageMin, ageMax)) return false;
    if (!matchesMinMax(profile.height, heightMin, heightMax)) return false;
    if (!matchesMinMax(profile.weight, weightMin, weightMax)) return false;
    if (!matchesBust(profile, state.bust)) return false;
    if (query && !getSearchText(profile).includes(query)) return false;
    return true;
  });
}

function createProfileCard(profile) {
  const card = document.createElement('article');
  const isSaved = isFavorite(profile.id);
  const verifiedMark = profile.badges.includes('verified') ? '<span class="profile-card__check">&#10003;</span>' : '';
  const locationText = localizeLocation(profile.city, profile.district);
  const tags = (profile.tags || []).map((tag) => `<span class="profile-card__tag">${tag}</span>`).join('');

  card.className = 'profile-card';
  card.dataset.city = profile.city;
  card.dataset.id = String(profile.id);

  card.innerHTML = `
    <div class="profile-card__img-wrap">
      <a href="profile.html?id=${profile.id}" class="profile-card__img-link" aria-label="${translateText('dynamic.openProfileAria', { name: profile.name }, `Open ${profile.name} profile`)}">
        <img class="profile-card__img" src="${profile.photo}" alt="${profile.name}" loading="lazy"/>
      </a>
      <div class="profile-card__badges">${buildBadges(profile.badges)}</div>
      <button class="profile-card__fav${isSaved ? ' active' : ''}" type="button">${isSaved ? '&#9829;' : '&#9825;'}</button>
      <div class="profile-card__price-tag">${getPrimaryRate(profile)}</div>
    </div>
    <div class="profile-card__body">
      <div class="profile-card__name-row">
        <span class="profile-card__name">${profile.name}</span>
        <span class="profile-card__age">, ${profile.age}</span>
        ${verifiedMark}
      </div>
      <div class="profile-card__location">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3.5-4.5 8-4.5 8S3.5 9.5 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="currentColor" stroke-width="1.2"/>
          <circle cx="8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        </svg>
        ${locationText}
      </div>
      <div class="profile-card__tags">
        ${tags}
      </div>
      <div class="profile-card__footer">
        <a href="contact.html?profile=${profile.id}" class="profile-card__btn">${translateText('dynamic.messageButton', {}, 'Message')}</a>
        <a href="profile.html?id=${profile.id}" class="profile-card__btn profile-card__btn--primary">${translateText('dynamic.viewProfile', {}, 'View Profile')}</a>
      </div>
    </div>
  `;

  const favoriteButton = $('.profile-card__fav', card);
  setFavoriteButtonLabel(favoriteButton, profile.name);
  favoriteButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateFavoriteButton(favoriteButton, toggleFavorite(profile.id));
  });

  return card;
}

function updateResultsCount(element, visibleCount, totalCount) {
  if (!element) return;

  if (totalCount === 0) {
    element.textContent = translateText('dynamic.noModelsFound', {}, 'No models found');
    return;
  }

  element.textContent = translateText('dynamic.showingModels', { visible: visibleCount, total: totalCount }, `Showing ${visibleCount} of ${totalCount} models`);
}

function syncListingUrl(state) {
  const params = new URLSearchParams();

  if (state.city) params.set('city', state.city);
  if (state.filter && state.filter !== 'all') params.set('filter', state.filter);
  if (state.age) params.set('age', state.age);
  if (state.category) params.set('category', state.category);
  if (state.query) params.set('q', state.query);
  if (state.ageMin) params.set('ageMin', state.ageMin);
  if (state.ageMax) params.set('ageMax', state.ageMax);
  if (state.heightMin) params.set('heightMin', state.heightMin);
  if (state.heightMax) params.set('heightMax', state.heightMax);
  if (state.weightMin) params.set('weightMin', state.weightMin);
  if (state.weightMax) params.set('weightMax', state.weightMax);
  if (state.bust) params.set('bust', state.bust);

  const url = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
  window.history.replaceState({}, '', url);
}

function setActiveFilterChip(chips, value) {
  chips.forEach((chip) => {
    chip.classList.toggle('filter-chip--active', chip.dataset.filter === value);
  });
}

function createListingController(config) {
  const grid = $(config.gridSelector || '#profiles-grid');
  if (!grid) return null;

  const countElement = $(config.countSelector || '#results-count');
  const loadMoreButton = $(config.loadMoreSelector || '#load-more');
  const emptyState = config.emptySelector ? $(config.emptySelector) : null;
  const filterChips = config.filterChipSelector ? $$(config.filterChipSelector) : [];
  const pageSize = config.pageSize || 8;

  const state = {
    city: '',
    filter: 'all',
    age: '',
    category: '',
    query: '',
    ageMin: '',
    ageMax: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    bust: '',
    ...(config.initialState || {})
  };

  let visibleCount = pageSize;

  function render(resetVisible = true) {
    if (resetVisible) visibleCount = pageSize;

    const filteredProfiles = applyProfileFilters(state);
    const visibleProfiles = filteredProfiles.slice(0, visibleCount);

    grid.innerHTML = '';
    visibleProfiles.forEach((profile) => grid.appendChild(createProfileCard(profile)));

    if (emptyState) {
      emptyState.hidden = filteredProfiles.length > 0;
    }

    updateResultsCount(countElement, visibleProfiles.length, filteredProfiles.length);

    if (loadMoreButton) {
      const hasMore = filteredProfiles.length > visibleProfiles.length;
      loadMoreButton.disabled = !hasMore;
      loadMoreButton.textContent = hasMore
        ? translateText('dynamic.loadMoreModels', {}, 'Load More Models')
        : translateText('dynamic.allModelsLoaded', {}, 'All models loaded');
      loadMoreButton.hidden = filteredProfiles.length === 0;
    }

    if (filterChips.length) {
      setActiveFilterChip(filterChips, state.filter);
    }

    if (config.syncUrl) {
      syncListingUrl(state);
    }
  }

  function setState(nextState, resetVisible = true) {
    Object.assign(state, nextState);
    render(resetVisible);
  }

  loadMoreButton?.addEventListener('click', () => {
    visibleCount += pageSize;
    render(false);
  });

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      setState({ filter: chip.dataset.filter || 'all' }, true);
    });
  });

  return {
    state,
    render,
    setState
  };
}

function initAgeGate() {
  const gate = $('#age-gate');
  if (!gate) return;

  if (sessionStorage.getItem(STORAGE_KEYS.ageVerified)) {
    gate.remove();
    return;
  }

  $('#age-gate-yes')?.addEventListener('click', () => {
    sessionStorage.setItem(STORAGE_KEYS.ageVerified, '1');
    gate.style.transition = 'opacity .35s ease';
    gate.style.opacity = '0';
    window.setTimeout(() => gate.remove(), 350);
  });

  $('#age-gate-no')?.addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
  });
}

function initHeader() {
  const header = $('#header');
  const burger = $('#burger');
  const drawer = $('#mobile-drawer');
  const switcher = $('#lang-switcher');
  const dropdown = $('#lang-dropdown');
  const currentLanguage = $('#current-lang');
  const savedLanguage = window.getCurrentLanguage ? window.getCurrentLanguage() : (localStorage.getItem(STORAGE_KEYS.language) || 'EN');
  const currentPage = getPageName();

  if (currentLanguage) currentLanguage.textContent = savedLanguage;

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  $$('[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === currentPage);
  });

  burger?.addEventListener('click', () => {
    drawer?.classList.toggle('open');
  });

  drawer?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      drawer.classList.remove('open');
    }
  });

  document.addEventListener('click', (event) => {
    if (drawer && burger && !drawer.contains(event.target) && !burger.contains(event.target)) {
      drawer.classList.remove('open');
    }
  });

  $('.lang-switcher__btn', switcher || document)?.addEventListener('click', (event) => {
    event.stopPropagation();
    switcher?.classList.toggle('open');
  });

  dropdown?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-lang]');
    if (!button) return;

    const lang = window.normalizeLanguageCode ? window.normalizeLanguageCode(button.dataset.lang || 'EN') : (button.dataset.lang || 'EN');
    if (window.setCurrentLanguage) {
      window.setCurrentLanguage(lang);
    } else {
      localStorage.setItem(STORAGE_KEYS.language, lang);
    }
    if (currentLanguage) currentLanguage.textContent = lang;
    switcher?.classList.remove('open');
    window.location.reload();
  });

  document.addEventListener('click', () => switcher?.classList.remove('open'));
}

function initViewToggle() {
  const grid = $('#profiles-grid');
  const gridButton = $('#grid-view');
  const listButton = $('#list-view');

  if (!grid || !gridButton || !listButton) return;

  gridButton.addEventListener('click', () => {
    grid.classList.remove('list-mode');
    gridButton.classList.add('view-toggle__btn--active');
    listButton.classList.remove('view-toggle__btn--active');
  });

  listButton.addEventListener('click', () => {
    grid.classList.add('list-mode');
    listButton.classList.add('view-toggle__btn--active');
    gridButton.classList.remove('view-toggle__btn--active');
  });
}

function initHomePage() {
  const controller = createListingController({
    pageSize: 8,
    filterChipSelector: '.filter-chip'
  });

  if (!controller) return;

  const form = $('#home-search-form');
  const citySelect = $('#home-city-select');
  const ageSelect = $('#home-age-select');
  const categorySelect = $('#home-category-select');
  const homeFilters = [citySelect, ageSelect, categorySelect];

  const applyHomeFilters = () => {
    controller.setState({
      city: citySelect?.value || '',
      age: ageSelect?.value || '',
      category: categorySelect?.value || ''
    });
  };

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    applyHomeFilters();

    $('.profiles-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  homeFilters.forEach((filter) => {
    filter?.addEventListener('change', applyHomeFilters);
  });

  $$('.tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      const nextState = { city: '', filter: 'all' };

      if (tag.dataset.city) {
        nextState.city = tag.dataset.city;
        if (citySelect) citySelect.value = tag.dataset.city;
      }

      if (tag.dataset.filter) {
        nextState.filter = tag.dataset.filter;
      }

      controller.setState(nextState);
      $('.profiles-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  controller.render();
}

function initEscortPage() {
  const params = new URLSearchParams(window.location.search);
  const form = $('#escort-search-form');
  const citySelect = $('#escort-city-select');
  const ageMinInput = $('#escort-age-min');
  const ageMaxInput = $('#escort-age-max');
  const heightMinInput = $('#escort-height-min');
  const heightMaxInput = $('#escort-height-max');
  const weightMinInput = $('#escort-weight-min');
  const weightMaxInput = $('#escort-weight-max');
  const bustInput = $('#escort-bust');

  const initialState = {
    city: params.get('city') || '',
    filter: params.get('filter') || 'all',
    age: params.get('age') || '',
    category: params.get('category') || '',
    query: params.get('q') || '',
    ageMin: params.get('ageMin') || '',
    ageMax: params.get('ageMax') || '',
    heightMin: params.get('heightMin') || '',
    heightMax: params.get('heightMax') || '',
    weightMin: params.get('weightMin') || '',
    weightMax: params.get('weightMax') || '',
    bust: params.get('bust') || ''
  };

  if (citySelect) citySelect.value = initialState.city;
  if (ageMinInput) ageMinInput.value = initialState.ageMin;
  if (ageMaxInput) ageMaxInput.value = initialState.ageMax;
  if (heightMinInput) heightMinInput.value = initialState.heightMin;
  if (heightMaxInput) heightMaxInput.value = initialState.heightMax;
  if (weightMinInput) weightMinInput.value = initialState.weightMin;
  if (weightMaxInput) weightMaxInput.value = initialState.weightMax;
  if (bustInput) bustInput.value = initialState.bust;

  const controller = createListingController({
    pageSize: 12,
    filterChipSelector: '.filter-chip',
    emptySelector: '#escort-empty',
    initialState,
    syncUrl: true
  });

  if (!controller) return;

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.setState({
      city: citySelect?.value || '',
      age: '',
      category: '',
      query: '',
      ageMin: ageMinInput?.value || '',
      ageMax: ageMaxInput?.value || '',
      heightMin: heightMinInput?.value || '',
      heightMax: heightMaxInput?.value || '',
      weightMin: weightMinInput?.value || '',
      weightMax: weightMaxInput?.value || '',
      bust: bustInput?.value || ''
    });
  });

  form?.addEventListener('reset', () => {
    window.setTimeout(() => {
      controller.setState({
        city: citySelect?.value || '',
        filter: 'all',
        age: '',
        category: '',
        query: '',
        ageMin: ageMinInput?.value || '',
        ageMax: ageMaxInput?.value || '',
        heightMin: heightMinInput?.value || '',
        heightMax: heightMaxInput?.value || '',
        weightMin: weightMinInput?.value || '',
        weightMax: weightMaxInput?.value || '',
        bust: bustInput?.value || ''
      });
    }, 0);
  });

  controller.render();
}

function createGalleryThumbnail(imageUrl, index, onSelect) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `gallery-thumb${index === 0 ? ' active' : ''}`;
  button.innerHTML = `<img src="${imageUrl}" alt="${translateText('dynamic.galleryImageAlt', { index: index + 1 }, `Gallery image ${index + 1}`)}" loading="lazy"/>`;
  button.addEventListener('click', () => onSelect(button, imageUrl));
  return button;
}

function initProfilePage() {
  const profileId = Number(new URLSearchParams(window.location.search).get('id')) || getProfiles()[0]?.id;
  const profile = getProfileById(profileId) || getProfiles()[0];
  if (!profile) return;

  document.title = `${profile.name} | EliteConnect`;

  const mainPhoto = $('#main-photo');
  const galleryThumbs = $('#gallery-thumbs');
  const favoriteButton = $('#fav-btn');
  const relatedGrid = $('#related-grid');
  const relatedSection = $('#related-section');

  if (mainPhoto) {
    mainPhoto.src = profile.photo;
    mainPhoto.alt = translateText('dynamic.mainPhotoAlt', { name: profile.name }, `${profile.name} main photo`);
  }

  $('#breadcrumb-name').textContent = profile.name;
  $('#profile-name').textContent = `${profile.name}, ${profile.age}`;
  $('#profile-location').textContent = localizeLocation(profile.city, profile.district);
  $('#stat-age').textContent = `${profile.age}`;
  $('#stat-height').textContent = `${profile.height} cm`;
  $('#stat-weight').textContent = `${profile.weight} kg`;
  $('#stat-bust').textContent = profile.bust;
  $('#profile-about').textContent = profile.aboutMe;
  $('#profile-availability').textContent = profile.availability.replace(/^Daily/, translateText('dynamic.dailyPrefix', {}, 'Daily'));
  $('#profile-languages').textContent = profile.languages.join(', ');
  $('#profile-from-price').textContent = getPrimaryRate(profile);
  $('#profile-badges').innerHTML = buildBadges(profile.badges);

  if (favoriteButton) {
    updateFavoriteButton(favoriteButton, isFavorite(profile.id));
    setFavoriteButtonLabel(favoriteButton, profile.name);
    favoriteButton.addEventListener('click', () => {
      updateFavoriteButton(favoriteButton, toggleFavorite(profile.id));
    });
  }

  if (galleryThumbs) {
    const activateThumbnail = (activeButton, imageUrl) => {
      if (mainPhoto) mainPhoto.src = imageUrl;
      $$('.gallery-thumb', galleryThumbs).forEach((thumb) => thumb.classList.remove('active'));
      activeButton.classList.add('active');
    };

    galleryThumbs.innerHTML = '';
    profile.gallery.forEach((imageUrl, index) => {
      galleryThumbs.appendChild(createGalleryThumbnail(imageUrl, index, activateThumbnail));
    });
  }

  const servicesContainer = $('#profile-services');
  if (servicesContainer) {
    servicesContainer.innerHTML = profile.services
      .map((service) => `<span class="service-tag">${service}</span>`)
      .join('');
  }

  const ratesContainer = $('#profile-rates');
  if (ratesContainer) {
    ratesContainer.innerHTML = profile.rates
      .map(
        (rate) => `
            <div class="rate-box">
              <div class="rate-box__price">${rate.price}</div>
              <div class="rate-box__duration">${rate.label}</div>
            </div>
        `
      )
      .join('');
  }

  const callLink = $('#call-now');
  if (callLink) {
    callLink.href = `tel:${profile.phone.replace(/\s+/g, '')}`;
  }

  const messageLink = $('#message-now');
  if (messageLink) {
    messageLink.href = `contact.html?profile=${profile.id}`;
  }

  if (relatedGrid) {
    const relatedProfiles = getProfiles()
      .filter((candidate) => candidate.id !== profile.id && candidate.city === profile.city)
      .slice(0, 4);

    relatedGrid.innerHTML = '';
    relatedProfiles.forEach((candidate) => relatedGrid.appendChild(createProfileCard(candidate)));

    if (relatedSection) {
      relatedSection.hidden = relatedProfiles.length === 0;
    }
  }
}

function initApartmentsPage() {
  const grid = $('#apartments-grid');
  if (!grid || !Array.isArray(APARTMENTS)) return;

  grid.innerHTML = APARTMENTS.map(
    (apartment) => `
      <article class="apt-card">
        <div class="apt-card__img ${apartment.imageClass}">${apartment.icon}</div>
        <div class="apt-card__body">
          <h3 class="apt-card__title">${apartment.title}</h3>
          <p class="apt-card__meta">${localizeCityName(apartment.city)} / ${apartment.area}</p>
          <p class="content-card__text">${apartment.description}</p>
          <div class="apt-card__price">${localizePriceText(apartment.price)}</div>
        </div>
      </article>
    `
  ).join('');
}

function renderFormStatus(form, message) {
  if (!form) return;

  let status = $('.status-banner', form.parentElement || document);
  if (!status) {
    status = document.createElement('div');
    status.className = 'status-banner';
    form.insertAdjacentElement('afterend', status);
  }

  status.textContent = message;
}

function populateContactProfiles() {
  const profileSelect = $('#contact-profile');
  if (!profileSelect) return;

  const selectedProfile = new URLSearchParams(window.location.search).get('profile') || '';
  const options = [`<option value="">${translateText('contact.selectModel', {}, 'Select model')}</option>`].concat(
    getProfiles().map((profile) => `<option value="${profile.id}">${profile.name} / ${localizeCityName(profile.city)}</option>`)
  );

  profileSelect.innerHTML = options.join('');
  if (selectedProfile) profileSelect.value = selectedProfile;
}

function initForms() {
  populateContactProfiles();

  $('#contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const profileId = Number($('#contact-profile')?.value);
    const profile = getProfileById(profileId);
    const targetText = profile
      ? translateText('dynamic.contactTarget', { name: profile.name, city: localizeCityName(profile.city) }, `${profile.name} in ${profile.city}`)
      : translateText('dynamic.team', {}, 'the team');
    renderFormStatus(event.currentTarget, translateText('dynamic.contactStatus', { target: targetText }, `Message sent. We will contact you shortly regarding ${targetText}.`));
    event.currentTarget.reset();
    populateContactProfiles();
  });

  $('#signin-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    renderFormStatus(event.currentTarget, translateText('dynamic.signInStatus', {}, 'Demo sign in completed. Connect the real backend auth flow next.'));
  });

  $('#signup-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    renderFormStatus(event.currentTarget, translateText('dynamic.signUpStatus', {}, 'Registration request sent. A manager can now review the listing details.'));
  });
}

function initSmoothScroll() {
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initAnimations() {
  if (!window.IntersectionObserver) return;

  const animatedElements = $$('.step-card, .city-card, .stat, .page-hero, .content-card, .apt-card, .contact-form, .profile-gallery, .profile-details, .about-page__hero-inner, .about-page__section-title, .about-page__panel, .about-feature, .escort-hero, .escort-filter-panel, .escort-side');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  animatedElements.forEach((element, index) => {
    element.classList.add('fade-in');
    element.style.transitionDelay = `${index * 60}ms`;
    observer.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  window.applyDocumentLanguageState?.();
  initAgeGate();
  initHeader();
  initViewToggle();
  initForms();
  initSmoothScroll();

  switch (getPageName()) {
    case 'home':
      initHomePage();
      break;
    case 'escort':
      initEscortPage();
      break;
    case 'profile':
      initProfilePage();
      break;
    case 'apartments':
      initApartmentsPage();
      break;
    default:
      break;
  }

  window.applyTranslations?.();
  initAnimations();
});

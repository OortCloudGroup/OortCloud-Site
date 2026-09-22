// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .stat-item, .featured-carousel');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Featured banner carousel (match zh n-carousel: slide + 300ms + seamless loop)
    const initFeaturedCarousel = () => {
        const root = document.querySelector('.featured-carousel');
        if (!root) return;

        const track = root.querySelector('.featured-carousel-track');
        const realSlides = Array.from(root.querySelectorAll('.featured-carousel-slide'));
        const dots = Array.from(root.querySelectorAll('.featured-carousel-dot'));
        if (!track || realSlides.length === 0) return;

        const total = realSlides.length;
        const intervalMs = Number(root.dataset.interval) || 2000;
        const transitionMs = 300;
        const dotSrc = 'images/carousel/dot.png';
        const dotActiveSrc = 'images/carousel/dot-active.png';

        // Clone edges for seamless loop (same idea as n-carousel duplicatedable)
        const firstClone = realSlides[0].cloneNode(true);
        const lastClone = realSlides[total - 1].cloneNode(true);
        firstClone.classList.remove('is-active');
        lastClone.classList.remove('is-active');
        firstClone.setAttribute('aria-hidden', 'true');
        lastClone.setAttribute('aria-hidden', 'true');
        track.insertBefore(lastClone, realSlides[0]);
        track.appendChild(firstClone);

        // Track indices: [cloneLast, 0..n-1, cloneFirst]
        let trackIndex = 1;
        let timer = null;
        let transitionTimer = null;
        let inTransition = false;
        let startX = 0;
        let deltaX = 0;
        let dragStartTime = 0;
        let dragging = false;

        const setTrack = (index, withTransition = true) => {
            if (withTransition) {
                root.classList.remove('is-dragging');
                track.style.transitionDuration = `${transitionMs}ms`;
            } else {
                root.classList.add('is-dragging');
                track.style.transitionDuration = '0ms';
            }
            track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;
        };

        const syncDots = (index) => {
            realSlides.forEach((slide, i) => {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach((dot, i) => {
                const active = i === index;
                dot.classList.toggle('is-active', active);
                dot.setAttribute('aria-selected', active ? 'true' : 'false');
                const img = dot.querySelector('img');
                if (img) img.src = active ? dotActiveSrc : dotSrc;
            });
        };

        const displayFromTrack = (index) => {
            if (index === 0) return total - 1;
            if (index === total + 1) return 0;
            return index - 1;
        };

        const normalizeAfterTransition = () => {
            if (transitionTimer) {
                window.clearTimeout(transitionTimer);
                transitionTimer = null;
            }
            if (trackIndex === 0) {
                trackIndex = total;
                setTrack(trackIndex, false);
            } else if (trackIndex === total + 1) {
                trackIndex = 1;
                setTrack(trackIndex, false);
            }
            void track.offsetWidth;
            root.classList.remove('is-dragging');
            track.style.transitionDuration = `${transitionMs}ms`;
            inTransition = false;
        };

        const goToTrack = (nextTrackIndex, withTransition = true) => {
            trackIndex = nextTrackIndex;
            setTrack(trackIndex, withTransition);
            syncDots(displayFromTrack(trackIndex));
            if (withTransition) {
                inTransition = true;
                if (transitionTimer) window.clearTimeout(transitionTimer);
                transitionTimer = window.setTimeout(normalizeAfterTransition, transitionMs + 50);
            } else {
                inTransition = false;
            }
        };

        const goToDisplay = (index) => {
            const normalized = ((index % total) + total) % total;
            goToTrack(normalized + 1, true);
        };

        const next = () => goToTrack(trackIndex + 1, true);
        const prev = () => goToTrack(trackIndex - 1, true);

        const start = () => {
            stop();
            timer = window.setInterval(() => {
                if (!dragging && !inTransition) next();
            }, intervalMs);
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        track.addEventListener('transitionend', (e) => {
            if (e.target !== track || e.propertyName !== 'transform') return;
            normalizeAfterTransition();
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                if (inTransition) return;
                goToDisplay(i);
                start();
            });
        });

        root.addEventListener('pointerdown', (e) => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            if (inTransition) return;
            dragging = true;
            deltaX = 0;
            startX = e.clientX;
            dragStartTime = Date.now();
            root.classList.add('is-dragging');
            track.style.transitionDuration = '0ms';
            root.setPointerCapture?.(e.pointerId);
            stop();
        });

        root.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            const width = root.offsetWidth || 1;
            // Match n-carousel: clamp drag within one slide width
            deltaX = Math.max(-width, Math.min(width, e.clientX - startX));
            const offset = (-trackIndex * width) + deltaX;
            track.style.transform = `translate3d(${offset}px, 0, 0)`;
        });

        const endDrag = () => {
            if (!dragging) return;
            dragging = false;
            root.classList.remove('is-dragging');
            track.style.transitionDuration = `${transitionMs}ms`;

            const width = root.offsetWidth || 1;
            const elapsed = Math.max(Date.now() - dragStartTime, 1);
            const velocity = deltaX / elapsed; // px per ms
            // Match n-carousel: >50% width or faster than 0.4px/ms
            if (deltaX > width / 2 || velocity > 0.4) {
                prev();
            } else if (deltaX < -width / 2 || velocity < -0.4) {
                next();
            } else {
                goToTrack(trackIndex, true);
            }
            deltaX = 0;
            start();
        };

        root.addEventListener('pointerup', endDrag);
        root.addEventListener('pointercancel', endDrag);
        root.addEventListener('mouseenter', stop);
        root.addEventListener('mouseleave', () => {
            if (dragging) endDrag();
            else start();
        });

        goToTrack(1, false);
        requestAnimationFrame(() => {
            root.classList.remove('is-dragging');
            track.style.transitionDuration = `${transitionMs}ms`;
        });
        start();
    };

    initFeaturedCarousel();

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileBtn.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('mobile-open')) {
                    navLinks.classList.remove('mobile-open');
                    mobileBtn.classList.remove('active');
                }
            }
        });
    });

    // Product card hover ripple effect
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Counter animation for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const text = counter.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const hasM = text.includes('M');
        const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));

        let current = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 16);

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }

            let display = Math.floor(current);
            if (hasPercent) {
                display = current.toFixed(1);
            }

            let suffix = '';
            if (hasPlus) suffix = '+';
            if (hasM) suffix = 'M+';
            if (hasPercent) suffix = '%';

            if (hasM) {
                counter.textContent = Math.floor(current) + suffix;
            } else if (hasPercent) {
                counter.textContent = display + suffix;
            } else {
                counter.textContent = display + suffix;
            }
        }, 16);
    });
}

// ===== Navigation: Login & Language Switcher =====
(function() {
    const STORAGE_KEY = 'oortcloud_user';
    const LANG_KEY = 'oortcloud_lang';

    const navLogin = document.getElementById('navLogin');
    const navUser = document.getElementById('navUser');
    const navAvatar = document.getElementById('navAvatar');
    const navUsername = document.getElementById('navUsername');
    const navDropdown = document.getElementById('navDropdown');
    const navLogout = document.getElementById('navLogout');
    const langSwitch = document.getElementById('langSwitch');
    const langCurrent = document.getElementById('langCurrent');
    const langDropdown = document.getElementById('langDropdown');

    // --- Login State ---
    function getStoredUser() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            return null;
        }
    }

    function setStoredUser(user) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        } catch (e) {}
    }

    function removeStoredUser() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
    }

    function showLoggedInState(user) {
        if (!navLogin || !navUser || !navAvatar || !navUsername) return;
        navLogin.style.display = 'none';
        navUser.classList.add('loggedIn');

        const name = user.name || user.username || 'User';
        navAvatar.textContent = name.charAt(0).toUpperCase();
        navUsername.textContent = name;
    }

    function showLoggedOutState() {
        if (!navLogin || !navUser) return;
        navLogin.style.display = '';
        navUser.classList.remove('loggedIn');
    }

    // Check stored login
    const storedUser = getStoredUser();
    if (storedUser) {
        showLoggedInState(storedUser);
    }

    // Login button opens platform in new tab
    // The platform will redirect back with user info via postMessage or URL params
    if (navLogin) {
        navLogin.addEventListener('click', function(e) {
            // Simulate login for demo purposes
            // In production, the platform login page handles this
            const fakeUser = { name: 'Admin', username: 'admin' };
            setStoredUser(fakeUser);
            showLoggedInState(fakeUser);
        });
    }

    // Avatar dropdown toggle
    if (navUser && navDropdown) {
        navUser.addEventListener('click', function(e) {
            e.stopPropagation();
            navDropdown.classList.toggle('open');
        });

        document.addEventListener('click', function(e) {
            if (!navUser.contains(e.target)) {
                navDropdown.classList.remove('open');
            }
        });
    }

    // Logout
    if (navLogout) {
        navLogout.addEventListener('click', function() {
            removeStoredUser();
            showLoggedOutState();
            if (navDropdown) navDropdown.classList.remove('open');
        });
    }

    // --- Language Switcher Dropdown ---
    const LANG_MAP = {
        en: { label: 'EN', url: 'https://oortcloudsmart.com/en/' },
        zh: { label: '中文', url: 'https://oortcloudsmart.com/ch/' },
        es: { label: 'ES', url: 'https://oortcloudsmart.com/es/' },
        ar: { label: 'AR', url: 'https://oortcloudsmart.com/ar/' },
        de: { label: 'DE', url: 'https://oortcloudsmart.com/de/' },
        fr: { label: 'FR', url: 'https://oortcloudsmart.com/fr/' },
        ja: { label: 'JA', url: 'https://oortcloudsmart.com/ja/' },
        pt: { label: 'PT', url: 'https://oortcloudsmart.com/pt/' },
        ru: { label: 'RU', url: 'https://oortcloudsmart.com/ru/' },
        ko: { label: 'KO', url: 'https://oortcloudsmart.com/ko/' },
        id: { label: 'ID', url: 'https://oortcloudsmart.com/id/' },
        tr: { label: 'TR', url: 'https://oortcloudsmart.com/tr/' }
    };

    function getCurrentLang() {
        try {
            return localStorage.getItem(LANG_KEY) || 'en';
        } catch (e) {
            return 'en';
        }
    }

    function setCurrentLang(lang) {
        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (e) {}
    }

    function updateLangUI(lang) {
        if (!langCurrent || !langSwitch) return;
        const info = LANG_MAP[lang] || LANG_MAP['en'];
        langCurrent.textContent = info.label;

        // Update active state in dropdown
        if (langDropdown) {
            const items = langDropdown.querySelectorAll('.nav-lang-item');
            items.forEach(function(item) {
                if (item.getAttribute('data-lang') === lang) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }

    // Init lang UI from storage
    const savedLang = getCurrentLang();
    updateLangUI(savedLang);

    // Toggle dropdown on click
    if (langSwitch) {
        langSwitch.addEventListener('click', function(e) {
            e.stopPropagation();
            langSwitch.classList.toggle('open');
        });

        // Close dropdown on outside click
        document.addEventListener('click', function(e) {
            if (!langSwitch.contains(e.target)) {
                langSwitch.classList.remove('open');
            }
        });
    }

    // Handle language item selection
    if (langDropdown) {
        langDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            const item = e.target.closest('.nav-lang-item');
            if (!item) return;

            const lang = item.getAttribute('data-lang');
            if (lang) {
                setCurrentLang(lang);
                updateLangUI(lang);
                langSwitch.classList.remove('open');

                // Navigate to the selected language site, preserving current page
                const info = LANG_MAP[lang];
                if (info && info.url) {
                    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
                    var targetUrl = info.url + (currentPage !== 'index.html' ? currentPage : '');
                    window.open(targetUrl, '_blank');
                }
            }
        });
    }

    // --- Listen for login messages from platform ---
    window.addEventListener('message', function(e) {
        if (e.data && e.data.type === 'oortcloud_login') {
            const user = e.data.user;
            if (user) {
                setStoredUser(user);
                showLoggedInState(user);
            }
        }
    });

    // --- Check URL for login callback params ---
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const loginUser = urlParams.get('login_user');
        const loginName = urlParams.get('login_name');
        if (loginUser) {
            const user = { username: loginUser, name: loginName || loginUser };
            setStoredUser(user);
            showLoggedInState(user);
            // Clean URL
            const url = new URL(window.location);
            url.searchParams.delete('login_user');
            url.searchParams.delete('login_name');
            window.history.replaceState({}, '', url);
        }
    } catch (e) {}
})();

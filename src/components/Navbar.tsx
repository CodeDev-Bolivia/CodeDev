
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '../types';
import '../styles/Navbar.css';

// ─── Data ──────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',     path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

// ─── Framer Motion Variants ───────────────────────────────────────────────

const navbarVariants = {
  hidden:  { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const itemVariant = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const mobileMenuVariants = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobileLinkVariant = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: 'easeOut' as const },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────

/** Logo con pulso neón */
const Logo = () => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' } }}
  >
    <Link to="/" className="logo-wrap">
      <motion.div
        className="logo-icon"
        animate={{
          filter: [
            'drop-shadow(0 0 0px rgba(0,245,255,0))',
            'drop-shadow(0 0 10px rgba(0,245,255,0.8)) drop-shadow(0 0 20px rgba(0,245,255,0.3))',
            'drop-shadow(0 0 0px rgba(0,245,255,0))',
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 42 42" fill="none" className="logo-svg">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#b44fff" />
            </linearGradient>
          </defs>
          <polygon
            points="21,2 39,12 39,30 21,40 3,30 3,12"
            stroke="url(#logoGrad)" strokeWidth="1.5"
            fill="rgba(0,245,255,0.05)"
          />
          <polygon
            points="21,8 34,15.5 34,26.5 21,34 8,26.5 8,15.5"
            stroke="url(#logoGrad)" strokeWidth="0.5"
            fill="none" opacity="0.3"
          />
          <text
            x="21" y="25" textAnchor="middle"
            fontSize="11" fontWeight="700"
            fill="url(#logoGrad)" fontFamily="Orbitron,monospace"
          >
            CD
          </text>
        </svg>
      </motion.div>

      <div className="logo-text">
        <span className="logo-main">CodeDev</span>
        <span className="logo-sub">Bolivia</span>
      </div>
    </Link>
  </motion.div>
);

/** Status badge con dot pulsante */
const StatusBadge = () => (
  <motion.div variants={itemVariant} className="status-badge">
    <motion.span
      className="status-dot"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    Online
  </motion.div>
);

/** Link de escritorio con brackets + underline animado */
const NavLink = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const lit = isActive || hovered;

  return (
    <motion.div variants={itemVariant} className="nav-link-wrap">
      <Link
        to={item.path}
        className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Dot activo */}
        <motion.span
          className="nav-dot"
          animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {item.label}

        {/* Corner brackets */}
        <motion.span
          className="bracket bracket--tl"
          animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : -3, y: lit ? 0 : -3 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="bracket bracket--br"
          animate={{ opacity: lit ? 1 : 0, x: lit ? 0 : 3, y: lit ? 0 : 3 }}
          transition={{ duration: 0.2 }}
        />

        {/* Underline gradiente */}
        <motion.span
          className="nav-underline"
          animate={{
            scaleX: lit ? 1 : 0,
            opacity: lit ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ originX: '50%' }}
        />

        {/* Glow background */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              className="nav-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

/** CTA con borde gradiente + shimmer */
const CtaButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={itemVariant} className="cta-outer">
      <Link to="/contact">
        <motion.button
          className="cta-btn"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <motion.svg
            className="cta-arrow"
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </motion.svg>

          {/* Shimmer sweep */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                className="cta-shimmer"
                initial={{ x: '-100%' }}
                animate={{ x: '250%' }}
                exit={{ x: '250%' }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </Link>
    </motion.div>
  );
};

/** Hamburger → X animado */
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="ham-lines">
    {([0, 1, 2] as const).map((i) => (
      <motion.span
        key={i}
        className="ham-line"
        animate={
          isOpen
            ? i === 0 ? { rotate: 45,  y: 7,  width: '100%', opacity: 1 }
            : i === 1 ? { opacity: 0, scaleX: 0 }
            :           { rotate: -45, y: -7, width: '100%', opacity: 1 }
            : { rotate: 0, y: 0, opacity: 1, scaleX: 1, width: i === 1 ? '70%' : '100%' }
        }
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    ))}
  </div>
);

// ─── Main Navbar ──────────────────────────────────────────────────────────

export const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        {/* Top neon scan line */}
        <motion.div
          className="navbar-scanline"
          animate={{ opacity: scrolled ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
        />

        <div className="navbar-inner">
          <Logo />

          {/* Desktop nav */}
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="nav-links"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} item={item} isActive={isActive(item.path)} />
            ))}
          </motion.nav>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="nav-right"
          >
            <StatusBadge />
            <div className="hidden-mobile">
              <CtaButton />
            </div>

            {/* Hamburger */}
            <motion.button
              variants={itemVariant}
              className="hamburger show-mobile"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mobile-menu"
          >
            <div className="mobile-accent-line" />

            <nav className="mobile-nav">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  variants={mobileLinkVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={item.path}
                    className={`mobile-link ${isActive(item.path) ? 'mobile-link--active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="mobile-dot" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                custom={NAV_ITEMS.length}
                variants={mobileLinkVariant}
                initial="hidden"
                animate="visible"
                className="mobile-cta-wrap"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <button className="mobile-cta">Get Started →</button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
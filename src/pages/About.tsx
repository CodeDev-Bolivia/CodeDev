import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks';
import '../styles/About.css';

// ─── Data ──────────────────────────────────────────────────────────────────

const STATS = [
  { num: '+50',  label: 'Proyectos\ncompletados' },
  { num: '+20',  label: 'Clientes\nsatisfechos'  },
  { num: '5',    label: 'Años de\nexperiencia'   },
  { num: '100%', label: 'Compromiso\ncon calidad' },
];

const VALUES = [
  {
    title: 'Innovación',
    color: 'var(--ab-cyan)',
    desc: 'Adoptamos las tecnologías más avanzadas para construir soluciones que anticipan los desafíos del mañana.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polygon points="11,1 21,6 21,16 11,21 1,16 1,6"
          stroke="var(--ab-cyan)" strokeWidth="1" fill="none" opacity="0.8"/>
        <path d="M8 11l2 2 4-4"
          stroke="var(--ab-cyan)" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Precisión',
    color: 'var(--ab-violet)',
    desc: 'Cada línea de código es una decisión deliberada. Los detalles separan lo bueno de lo extraordinario.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="var(--ab-violet)" strokeWidth="1" fill="none" opacity="0.8"/>
        <circle cx="11" cy="11" r="4" stroke="var(--ab-violet)" strokeWidth="1" fill="none"/>
        {['2 5', '17 20', '5 2', '20 17'].map((pts, i) => {
          const [x1, x2] = pts.split(' ');
          const isH = i >= 2;
          return <line key={i}
            x1={isH ? x1 : '11'} y1={isH ? '11' : x1}
            x2={isH ? x2 : '11'} y2={isH ? '11' : x2}
            stroke="var(--ab-violet)" strokeWidth="1.5" strokeLinecap="round"/>;
        })}
      </svg>
    ),
  },
  {
    title: 'Impacto',
    color: 'var(--ab-blue)',
    desc: 'Medimos el éxito por el impacto tangible que generamos en negocios y en el ecosistema tecnológico boliviano.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="var(--ab-blue)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.8"/>
        <path d="M7 14l4-7 4 7"
          stroke="var(--ab-blue)" strokeWidth="1.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8.5" y1="12" x2="13.5" y2="12"
          stroke="var(--ab-blue)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const TEAM = [
  {
    initials: 'AM',
    name: 'A. Mamani',
    role: 'Lead Engineer',
    accent: 'var(--ab-cyan)',
    bg: 'rgba(0,245,255,0.08)',
    desc: 'Arquitecto de sistemas distribuidos con +8 años construyendo plataformas de alto tráfico en LATAM.',
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    initials: 'VC',
    name: 'V. Condori',
    role: 'AI / ML Engineer',
    accent: 'var(--ab-violet)',
    bg: 'rgba(180,79,255,0.08)',
    desc: 'Especialista en machine learning e inteligencia artificial aplicada. Posgrado en Stanford Online.',
    skills: ['Python', 'TensorFlow', 'LLMs'],
  },
  {
    initials: 'RQ',
    name: 'R. Quispe',
    role: 'Cloud Architect',
    accent: 'var(--ab-cyan)',
    bg: 'rgba(0,102,255,0.08)',
    desc: 'Diseña infraestructuras cloud escalables. Certificado AWS + GCP con experiencia en Fortune 500.',
    skills: ['Kubernetes', 'Terraform', 'GCP'],
  },
];

// ─── Animation helpers ─────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const stagger = {
  initial:   {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport:  { once: true, margin: '-60px' },
};

const staggerItem = {
  initial:   { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ─── Components ────────────────────────────────────────────────────────────

const SectionHeader = () => (
  <motion.div className="ab-header" {...fadeUp(0)}>
    <div className="ab-eyebrow">Acerca de nosotros</div>
    <h1 className="ab-title">
      Somos <span>CodeDev</span><br />Bolivia
    </h1>
    <div className="ab-divider">
      <span className="ab-div-line" />
      <span className="ab-div-diamond" />
      <span className="ab-div-line ab-div-line--rev" />
    </div>
    <p className="ab-desc">
      Transformando el panorama tecnológico boliviano desde 2026 con
      soluciones de software de vanguardia.
    </p>
  </motion.div>
);

const MissionBlock = () => (
  <motion.div className="ab-mission" {...fadeUp(0.1)}>
    <span className="ab-corner ab-corner--tl" />
    <span className="ab-corner ab-corner--tr" />
    <span className="ab-corner ab-corner--bl" />
    <span className="ab-corner ab-corner--br" />
    <div className="ab-mission-label">// misión</div>
    <p className="ab-mission-text">
      Nacemos con la convicción de que Bolivia merece tecnología de{' '}
      <strong>clase mundial</strong>. Nuestro equipo combina experiencia
      internacional con un profundo conocimiento del mercado local para construir
      productos digitales que <strong>transforman negocios</strong> y generan
      impacto real.
    </p>
    <div className="ab-mission-bg" aria-hidden>&lt;/&gt;</div>
  </motion.div>
);

const StatsGrid = () => (
  <motion.div className="ab-stats" {...stagger}>
    {STATS.map(({ num, label }) => (
      <motion.div key={num} className="ab-stat" variants={staggerItem}>
        <div className="ab-stat-top" />
        <div className="ab-stat-num">{num}</div>
        <div className="ab-stat-label">{label}</div>
      </motion.div>
    ))}
  </motion.div>
);

const ValuesGrid = () => (
  <>
    <motion.div className="ab-sub-label" {...fadeUp(0.1)}>
      // nuestros pilares
    </motion.div>
    <motion.div className="ab-values" {...stagger}>
      {VALUES.map(({ title, color, desc, icon }) => (
        <motion.div key={title} className="ab-value" variants={staggerItem}>
          <div className="ab-value-icon" style={{ borderColor: `${color}33` }}>
            {icon}
          </div>
          <div className="ab-value-title" style={{ color }}>{title}</div>
          <div className="ab-value-desc">{desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </>
);

const TeamGrid = () => (
  <>
    <motion.div className="ab-team-header" {...fadeUp(0.05)}>
      <div className="ab-sub-label">// el equipo</div>
      <h2 className="ab-team-title">Nuestros Ingenieros</h2>
    </motion.div>
    <motion.div className="ab-team" {...stagger}>
      {TEAM.map(({ initials, name, role, accent, bg, desc, skills }) => (
        <motion.div key={name} className="ab-member" variants={staggerItem}>
          <div className="ab-member-top" />
          <div className="ab-member-head">
            <div className="ab-avatar" style={{ background: bg, color: accent }}>
              {initials}
            </div>
            <div>
              <div className="ab-member-name">{name}</div>
              <div className="ab-member-role" style={{ color: accent }}>{role}</div>
            </div>
          </div>
          <div className="ab-member-body">
            <p className="ab-member-desc">{desc}</p>
            <div className="ab-skills">
              {skills.map(s => (
                <span key={s} className="ab-skill">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </>
);

const CtaSection = () => (
  <motion.div className="ab-cta" {...fadeUp(0.1)}>
    <p className="ab-cta-text">¿Listo para construir el futuro digital juntos?</p>
    <div className="ab-cta-btn-outer">
      <button className="ab-cta-btn">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Trabajemos juntos
      </button>
    </div>
  </motion.div>
);

// ─── Page ──────────────────────────────────────────────────────────────────

export const About = () => {
  useDocumentTitle('Nosotros');

  return (
    <div className="ab-page">
      {/* Background grid */}
      <div className="ab-bg-grid" aria-hidden />
      <div className="ab-bg-nebula" aria-hidden />

      <div className="ab-container">
        <SectionHeader />
        <MissionBlock />
        <StatsGrid />
        <ValuesGrid />
        <TeamGrid />
        <CtaSection />
      </div>
    </div>
  );
};
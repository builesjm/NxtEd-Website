/* @ds-bundle: {"format":4,"namespace":"NxtEdDesignSystem_32cc21","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ContactCard","sourcePath":"components/core/ContactCard.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3458a06ff79b","components/core/Button.jsx":"d9ce2a83dd7e","components/core/Card.jsx":"fbef2b3b0b17","components/core/ContactCard.jsx":"0d8b8ab5c82e","components/core/IconTile.jsx":"855bb41f3903","components/marketing/Hero.jsx":"1fcfc50a7552","components/navigation/NavBar.jsx":"ecb92f7669fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NxtEdDesignSystem_32cc21 = window.NxtEdDesignSystem_32cc21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'teal'
}) {
  const tones = {
    teal: {
      background: 'var(--color-teal-tint)',
      color: 'var(--color-teal-500)'
    },
    marigold: {
      background: 'var(--surface-marigold-wash)',
      color: 'var(--color-marigold-600)'
    },
    inverse: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  };
  const style = Object.assign({
    display: 'inline-flex',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '9px 20px',
    borderRadius: 'var(--radius-pill)'
  }, tones[tone]);
  return React.createElement('span', {
    style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 15,
    padding: '13px 26px',
    borderRadius: 'var(--radius-pill)',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background .15s ease, color .15s ease, box-shadow .15s ease'
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      boxShadow: 'inset 0 0 0 1.5px var(--text-primary)'
    },
    'on-dark': {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,.5)'
    }
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    style: Object.assign({}, base, variants[variant], style)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  icon,
  children,
  style
}) {
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: 22,
    background: 'var(--surface-card)',
    borderRadius: 'var(--radius-lg)',
    padding: '26px 28px',
    boxShadow: 'var(--shadow-card)'
  };
  return React.createElement('div', {
    style: Object.assign({}, base, style)
  }, icon, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--text-primary)',
      lineHeight: 1.15
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactCard.jsx
try { (() => {
function ContactCard({
  label,
  value,
  tone = 'teal'
}) {
  const tones = {
    teal: {
      border: 'var(--color-teal-500)',
      wash: 'var(--surface-teal-wash)',
      labelColor: 'var(--color-teal-glow)'
    },
    marigold: {
      border: 'var(--color-marigold-400)',
      wash: 'var(--surface-marigold-wash)',
      labelColor: 'var(--color-marigold-400)'
    }
  };
  const t = tones[tone];
  return React.createElement('div', {
    style: {
      flex: 1,
      background: t.wash,
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-md)',
      padding: '26px 28px',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: t.labelColor
    }
  }, label), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: '#fff',
      lineHeight: 1.15,
      marginTop: 10
    }
  }, value));
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function IconTile({
  glyph = '✓',
  size = 58
}) {
  const style = {
    flex: 'none',
    width: size,
    height: size,
    borderRadius: size * 0.28,
    background: 'var(--accent-gradient)',
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: size * 0.42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return React.createElement('div', {
    style
  }, glyph);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = 'Get started',
  secondaryCta = 'Meet the tutors'
}) {
  return React.createElement('div', {
    style: {
      padding: '64px 56px',
      display: 'flex',
      gap: 40,
      alignItems: 'center',
      background: 'var(--surface-page)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1.3,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, eyebrow ? React.createElement(__ds_scope.Badge, {
    tone: 'teal'
  }, eyebrow) : null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1.08,
      color: 'var(--text-primary)'
    }
  }, title), subtitle ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      maxWidth: 520
    }
  }, subtitle) : null, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'primary'
  }, primaryCta), React.createElement(__ds_scope.Button, {
    variant: 'secondary'
  }, secondaryCta))), React.createElement('div', {
    style: {
      flex: 1,
      background: '#fff',
      borderRadius: 20,
      padding: 24,
      boxShadow: 'var(--shadow-card)'
    }
  }, React.createElement(__ds_scope.IconTile, {}), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-primary)',
      marginTop: 12
    }
  }, 'Personalized plan'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, 'A learning path that adjusts to each student\'s pace and goals.')));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = ['Programs', 'Tutors', 'Pricing'],
  cta = 'Book a session'
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 18,
      color: 'var(--text-primary)',
      letterSpacing: -0.5
    }
  }, 'NxtEd'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, links.map((l, i) => React.createElement('span', {
    key: i
  }, l)), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    style: {
      padding: '10px 18px',
      fontSize: 13
    }
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.NavBar = __ds_scope.NavBar;

})();

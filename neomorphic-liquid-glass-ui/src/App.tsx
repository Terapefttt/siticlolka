import { useCallback } from "react";

/* ─── SVG Icons (no emojis) ─── */

function LogoIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00f0ff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="32" height="32" rx="8" stroke="url(#logo-g)" strokeWidth="2.5" fill="rgba(0,240,255,0.08)" />
      <path d="M10 26V10l6 6 6-9 6 9v10H10z" fill="url(#logo-g)" opacity="0.35" />
      <path d="M10 26V10l6 6 6-9 6 9v10H10z" stroke="url(#logo-g)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function FreepikIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="icon-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00f0ff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="64" height="64" rx="16" stroke="url(#icon-grad)" strokeWidth="2" fill="rgba(0,240,255,0.06)" />
      <path d="M24 52V28l8 8 8-12 8 12 8-8v24H24z" fill="url(#icon-grad)" opacity="0.3" />
      <path d="M24 52V28l8 8 8-12 8 12 8-8v24H24z" stroke="url(#icon-grad)" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="32" cy="34" r="4" fill="url(#icon-grad)" opacity="0.6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="16" y="28" width="32" height="24" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="rgba(255,255,255,0.05)" />
      <path d="M24 28V22a8 8 0 0116 0v6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="40" r="3" fill="rgba(255,255,255,0.3)" />
      <path d="M32 43v3" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Header ─── */

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(10,14,39,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'SF Pro Display','SF Pro',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="PumpTools — На главную"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <LogoIcon />
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PumpTools
          </span>
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavLink href="#tools" label="Инструменты" />
          <NavLink href="#" label="Тарифы" />
          <NavLink href="#" label="О нас" />
          <NavLink href="#" label="Контакты" />
          <a
            href="#tools"
            style={{
              marginLeft: 8,
              padding: "8px 20px",
              fontSize: 14,
              fontWeight: 600,
              color: "#0a0e27",
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              borderRadius: 10,
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Начать
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        padding: "6px 14px",
        fontSize: 14,
        fontWeight: 500,
        color: "rgba(255,255,255,0.7)",
        textDecoration: "none",
        borderRadius: 8,
        transition: "color 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </a>
  );
}

/* ─── Active Card ─── */

function ActiveCard() {
  const handleClick = useCallback(() => {
    window.open("https://www.freepik.com", "_blank", "noopener,noreferrer");
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Открыть Freepik — Миллионы графических ресурсов для ваших проектов"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group"
      style={{
        width: 280,
        height: 280,
        cursor: "pointer",
        outline: "none",
        borderRadius: 24,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0,240,255,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 24,
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,240,255,0.25)";
        e.currentTarget.style.borderColor = "rgba(0,240,255,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,240,255,0.15)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 2px #00f0ff, 0 8px 32px rgba(0,240,255,0.15)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,240,255,0.15)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingTop: 8 }}>
        <FreepikIcon />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
        <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", margin: 0 }}>
          Freepik
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0, maxWidth: 220 }}>
          Миллионы премиум-графики, фото, векторов и шаблонов для ваших проектов
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px rgba(34,197,94,0.6)",
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
            Доступно
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Locked Card ─── */

function LockedCard() {
  return (
    <div
      aria-label="Инструмент скоро появится — Требуется премиум-доступ"
      aria-disabled="true"
      style={{
        width: 280,
        height: 280,
        cursor: "not-allowed",
        filter: "grayscale(0.5)",
        borderRadius: 24,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <LockIcon />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0, letterSpacing: "-0.01em" }}>
          Скоро
        </h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0, fontWeight: 400 }}>
          Требуется премиум-доступ
        </p>
      </div>
    </div>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(10,14,39,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        fontFamily: "'SF Pro Display','SF Pro',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <LogoIcon />
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #00f0ff, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PumpTools
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 300, margin: 0 }}>
              Набор профессиональных инструментов для дизайнеров, разработчиков и творческих специалистов. Все необходимое в одном месте.
            </p>
          </div>

          {/* Column: Product */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Продукт
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <FooterLink label="Инструменты" />
              <FooterLink label="Тарифы" />
              <FooterLink label="Обновления" />
              <FooterLink label="Документация" />
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Компания
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <FooterLink label="О нас" />
              <FooterLink label="Блог" />
              <FooterLink label="Карьера" />
              <FooterLink label="Контакты" />
            </ul>
          </div>

          {/* Column: Legal */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Правовая информация
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <FooterLink label="Политика конфиденциальности" />
              <FooterLink label="Условия использования" />
              <FooterLink label="Лицензии" />
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            2025 PumpTools. Все права защищены.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Social icons */}
            <SocialIcon ariaLabel="Telegram">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.57 7.4c-.12.54-.43.67-.88.42l-2.44-1.8-1.18 1.13c-.13.13-.24.24-.49.24l.17-2.48 4.5-4.07c.2-.17-.04-.27-.3-.1l-5.57 3.5-2.4-.75c-.52-.16-.53-.52.11-.77l9.37-3.61c.44-.16.82.1.68.7z" />
            </SocialIcon>
            <SocialIcon ariaLabel="GitHub">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </SocialIcon>
            <SocialIcon ariaLabel="Электронная почта">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.45)",
          textDecoration: "none",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#00f0ff"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
      >
        {label}
      </a>
    </li>
  );
}

function SocialIcon({ ariaLabel, children }: { ariaLabel: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={ariaLabel}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,240,255,0.1)";
        e.currentTarget.style.borderColor = "rgba(0,240,255,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}

/* ─── Mobile Nav Menu ─── */

function MobileHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(10,14,39,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'SF Pro Display','SF Pro',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
        }}
      >
        <a href="#" aria-label="PumpTools — На главную" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <LogoIcon />
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PumpTools
          </span>
        </a>
        <a
          href="#tools"
          style={{
            padding: "7px 16px",
            fontSize: 13,
            fontWeight: 600,
            color: "#0a0e27",
            background: "linear-gradient(135deg, #00f0ff, #a855f7)",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Начать
        </a>
      </div>
    </header>
  );
}

/* ─── Main App ─── */

export function App() {
  return (
    <div
      style={{
        fontFamily: "'SF Pro Display','SF Pro',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
        background: "linear-gradient(160deg, #0a0e27 0%, #1a1f3a 50%, #0f1330 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      {/* Desktop header */}
      <div className="desktop-header">
        <Header />
      </div>
      {/* Mobile header */}
      <div className="mobile-header">
        <MobileHeader />
      </div>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        {/* Ambient light blobs */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "0%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        {/* Hero / Title Section */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "80px 24px 40px",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-section"
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
              background: "linear-gradient(135deg, #00f0ff 0%, #a855f7 60%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(0,240,255,0.2))",
            }}
            className="hero-title"
          >
            PumpTools
          </h1>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              marginTop: 12,
              letterSpacing: "0.01em",
              margin: "12px 0 0 0",
            }}
          >
            Набор профессиональных инструментов
          </p>
        </section>

        {/* Tools Grid */}
        <section
          id="tools"
          aria-label="Сетка инструментов"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 24px 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 280px)",
              gap: 32,
            }}
            className="tools-grid"
          >
            <ActiveCard />
            <LockedCard />
            <LockedCard />
          </div>
        </section>
      </main>

      <Footer />

      {/* Responsive styles */}
      <style>{`
        .desktop-header { display: block; }
        .mobile-header { display: none; }

        @media (max-width: 768px) {
          .desktop-header { display: none; }
          .mobile-header { display: block; }
        }

        @media (max-width: 960px) {
          .tools-grid {
            grid-template-columns: repeat(2, 280px) !important;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 44px !important;
          }
          .hero-section {
            padding: 48px 20px 24px !important;
          }
          .tools-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .tools-grid > div {
            width: 100% !important;
            max-width: 320px;
            margin: 0 auto;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px 24px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 36px !important;
          }
          .tools-grid > div {
            height: 260px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }

        a:focus-visible, [role="button"]:focus-visible {
          outline: 2px solid #00f0ff;
          outline-offset: 2px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

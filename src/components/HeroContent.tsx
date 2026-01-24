const HeroContent = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-8 z-10 flex items-end min-h-[72vh] pb-14">
      <div className="mg-hero__panel">
        <h1 className="mg-hero__h1">
          Commercial Make Good &amp; Remedial Works
        </h1>

        <div className="mg-hero__h2">
          Make good, <span className="mg-accent">BETTER.</span>
        </div>

        <div className="mg-hero__copy">
          <div className="mg-hero__p1">Commercial spaces get worn. Leases end. We put things right.</div>
          <div className="mg-hero__p2">
            End-of-lease strip-out, make-safe and remedial works across Melbourne.
            Transparent quotes. Licensed trades. A finish you can hand over.
          </div>

          <div className="mg-hero__micro">We do make goods all day, every day.</div>
        </div>

        <div className="mg-hero__cta">
          <button 
            onClick={scrollToContact}
            className="mg-btn mg-btn--primary"
          >
            Get a Quote
          </button>
          <button 
            onClick={scrollToServices}
            className="mg-btn mg-btn--secondary"
          >
            Our Services
          </button>
        </div>

        <div className="mg-hero__ctaNote">Scope-based quoting for end-of-lease and remedial works.</div>
      </div>

      <style>{`
        :root {
          --mg-orange: #F28C3A;
          --mg-blue: #2C7BE5;
          --mg-white: #FFFFFF;
          --mg-ink: #101214;
          --mg-panel: rgba(16, 18, 20, 0.72);
          --mg-border: rgba(255, 255, 255, 0.14);
        }

        .mg-hero__panel {
          width: min(720px, 100%);
          background: var(--mg-panel);
          border: 1px solid var(--mg-border);
          border-radius: 18px;
          padding: 28px 28px 22px;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .mg-hero__h1 {
          margin: 0 0 10px;
          color: var(--mg-white);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.02;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          font-weight: 800;
        }

        .mg-hero__h2 {
          margin: 0 0 18px;
          color: var(--mg-orange);
          font-weight: 800;
          font-size: clamp(18px, 2vw, 26px);
          letter-spacing: -0.01em;
        }

        .mg-accent {
          color: var(--mg-orange);
        }

        .mg-hero__copy {
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.92);
        }

        .mg-hero__p1 {
          font-size: 18px;
          line-height: 1.35;
          margin: 0 0 10px;
          font-weight: 600;
        }

        .mg-hero__p2 {
          font-size: 15px;
          line-height: 1.55;
          margin: 0 0 10px;
          color: rgba(255, 255, 255, 0.86);
        }

        .mg-hero__micro {
          font-size: 14px;
          line-height: 1.4;
          color: rgba(44, 123, 229, 0.95);
          font-weight: 600;
          margin: 0;
        }

        .mg-hero__cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .mg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: transform 0.06s ease, background-color 0.12s ease, border-color 0.12s ease, color 0.12s ease;
          min-width: 170px;
          cursor: pointer;
          border: none;
        }

        .mg-btn:active {
          transform: translateY(1px);
        }

        .mg-btn--primary {
          background: var(--mg-orange);
          color: #1A1A1A;
          border: 1px solid rgba(0, 0, 0, 0.12);
        }

        .mg-btn--primary:hover {
          background: #ff9a4f;
        }

        .mg-btn--secondary {
          background: rgba(255, 255, 255, 0.06);
          color: var(--mg-white);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .mg-btn--secondary:hover {
          background: rgba(255, 255, 255, 0.10);
          border-color: rgba(255, 255, 255, 0.28);
        }

        .mg-hero__ctaNote {
          margin-top: 10px;
          font-size: 12.5px;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.68);
        }

        @media (max-width: 560px) {
          .mg-hero__panel {
            padding: 22px 18px 18px;
            border-radius: 16px;
          }
          .mg-btn {
            min-width: 0;
            width: 100%;
          }
          .mg-hero__cta {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroContent;

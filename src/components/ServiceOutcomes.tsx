const ServiceOutcomes = () => {
  return (
    <section className="service-outcomes-section">
      <div className="outcomes-container">
        <div className="content-wrapper">
          <h2 className="headline">
            Your Project. <span className="orange-accent">Start to Finish.</span>
          </h2>
          
          <p className="supporting-text">
            We manage the full scope so your handback is clean and on time.
          </p>
          
          <div className="outcomes-list">
            <div className="outcome-item">
              <svg className="checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="hsl(25, 85%, 60%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No scope surprises.</span>
            </div>
            
            <div className="outcome-item">
              <svg className="checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="hsl(25, 85%, 60%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>One contractor. Full accountability.</span>
            </div>
            
            <div className="outcome-item">
              <svg className="checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="hsl(25, 85%, 60%)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Starts on time. Finishes on time.</span>
            </div>
          </div>
          
          <a href="/contact" className="cta-button">
            <span>Get a Quote</span>
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .service-outcomes-section {
          background: hsl(0, 0%, 13.3%);
          padding: 56px 24px 58px;
          position: relative;
        }
        
        .outcomes-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .headline {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.25;
          color: white;
          margin: 0 0 24px 0;
        }
        
        .orange-accent {
          color: hsl(25, 85%, 60%);
          display: inline;
        }
        
        .supporting-text {
          font-size: 1.25rem;
          color: white;
          margin: 0 0 32px 0;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .outcomes-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
          align-items: flex-start;
        }
        
        .outcome-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 1.125rem; /* text-lg */
          color: white;
          text-align: left;
        }
        
        .checkmark {
          flex-shrink: 0;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 0.625rem 2rem; /* matches size="lg": h-11 px-8 */
          background: hsl(25, 85%, 60%);
          color: hsl(0, 0%, 13.3%);
          font-size: 1.125rem; /* text-lg */
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px hsla(25, 85%, 60%, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px hsla(25, 85%, 60%, 0.5);
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .service-outcomes-section {
            padding: 64px 16px 40px;
          }
          
          .headline {
            font-size: 2rem;
          }
          
          .supporting-text {
            font-size: 1.125rem; /* text-lg */
            margin-bottom: 36px;
          }
          
          .outcome-item {
            font-size: 1rem;
          }
          
          .cta-button {
            padding: 0.5rem 1.75rem;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .headline {
            font-size: 1.75rem;
          }
          
          .supporting-text {
            font-size: 1rem;
          }
          
          .outcomes-list {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceOutcomes;

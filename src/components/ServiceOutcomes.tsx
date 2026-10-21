import './ServiceOutcomes.css';

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
          
          <a href="/contact/" className="cta-button">
            <span>Request a Quote</span>
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceOutcomes;

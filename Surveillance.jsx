import { useEffect } from "react";
import { Link } from "wouter";

export default function Surveillance() {
  useEffect(() => {
    // Load Font Awesome and AOS if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }

    if (!document.querySelector('link[href*="aos"]')) {
      const aosCSS = document.createElement('link');
      aosCSS.rel = 'stylesheet';
      aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
      document.head.appendChild(aosCSS);
    }

    if (!document.querySelector('script[src*="aos"]')) {
      const aosJS = document.createElement('script');
      aosJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      aosJS.onload = () => {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 1000,
            once: true,
            offset: 100
          });
        }
      };
      document.body.appendChild(aosJS);
    }

    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="floating-icons">
          <i className="fas fa-eye floating-icon"></i>
          <i className="fas fa-camera floating-icon"></i>
          <i className="fas fa-shield-alt floating-icon"></i>
          <i className="fas fa-video floating-icon"></i>
          <i className="fas fa-user-shield floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Surveillance Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Comprehensive surveillance systems to protect your assets and ensure security with cutting-edge monitoring</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Surveillance Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Asset Protection</h4>
              <p>Safeguard your valuable assets, equipment, and inventory with comprehensive surveillance coverage and real-time monitoring.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Operational Insights</h4>
              <p>Gain valuable insights into operations, customer behavior, and process efficiency through intelligent video analytics.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>24/7 Monitoring</h4>
              <p>Ensure round-the-clock security with continuous monitoring and instant alerts for any suspicious activities or incidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Surveillance Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Surveillance Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h4>IP Camera Systems</h4>
              <p>Deploy high-definition IP cameras with advanced features like night vision, motion detection, and remote access capabilities.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Video Analytics</h4>
              <p>Implement AI-powered video analytics for facial recognition, object detection, and behavioral analysis for enhanced security.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Remote Monitoring</h4>
              <p>Access your surveillance system from anywhere with mobile apps and web-based platforms for real-time monitoring and control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Surveillance Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Modern surveillance systems do more than just provide security—they offer valuable business intelligence and operational insights. Our comprehensive surveillance solutions help organizations reduce theft and loss, improve safety compliance, and optimize operations through data-driven insights.</p>
              
              <p>By implementing advanced surveillance systems, businesses can reduce security incidents by 75%, improve operational efficiency by 25%, and reduce insurance costs by up to 20% through demonstrated security measures and risk mitigation.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">75%</div>
                <div className="stat-label">Incident Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25%</div>
                <div className="stat-label">Efficiency Boost</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20%</div>
                <div className="stat-label">Insurance Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Secure Your Business with Advanced Surveillance?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to design a comprehensive surveillance solution for your organization</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Secure Your Assets</Link>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";

export default function Cybersecurity() {
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
          <i className="fas fa-shield-alt floating-icon"></i>
          <i className="fas fa-lock floating-icon"></i>
          <i className="fas fa-user-shield floating-icon"></i>
          <i className="fas fa-fingerprint floating-icon"></i>
          <i className="fas fa-key floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Cybersecurity Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Protect your digital assets with advanced cybersecurity solutions and comprehensive risk management</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Cybersecurity Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Threat Protection</h4>
              <p>Protect your business from cyber threats with advanced threat detection and prevention systems that secure your digital infrastructure.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Business Continuity</h4>
              <p>Ensure uninterrupted operations with robust security measures that prevent downtime and protect critical business processes.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>Compliance Assurance</h4>
              <p>Meet regulatory requirements and industry standards with comprehensive security frameworks and audit-ready documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cybersecurity Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Cybersecurity Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-search"></i>
              </div>
              <h4>Security Assessment</h4>
              <p>Comprehensive security audits and vulnerability assessments to identify and address potential security weaknesses.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>24/7 Monitoring</h4>
              <p>Round-the-clock security monitoring and incident response to detect and respond to threats in real-time.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Security Training</h4>
              <p>Employee security awareness training and best practices education to create a security-conscious culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Cybersecurity Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>In today's digital landscape, cybersecurity is not just about protection—it's about enabling business growth. Our comprehensive cybersecurity solutions provide the foundation for digital transformation, allowing organizations to innovate confidently while maintaining robust security postures.</p>
              
              <p>By implementing strong cybersecurity measures, businesses can reduce security incidents by 90%, achieve faster regulatory compliance, and build customer trust through demonstrated commitment to data protection. Our proactive approach ensures your business stays ahead of evolving threats.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">Threat Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Secure Your Business?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to discuss your cybersecurity needs and protect your digital assets</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Secure Your Business</Link>
        </div>
      </section>
    </div>
  );
}

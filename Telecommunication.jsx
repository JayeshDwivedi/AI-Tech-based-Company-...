import { useEffect } from "react";
import { Link } from "wouter";

export default function Telecommunication() {
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
          <i className="fas fa-broadcast-tower floating-icon"></i>
          <i className="fas fa-satellite floating-icon"></i>
          <i className="fas fa-wifi floating-icon"></i>
          <i className="fas fa-phone floating-icon"></i>
          <i className="fas fa-signal floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Telecommunication Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Advanced telecommunication solutions for seamless connectivity and efficient communication infrastructure</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Telecommunication Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h4>Global Connectivity</h4>
              <p>Enable seamless communication across multiple locations with high-quality voice, data, and video connectivity solutions.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Enhanced Collaboration</h4>
              <p>Improve team productivity with unified communication platforms that integrate voice, video, messaging, and file sharing.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Mobile Solutions</h4>
              <p>Support remote work and mobility with robust mobile communication infrastructure and wireless connectivity options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Telecommunication Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Telecommunication Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h4>VoIP Systems</h4>
              <p>Implement cost-effective Voice over IP solutions that provide advanced calling features and integration capabilities.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-video"></i>
              </div>
              <h4>Video Conferencing</h4>
              <p>Deploy high-quality video conferencing systems for effective remote meetings and collaboration across locations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-broadcast-tower"></i>
              </div>
              <h4>Network Infrastructure</h4>
              <p>Build robust telecommunication networks with fiber optic, wireless, and satellite connectivity options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Telecommunication Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Modern telecommunication infrastructure is essential for business success in today's connected world. Our comprehensive communication solutions enable organizations to improve customer service, enhance team collaboration, and expand their reach while reducing operational costs and increasing efficiency.</p>
              
              <p>By implementing advanced telecommunication systems, businesses can reduce communication costs by up to 40%, improve customer response times by 50%, and increase team productivity by 30% through better collaboration tools and connectivity solutions.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50%</div>
                <div className="stat-label">Faster Response</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">Productivity Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Enhance Your Communication Infrastructure?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore advanced telecommunication solutions for your business</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Get Connected</Link>
        </div>
      </section>
    </div>
  );
}

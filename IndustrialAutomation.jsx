import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialAutomation() {
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
          <i className="fas fa-industry floating-icon"></i>
          <i className="fas fa-cogs floating-icon"></i>
          <i className="fas fa-robot floating-icon"></i>
          <i className="fas fa-wrench floating-icon"></i>
          <i className="fas fa-microchip floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Industrial Automation Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Optimize your industrial processes with cutting-edge automation technologies and smart manufacturing solutions</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Industrial Automation Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Production Efficiency</h4>
              <p>Increase manufacturing output by up to 60% with automated production lines and intelligent process control systems.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Enhanced Safety</h4>
              <p>Reduce workplace accidents and improve safety standards through automated systems that minimize human exposure to hazards.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4>Predictive Maintenance</h4>
              <p>Prevent costly equipment failures with smart monitoring systems that predict maintenance needs and optimize schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Industrial Automation Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Industrial Automation Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h4>PLC Programming</h4>
              <p>Design and program Programmable Logic Controllers for precise control of industrial equipment and processes.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <h4>SCADA Systems</h4>
              <p>Implement Supervisory Control and Data Acquisition systems for real-time monitoring and control of industrial operations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h4>Robotic Integration</h4>
              <p>Deploy industrial robots and automated machinery for precision manufacturing and material handling operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Industrial Automation Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Industrial automation is transforming manufacturing and production environments worldwide. Our comprehensive automation solutions enable manufacturers to achieve higher productivity, improved quality, and reduced operational costs while maintaining flexibility to adapt to market demands and customer requirements.</p>
              
              <p>By implementing advanced industrial automation, manufacturers can achieve up to 50% increase in production capacity, 90% reduction in defects, and 40% reduction in operational costs through optimized processes and intelligent systems that learn and adapt over time.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">50%</div>
                <div className="stat-label">Production Increase</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">Defect Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Revolutionize Your Manufacturing?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore industrial automation solutions for your facility</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Your Industry</Link>
        </div>
      </section>
    </div>
  );
}

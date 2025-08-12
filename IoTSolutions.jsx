import { useEffect } from "react";
import { Link } from "wouter";

export default function IoTSolutions() {
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
          <i className="fas fa-network-wired floating-icon"></i>
          <i className="fas fa-wifi floating-icon"></i>
          <i className="fas fa-satellite floating-icon"></i>
          <i className="fas fa-microchip floating-icon"></i>
          <i className="fas fa-mobile-alt floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Internet of Things Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Connect and manage your devices with comprehensive IoT solutions for smart operations</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How IoT Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Real-Time Monitoring</h4>
              <p>Monitor your assets and operations in real-time with connected sensors and devices that provide instant insights and alerts.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Operational Efficiency</h4>
              <p>Optimize resource usage and reduce waste through intelligent automation and predictive maintenance capabilities.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Enhanced Security</h4>
              <p>Implement smart security systems with connected cameras, sensors, and access controls for comprehensive protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our IoT Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our IoT Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-home"></i>
              </div>
              <h4>Smart Building Solutions</h4>
              <p>Transform buildings into intelligent environments with automated lighting, HVAC, and energy management systems.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h4>Industrial IoT</h4>
              <p>Connect manufacturing equipment and machinery for predictive maintenance and operational optimization.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>IoT Platform Development</h4>
              <p>Build custom IoT platforms and dashboards for managing and analyzing data from connected devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How IoT Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The Internet of Things is revolutionizing how businesses collect data, monitor operations, and interact with their environment. Our IoT solutions enable organizations to make data-driven decisions, reduce operational costs, and improve customer experiences through connected devices and intelligent systems.</p>
              
              <p>By implementing IoT technologies, businesses can achieve up to 30% reduction in operational costs, 25% improvement in efficiency, and 40% faster response times to critical events. Our comprehensive IoT ecosystem ensures seamless connectivity and valuable insights from your connected infrastructure.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25%</div>
                <div className="stat-label">Efficiency Boost</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Connect Your Business with IoT?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore how IoT solutions can transform your operations</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Get Connected Today</Link>
        </div>
      </section>
    </div>
  );
}

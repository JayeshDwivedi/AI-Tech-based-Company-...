import { useEffect } from "react";
import { Link } from "wouter";

export default function ITInfrastructure() {
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
          <i className="fas fa-server floating-icon"></i>
          <i className="fas fa-database floating-icon"></i>
          <i className="fas fa-cloud floating-icon"></i>
          <i className="fas fa-network-wired floating-icon"></i>
          <i className="fas fa-hdd floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">IT Infrastructure Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Build robust and scalable IT infrastructure that supports your business growth and digital transformation</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How IT Infrastructure Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Enhanced Performance</h4>
              <p>Optimize system performance with modern infrastructure that ensures fast, reliable, and efficient operations across your organization.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <h4>Scalable Solutions</h4>
              <p>Build infrastructure that grows with your business, providing flexibility to adapt to changing requirements and increased workloads.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Cost Optimization</h4>
              <p>Reduce operational costs through efficient resource utilization, automated management, and strategic technology investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our IT Infrastructure Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our IT Infrastructure Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>Cloud Infrastructure</h4>
              <p>Design and implement cloud solutions that provide flexibility, scalability, and cost-effectiveness for modern businesses.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h4>Network Solutions</h4>
              <p>Build robust network infrastructure with high-speed connectivity, redundancy, and security for seamless operations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4>Infrastructure Management</h4>
              <p>Comprehensive monitoring, maintenance, and optimization services to ensure peak performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How IT Infrastructure Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Modern IT infrastructure is the backbone of digital transformation and business success. Our comprehensive infrastructure solutions provide the foundation for innovation, enabling organizations to leverage emerging technologies, improve operational efficiency, and deliver superior customer experiences.</p>
              
              <p>By implementing modern IT infrastructure, businesses can achieve up to 50% improvement in system performance, 60% reduction in downtime, and 35% cost savings through optimized resource utilization. Our scalable solutions ensure your infrastructure evolves with your business needs.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">50%</div>
                <div className="stat-label">Performance Boost</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-label">Less Downtime</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">35%</div>
                <div className="stat-label">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Modernize Your IT Infrastructure?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to build a robust foundation for your digital transformation</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Your Infrastructure</Link>
        </div>
      </section>
    </div>
  );
}

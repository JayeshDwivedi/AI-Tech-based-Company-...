import { useEffect } from "react";
import { Link } from "wouter";

export default function Automation() {
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
          <i className="fas fa-cogs floating-icon"></i>
          <i className="fas fa-robot floating-icon"></i>
          <i className="fas fa-microchip floating-icon"></i>
          <i className="fas fa-chart-line floating-icon"></i>
          <i className="fas fa-sync-alt floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Automation Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Streamline your workflows with intelligent automation solutions that increase efficiency and reduce costs</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Automation Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Time Efficiency</h4>
              <p>Reduce manual processing time by up to 80% with automated workflows that handle repetitive tasks and streamline operations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Cost Reduction</h4>
              <p>Lower operational costs through reduced labor requirements, minimized errors, and optimized resource utilization.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Quality Improvement</h4>
              <p>Enhance accuracy and consistency by eliminating human error and standardizing processes across your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Automation Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Automation Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-workflow"></i>
              </div>
              <h4>Workflow Automation</h4>
              <p>Design and implement automated workflows that connect different systems and processes for seamless operations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h4>Document Processing</h4>
              <p>Automate document creation, processing, and management with intelligent systems that handle data extraction and routing.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h4>Business Process Automation</h4>
              <p>Transform complex business processes with end-to-end automation solutions that improve efficiency and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How Automation Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Automation is the key to scaling your business efficiently and staying competitive in today's fast-paced market. Our comprehensive automation solutions enable organizations to focus on strategic initiatives while routine tasks are handled automatically, leading to improved productivity and innovation.</p>
              
              <p>By implementing intelligent automation, businesses can achieve up to 70% reduction in processing time, 85% improvement in accuracy, and 45% cost savings through optimized operations. Our scalable automation solutions grow with your business and adapt to changing requirements.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">70%</div>
                <div className="stat-label">Time Savings</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">85%</div>
                <div className="stat-label">Accuracy Boost</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">45%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Automate Your Business Processes?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to discover how automation can transform your operations</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Automate Now</Link>
        </div>
      </section>
    </div>
  );
}

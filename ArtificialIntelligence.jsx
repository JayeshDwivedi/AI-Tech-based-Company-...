import { useEffect } from "react";
import { Link } from "wouter";

export default function ArtificialIntelligence() {
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
          <i className="fas fa-robot floating-icon"></i>
          <i className="fas fa-brain floating-icon"></i>
          <i className="fas fa-microchip floating-icon"></i>
          <i className="fas fa-chart-line floating-icon"></i>
          <i className="fas fa-cogs floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Artificial Intelligence Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Harness the power of AI to transform your business operations and drive innovation</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How AI Benefits Your Business</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Data-Driven Insights</h4>
              <p>Transform raw data into actionable insights with advanced analytics and machine learning algorithms that reveal hidden patterns and opportunities.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h4>Process Automation</h4>
              <p>Automate repetitive tasks and streamline workflows with intelligent automation that reduces costs and improves accuracy.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Enhanced Customer Experience</h4>
              <p>Deliver personalized experiences through AI-powered recommendation systems and intelligent chatbots that understand customer needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Services */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our AI Services</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Computer Vision</h4>
              <p>Implement image recognition, object detection, and visual inspection systems for quality control and security applications.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h4>Natural Language Processing</h4>
              <p>Build intelligent chatbots, sentiment analysis systems, and document processing solutions that understand human language.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Machine Learning Models</h4>
              <p>Develop predictive models and recommendation systems that learn from your data to make intelligent decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>How AI Drives Business Growth</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Artificial Intelligence is revolutionizing the way businesses operate, making processes more efficient, decisions more accurate, and customer experiences more personalized. Our AI solutions help organizations unlock the full potential of their data and automate complex tasks.</p>
              
              <p>By implementing AI technologies, businesses can reduce operational costs by up to 40%, improve decision-making speed by 5x, and increase customer satisfaction through personalized interactions. Our comprehensive AI services ensure your organization stays competitive in the digital age.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5x</div>
                <div className="stat-label">Faster Decisions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Transform Your Business with AI?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to discuss how our AI solutions can drive your business forward</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";

export default function Agriculture() {
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
          <i className="fas fa-seedling floating-icon"></i>
          <i className="fas fa-tractor floating-icon"></i>
          <i className="fas fa-leaf floating-icon"></i>
          <i className="fas fa-cloud-sun floating-icon"></i>
          <i className="fas fa-apple-alt floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Agriculture Technology Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Revolutionizing farming with smart agriculture technology for sustainable and efficient crop production</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Revolutionizing Agriculture */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Revolutionizing Agriculture with Technology</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The agriculture industry is embracing digital transformation to meet growing global food demands while promoting sustainable farming practices. Our comprehensive technology solutions enable farmers to optimize crop yields, reduce resource consumption, and make data-driven decisions for improved profitability and environmental stewardship.</p>
              
              <p>From precision agriculture and IoT sensors to AI-powered crop monitoring and automated irrigation systems, we're helping agricultural operations leverage technology to increase productivity, reduce costs, and promote sustainable farming practices for future generations.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">35%</div>
                <div className="stat-label">Yield Increase</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Water Savings</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50%</div>
                <div className="stat-label">Pesticide Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Agriculture Technologies</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <i className="fas fa-satellite"></i>
              </div>
              <h4>Precision Agriculture</h4>
              <p>GPS-guided farming equipment and satellite imagery for precise field management and optimization.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h4>Drone Technology</h4>
              <p>Aerial monitoring and crop surveillance using advanced drone systems for field analysis.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <i className="fas fa-tint"></i>
              </div>
              <h4>Smart Irrigation</h4>
              <p>Automated irrigation systems with moisture sensors for optimal water management and conservation.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
              <div className="tech-icon">
                <i className="fas fa-thermometer-half"></i>
              </div>
              <h4>Weather Monitoring</h4>
              <p>Real-time weather stations and climate monitoring systems for informed farming decisions.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="500">
              <div className="tech-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>AI Crop Analysis</h4>
              <p>Machine learning algorithms for crop health assessment and disease detection systems.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="600">
              <div className="tech-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h4>IoT Sensors</h4>
              <p>Soil and environmental sensors for continuous monitoring of crop growing conditions.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Farm Management Apps</h4>
              <p>Mobile applications for field data collection, crop planning, and farm management tasks.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="800">
              <div className="tech-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Data Analytics</h4>
              <p>Advanced analytics platforms for yield prediction and agricultural performance optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Agricultural Applications</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h4>Crop Management</h4>
              <p>Comprehensive crop monitoring and management systems for optimal growth and yield optimization.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-cow"></i>
              </div>
              <h4>Livestock Monitoring</h4>
              <p>Smart livestock tracking and health monitoring systems for improved animal welfare and productivity.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h4>Supply Chain Management</h4>
              <p>Digital supply chain solutions for farm-to-market traceability and inventory management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Technology Impact on Agriculture</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Technology is transforming agriculture by enabling precision farming, reducing environmental impact, and improving food security. Our solutions help farmers make data-driven decisions that optimize resource usage while maximizing crop yields and profitability.</p>
              
              <p>The integration of IoT, AI, and automation in agriculture is enabling sustainable farming practices, reducing chemical usage, and improving crop quality while ensuring food safety and traceability throughout the supply chain.</p>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Sustainability</h4>
                <p>Promote sustainable farming practices with efficient resource management and environmental monitoring.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h4>Productivity</h4>
                <p>Increase agricultural productivity through data-driven insights and automated farming systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Success Stories</h2>
          </div>
          
          <div className="history-content">
            <div className="timeline" data-aos="fade-right">
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <h4 className="timeline-title">Smart Vineyard Project</h4>
                <p className="timeline-desc">Implemented IoT sensors and automated irrigation for premium wine production, resulting in 30% water savings and 25% yield improvement.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">Precision Corn Farming</h4>
                <p className="timeline-desc">Deployed precision agriculture technology across 5,000 acres, achieving 40% reduction in fertilizer usage and 20% increase in crop yields.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">Automated Greenhouse Network</h4>
                <p className="timeline-desc">Launched AI-controlled greenhouse system for year-round vegetable production, achieving 300% higher yields and 60% water conservation compared to traditional farming methods.</p>
              </div>
            </div>
            
            <div className="history-stats" data-aos="fade-left">
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-map"></i>
                </div>
                <div className="history-stat-number">10K+</div>
                <div className="history-stat-label">Acres Monitored</div>
              </div>
              
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="history-stat-number">500+</div>
                <div className="history-stat-label">Farmers Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Security */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Compliance and Security</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>Organic Certification</h4>
              <p>Support organic farming certification with comprehensive monitoring and documentation systems.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Food Safety</h4>
              <p>Ensure food safety compliance with traceability systems and quality monitoring throughout the supply chain.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Environmental Standards</h4>
              <p>Meet environmental compliance requirements with sustainable farming practices and impact monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="feedback-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>What Our Customers Say</h2>
            <p>Real stories from those who’ve transformed their farming with us</p>
          </div>

          <div className="feedback-slider">
            <div className="feedback-card" data-aos="zoom-in" data-aos-delay="100">
              <p>"The precision agriculture system helped me boost my yield by 40% last year!"</p>
              <h4>Ramesh Patil</h4>
              <span>Farmer, Maharashtra</span>
            </div>

            <div className="feedback-card" data-aos="zoom-in" data-aos-delay="200">
              <p>"Our irrigation is now fully automated. It saves water and time daily."</p>
              <h4>Anita Sharma</h4>
              <span>Farm Owner, Punjab</span>
            </div>

            <div className="feedback-card" data-aos="zoom-in" data-aos-delay="300">
              <p>"With AI crop analysis, we spot diseases early. Truly game-changing."</p>
              <h4>Mohammed Irfan</h4>
              <span>Agri-Tech Consultant</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Modernize Your Agricultural Operations?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore smart agriculture solutions for your farm</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Agriculture</Link>
        </div>
      </section>
    </div>
  );
}
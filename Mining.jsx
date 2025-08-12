import { useEffect } from "react";
import { Link } from "wouter";

export default function Mining() {
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
          <i className="fas fa-hard-hat floating-icon"></i>
          <i className="fas fa-gem floating-icon"></i>
          <i className="fas fa-industry floating-icon"></i>
          <i className="fas fa-truck floating-icon"></i>
          <i className="fas fa-cogs floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Mining Technology Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Revolutionizing mining operations with advanced technology for safer and more efficient extraction</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Revolutionizing Mining */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Revolutionizing Mining with Technology</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The mining industry is undergoing a digital transformation that's enhancing safety, increasing productivity, and reducing environmental impact. Our comprehensive technology solutions enable mining companies to optimize operations, improve worker safety, and maximize resource extraction efficiency through data-driven insights and automation.</p>
              
              <p>From autonomous mining equipment and IoT sensors to AI-powered geological analysis and real-time monitoring systems, we're helping mining operations embrace Industry 4.0 technologies to achieve sustainable growth and operational excellence in challenging environments.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">45%</div>
                <div className="stat-label">Safety Improvement</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">Productivity Boost</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Mining Technologies</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h4>Autonomous Vehicles</h4>
              <p>Self-driving trucks and equipment for safer and more efficient mining operations.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <i className="fas fa-satellite"></i>
              </div>
              <h4>Remote Monitoring</h4>
              <p>Satellite and drone-based monitoring systems for real-time site surveillance and analysis.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>AI Geological Analysis</h4>
              <p>Machine learning algorithms for ore detection and geological pattern recognition.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
              <div className="tech-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h4>IoT Sensors</h4>
              <p>Environmental and equipment sensors for continuous monitoring and predictive maintenance.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="500">
              <div className="tech-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Data Analytics</h4>
              <p>Advanced analytics platforms for operational optimization and resource planning.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="600">
              <div className="tech-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Safety Systems</h4>
              <p>Integrated safety monitoring and emergency response systems for worker protection.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Mobile Solutions</h4>
              <p>Mobile applications for field data collection and real-time communication.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="800">
              <div className="tech-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>Cloud Computing</h4>
              <p>Scalable cloud infrastructure for data storage, processing, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Mining Applications</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-truck-loading"></i>
              </div>
              <h4>Fleet Management</h4>
              <p>Comprehensive fleet tracking and optimization systems for mining vehicles and heavy equipment.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h4>Mine Planning</h4>
              <p>Digital mine planning and modeling software for optimal resource extraction strategies.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Environmental Monitoring</h4>
              <p>Real-time environmental monitoring systems for compliance and sustainable mining practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Technology Impact on Mining</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Technology is revolutionizing mining operations by enabling predictive maintenance, improving safety protocols, and optimizing resource extraction. Our solutions help mining companies reduce operational costs while maintaining environmental compliance and ensuring worker safety.</p>
              
              <p>The integration of automation, AI, and IoT technologies in mining operations is enabling real-time decision making, reducing human exposure to hazardous conditions, and improving overall operational efficiency and sustainability.</p>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-hard-hat"></i>
                </div>
                <h4>Worker Safety</h4>
                <p>Enhanced safety protocols and monitoring systems to protect workers in hazardous environments.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <h4>Sustainability</h4>
                <p>Environmental monitoring and sustainable mining practices for responsible resource extraction.</p>
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
                <h4 className="timeline-title">Copper Mine Automation</h4>
                <p className="timeline-desc">Implemented autonomous mining vehicles and IoT monitoring systems, resulting in 40% increase in productivity and 60% reduction in safety incidents.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">Coal Mine Safety System</h4>
                <p className="timeline-desc">Deployed comprehensive safety monitoring platform with real-time gas detection and emergency response systems for enhanced worker protection.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">Smart Drilling Operations</h4>
                <p className="timeline-desc">Implemented AI-powered drilling optimization system across 30+ mining operations, achieving 50% faster drilling speeds and 35% reduction in equipment maintenance costs.</p>
              </div>
            </div>
            
            <div className="history-stats" data-aos="fade-left">
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <div className="history-stat-number">50+</div>
                <div className="history-stat-label">Mining Sites</div>
              </div>
              
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="history-stat-number">5K+</div>
                <div className="history-stat-label">Workers Protected</div>
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
              <h4>Safety Compliance</h4>
              <p>Ensure compliance with mining safety regulations and international standards for worker protection.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Environmental Standards</h4>
              <p>Meet environmental compliance requirements with continuous monitoring and reporting systems.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Data Security</h4>
              <p>Secure operational data and mining intelligence with advanced cybersecurity measures and protocols.</p>
            </div>
          </div>
        </div>
      </section>

{/*Customer Feedback Section for Mining */} 
<section class="feedback-section">
  <div class="section-header">
    <h2>Customer Feedback</h2>
    <p>What our mining sector clients are saying</p>
  </div>

  <div class="feedback-slider">
    <div class="feedback-card">
      <p>“Our mining operations became more efficient and safe thanks to their advanced monitoring solutions.”</p>
      <h4>Rajdeep Mining Co.</h4>
      <span>Operations Manager</span>
    </div>
    <div class="feedback-card">
      <p>“They automated several tasks which saved us countless hours and increased productivity.”</p>
      <h4>IronRock Ltd.</h4>
      <span>Technical Director</span>
    </div>
    <div class="feedback-card">
      <p>“We now have a much clearer picture of our supply chain and extraction data. Highly recommend.”</p>
      <h4>GlobalOre Solutions</h4>
      <span>Data Analyst</span>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Modernize Your Mining Operations?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore how technology can transform your mining operations</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Mining</Link>
        </div>
      </section>
    </div>
  );
}
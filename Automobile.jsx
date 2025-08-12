import { useEffect } from "react";
import { Link } from "wouter";

export default function Automobile() {
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
          <i className="fas fa-car floating-icon"></i>
          <i className="fas fa-cogs floating-icon"></i>
          <i className="fas fa-microchip floating-icon"></i>
          <i className="fas fa-robot floating-icon"></i>
          <i className="fas fa-charging-station floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Automobile Technology Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Revolutionizing automotive manufacturing with smart technology for next-generation vehicles</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Revolutionizing Automobile */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Revolutionizing Automobile with Technology</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The automotive industry is undergoing a revolutionary transformation driven by digital technologies, electrification, and autonomous systems. Our comprehensive technology solutions enable automotive manufacturers to enhance production efficiency, improve vehicle quality, and accelerate innovation in electric and autonomous vehicle development.</p>
              
              <p>From smart manufacturing and IoT-enabled production lines to AI-powered quality control and connected vehicle technologies, we're helping automotive companies embrace Industry 4.0 and prepare for the future of mobility with sustainable and intelligent transportation solutions.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Production Efficiency</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-label">Quality Improvement</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">35%</div>
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
            <h2>Automotive Technologies</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h4>Robotic Assembly</h4>
              <p>Advanced robotic systems for precision manufacturing and automated assembly line operations.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Quality Control AI</h4>
              <p>Machine vision and AI-powered quality inspection systems for defect detection and prevention.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <i className="fas fa-wifi"></i>
              </div>
              <h4>Connected Vehicles</h4>
              <p>IoT connectivity solutions for vehicle-to-vehicle and vehicle-to-infrastructure communication.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
              <div className="tech-icon">
                <i className="fas fa-battery-full"></i>
              </div>
              <h4>Electric Vehicle Tech</h4>
              <p>Battery management systems and charging infrastructure for electric vehicle development.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="500">
              <div className="tech-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Manufacturing Analytics</h4>
              <p>Real-time production analytics and performance monitoring for operational optimization.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="600">
              <div className="tech-icon">
                <i className="fas fa-cube"></i>
              </div>
              <h4>Digital Twin</h4>
              <p>Virtual prototyping and digital twin technology for vehicle design and testing simulation.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Mobile Solutions</h4>
              <p>Mobile applications for production management and real-time factory floor communication.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="800">
              <div className="tech-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Cybersecurity</h4>
              <p>Advanced security systems for protecting connected vehicles and manufacturing networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Automotive Applications</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h4>Smart Manufacturing</h4>
              <p>Intelligent manufacturing systems with automated production lines and real-time process monitoring.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-wrench"></i>
              </div>
              <h4>Predictive Maintenance</h4>
              <p>AI-powered maintenance systems that predict equipment failures and optimize maintenance schedules.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h4>Supply Chain Optimization</h4>
              <p>Digital supply chain management systems for efficient parts sourcing and inventory management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Technology Impact on Automotive Industry</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Technology is reshaping the automotive industry by enabling mass customization, improving safety standards, and accelerating the transition to electric and autonomous vehicles. Our solutions help manufacturers reduce time-to-market while maintaining the highest quality standards.</p>
              
              <p>The integration of AI, robotics, and IoT in automotive manufacturing is enabling flexible production systems, reducing waste, and improving worker safety while supporting the development of next-generation mobility solutions.</p>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4>Sustainability</h4>
                <p>Green manufacturing processes and electric vehicle technology for sustainable transportation.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>Innovation</h4>
                <p>Accelerated innovation in autonomous driving and connected vehicle technologies.</p>
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
                <h4 className="timeline-title">Electric Vehicle Plant</h4>
                <p className="timeline-desc">Implemented smart manufacturing systems for EV production, achieving 45% reduction in production time and 50% improvement in quality metrics.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">Connected Car Platform</h4>
                <p className="timeline-desc">Deployed IoT connectivity solutions for next-generation vehicles, enabling real-time diagnostics and over-the-air updates for enhanced customer experience.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">Autonomous Vehicle Testing</h4>
                <p className="timeline-desc">Implemented comprehensive autonomous driving testing infrastructure with advanced simulation and real-world testing capabilities, accelerating self-driving car development by 40%.</p>
              </div>
            </div>
            
            <div className="history-stats" data-aos="fade-left">
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-car"></i>
                </div>
                <div className="history-stat-number">100K+</div>
                <div className="history-stat-label">Vehicles Produced</div>
              </div>
              
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <div className="history-stat-number">25+</div>
                <div className="history-stat-label">Manufacturing Plants</div>
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
              <h4>Safety Standards</h4>
              <p>Ensure compliance with automotive safety standards and regulations for vehicle manufacturing and testing.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Vehicle Security</h4>
              <p>Advanced cybersecurity measures to protect connected vehicles from cyber threats and ensure passenger safety.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h4>Environmental Compliance</h4>
              <p>Meet environmental regulations and emissions standards with sustainable manufacturing practices and technologies.</p>
            </div>
          </div>
        </div>
      </section>
{/* Customer Feedback Section for Automobile */} 
<section class="feedback-section">
  <div class="section-header">
    <h2>Customer Feedback</h2>
    <p>What our automobile industry clients are saying</p>
  </div>

  <div class="feedback-slider">
    <div class="feedback-card">
      <p>“Their AI integration helped us improve vehicle diagnostics and reduce service time significantly.”</p>
      <h4>SpeedAuto Corp</h4>
      <span>Service Manager</span>
    </div>
    <div class="feedback-card">
      <p>“With automation, we streamlined our assembly line and saw a 20% boost in efficiency.”</p>
      <h4>DriveMax Motors</h4>
      <span>Production Head</span>
    </div>
    <div class="feedback-card">
      <p>“They provided us with predictive maintenance systems that reduced unexpected breakdowns.”</p>
      <h4>AutoGenix Pvt Ltd</h4>
      <span>Operations Lead</span>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Drive Automotive Innovation?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore automotive technology solutions for your manufacturing needs</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Automotive</Link>
        </div>
      </section>
    </div>
  );
}
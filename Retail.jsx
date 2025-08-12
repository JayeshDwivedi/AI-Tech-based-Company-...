import { useEffect } from "react";
import { Link } from "wouter";

export default function Retail() {
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
          <i className="fas fa-shopping-cart floating-icon"></i>
          <i className="fas fa-store floating-icon"></i>
          <i className="fas fa-mobile-alt floating-icon"></i>
          <i className="fas fa-chart-line floating-icon"></i>
          <i className="fas fa-credit-card floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Retail Technology Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Revolutionizing retail with digital transformation for enhanced customer experiences and operational efficiency</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Revolutionizing Retail */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Revolutionizing Retail with Technology</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The retail industry is experiencing a digital revolution that's transforming how customers shop and how retailers operate. Our comprehensive technology solutions enable retailers to create seamless omnichannel experiences, optimize inventory management, and leverage data analytics for personalized customer engagement and improved business outcomes.</p>
              
              <p>From AI-powered recommendation engines and mobile payment solutions to smart inventory systems and augmented reality shopping experiences, we're helping retailers embrace digital transformation to meet evolving customer expectations and drive growth in the competitive retail landscape.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">45%</div>
                <div className="stat-label">Sales Increase</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">35%</div>
                <div className="stat-label">Operational Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Retail Technologies</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>AI Recommendations</h4>
              <p>Personalized product recommendations using machine learning algorithms and customer behavior analysis.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Mobile Commerce</h4>
              <p>Mobile shopping applications and mobile payment solutions for seamless customer experiences.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <i className="fas fa-qrcode"></i>
              </div>
              <h4>Smart Checkout</h4>
              <p>Contactless payment systems and self-checkout solutions for faster and safer transactions.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
              <div className="tech-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Computer Vision</h4>
              <p>Visual recognition technology for inventory management and customer behavior analytics.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="500">
              <div className="tech-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Retail Analytics</h4>
              <p>Advanced analytics platforms for sales forecasting and customer insights generation.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="600">
              <div className="tech-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h4>Inventory Management</h4>
              <p>Smart inventory tracking and automated reordering systems for optimal stock management.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>Cloud POS</h4>
              <p>Cloud-based point-of-sale systems for real-time transaction processing and data synchronization.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="800">
              <div className="tech-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Fraud Prevention</h4>
              <p>Advanced security systems for payment protection and fraud detection in retail transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Retail Applications</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-store-alt"></i>
              </div>
              <h4>Omnichannel Commerce</h4>
              <p>Integrated online and offline shopping experiences with unified customer data and inventory management.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Customer Experience</h4>
              <p>Personalized shopping experiences with AI-powered recommendations and virtual shopping assistants.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h4>Supply Chain Optimization</h4>
              <p>End-to-end supply chain visibility and optimization for efficient product distribution and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Technology Impact on Retail</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Technology is transforming retail by enabling personalized customer experiences, optimizing operations, and creating new revenue streams. Our solutions help retailers adapt to changing consumer behaviors and market dynamics while improving profitability and customer loyalty.</p>
              
              <p>The integration of AI, IoT, and mobile technologies in retail is enabling predictive analytics, real-time inventory optimization, and seamless customer journeys that drive sales growth and operational efficiency across all retail channels.</p>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Customer Loyalty</h4>
                <p>Build stronger customer relationships through personalized experiences and loyalty programs.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
              <h4>Growth Acceleration</h4>
                <p>Accelerate business growth through data-driven insights and optimized retail operations.</p>
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
                <h4 className="timeline-title">Fashion Retailer Digital Transformation</h4>
                <p className="timeline-desc">Implemented omnichannel commerce platform and AI recommendations, resulting in 50% increase in online sales and 30% improvement in customer retention.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">Grocery Chain Automation</h4>
                <p className="timeline-desc">Deployed smart inventory management and contactless payment systems across 200+ stores, achieving 25% reduction in operational costs and enhanced customer safety.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">AI-Powered Customer Analytics</h4>
                <p className="timeline-desc">Implemented advanced customer behavior analytics platform across major retail chain, achieving 45% improvement in personalized marketing effectiveness and 25% increase in customer lifetime value.</p>
              </div>
            </div>
            
            <div className="history-stats" data-aos="fade-left">
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-store"></i>
                </div>
                <div className="history-stat-number">500+</div>
                <div className="history-stat-label">Retail Locations</div>
              </div>
              
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="history-stat-number">1M+</div>
                <div className="history-stat-label">Customers Served</div>
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
                <i className="fas fa-credit-card"></i>
              </div>
              <h4>PCI Compliance</h4>
              <p>Ensure payment card industry compliance with secure payment processing and data protection measures.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h4>Data Privacy</h4>
              <p>Protect customer data with advanced privacy controls and compliance with data protection regulations.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Transaction Security</h4>
              <p>Advanced fraud detection and secure transaction processing to protect customers and businesses.</p>
            </div>
          </div>
        </div>
      </section>
{/*Customer Feedback Section for Retail*/}
<section class="feedback-section">
  <div class="section-header">
    <h2>Customer Feedback</h2>
    <p>What our retail clients are saying</p>
  </div>

  <div class="feedback-slider">
    <div class="feedback-card">
      <p>“Our inventory management improved drastically with their intelligent automation system.”</p>
      <h4>UrbanStyle Mart</h4>
      <span>Inventory Head</span>
    </div>
    <div class="feedback-card">
      <p>“AI-powered insights helped us predict demand and optimize our product offerings.”</p>
      <h4>TrendyHub Retail</h4>
      <span>Sales Manager</span>
    </div>
    <div class="feedback-card">
      <p>“Their solution streamlined our checkout process, improving customer satisfaction.”</p>
      <h4>QuickShop Outlet</h4>
      <span>Operations Director</span>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Transform Your Retail Business?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to explore retail technology solutions that drive growth and customer satisfaction</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Retail</Link>
        </div>
      </section>
    </div>
  );
}
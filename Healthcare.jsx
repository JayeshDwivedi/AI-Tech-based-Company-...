import { useEffect } from "react";
import { Link } from "wouter";

export default function Healthcare() {
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
          <i className="fas fa-heartbeat floating-icon"></i>
          <i className="fas fa-user-md floating-icon"></i>
          <i className="fas fa-hospital floating-icon"></i>
          <i className="fas fa-stethoscope floating-icon"></i>
          <i className="fas fa-pills floating-icon"></i>
        </div>
        
        <div className="service-hero-content">
          <h1 data-aos="fade-up">Healthcare Technology Solutions</h1>
          <p data-aos="fade-up" data-aos-delay="200">Revolutionizing healthcare with innovative technology solutions for better patient outcomes</p>
          <Link href="/#contact" className="hero-cta-btn" data-aos="fade-up" data-aos-delay="400">Get Started Today</Link>
        </div>
      </section>

      {/* Revolutionizing Healthcare */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Revolutionizing Healthcare with Technology</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>The healthcare industry is experiencing a digital transformation that's improving patient care, reducing costs, and enhancing operational efficiency. Our comprehensive technology solutions enable healthcare providers to deliver superior patient experiences while streamlining administrative processes and ensuring compliance with regulatory requirements.</p>
              
              <p>From electronic health records and telemedicine platforms to AI-powered diagnostics and IoT-enabled medical devices, we're helping healthcare organizations leverage technology to provide better care, improve patient outcomes, and optimize their operations for the digital age.</p>
            </div>
            
            <div className="about-stats" data-aos="fade-left">
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">Faster Diagnosis</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-label">Reduced Errors</div>
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
            <h2>Healthcare Technologies</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-card" data-aos="fade-up" data-aos-delay="100">
              <div className="tech-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>AI Diagnostics</h4>
              <p>Machine learning algorithms for accurate medical diagnosis and treatment recommendations.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="200">
              <div className="tech-icon">
                <i className="fas fa-video"></i>
              </div>
              <h4>Telemedicine</h4>
              <p>Remote consultation platforms for accessible healthcare delivery and patient monitoring.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="300">
              <div className="tech-icon">
                <i className="fas fa-file-medical"></i>
              </div>
              <h4>Electronic Health Records</h4>
              <p>Digital patient records systems for seamless information sharing and care coordination.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="400">
              <div className="tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>mHealth Apps</h4>
              <p>Mobile health applications for patient engagement and health monitoring.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="500">
              <div className="tech-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h4>IoT Medical Devices</h4>
              <p>Connected medical equipment for real-time patient monitoring and data collection.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="600">
              <div className="tech-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Healthcare Security</h4>
              <p>Advanced cybersecurity solutions to protect sensitive patient data and medical records.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="700">
              <div className="tech-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Healthcare Analytics</h4>
              <p>Data analytics platforms for clinical insights and operational optimization.</p>
            </div>
            
            <div className="tech-card" data-aos="fade-up" data-aos-delay="800">
              <div className="tech-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h4>Cloud Infrastructure</h4>
              <p>Secure cloud solutions for healthcare data storage and application hosting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Healthcare Applications</h2>
          </div>
          
          <div className="service-benefits">
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-hospital-alt"></i>
              </div>
              <h4>Hospital Management</h4>
              <p>Comprehensive systems for managing hospital operations, patient flow, and resource allocation efficiently.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4>Patient Monitoring</h4>
              <p>Real-time monitoring systems for tracking patient vital signs and health metrics continuously.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-pills"></i>
              </div>
              <h4>Pharmacy Management</h4>
              <p>Automated pharmacy systems for medication management, inventory control, and prescription processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Impact */}
      <section className="service-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Technology Impact on Healthcare</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <p>Technology is transforming healthcare delivery by enabling personalized medicine, improving diagnostic accuracy, and enhancing patient engagement. Our solutions help healthcare providers deliver evidence-based care while reducing costs and improving operational efficiency.</p>
              
              <p>The integration of AI, IoT, and cloud technologies in healthcare is enabling predictive analytics, remote patient monitoring, and personalized treatment plans that improve patient outcomes and reduce healthcare costs significantly.</p>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <h4>Patient Experience</h4>
                <p>Enhanced patient satisfaction through streamlined processes and personalized care delivery.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Operational Efficiency</h4>
                <p>Improved workflow automation and resource optimization for better healthcare delivery.</p>
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
                <h4 className="timeline-title">Regional Hospital Network</h4>
                <p className="timeline-desc">Implemented comprehensive EHR system across 15 hospitals, resulting in 50% reduction in administrative costs and 30% improvement in patient satisfaction scores.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">Telemedicine Platform</h4>
                <p className="timeline-desc">Deployed telehealth solution for rural healthcare access, serving 10,000+ patients and reducing travel time by 80% for routine consultations.</p>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <h4 className="timeline-title">AI Diagnostic Assistant</h4>
                <p className="timeline-desc">Launched AI-powered diagnostic assistance system across 20 medical centers, improving diagnostic accuracy by 35% and reducing diagnosis time by 60%.</p>
              </div>
            </div>
            
            <div className="history-stats" data-aos="fade-left">
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="history-stat-number">50K+</div>
                <div className="history-stat-label">Patients Served</div>
              </div>
              
              <div className="history-stat">
                <div className="history-stat-icon">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="history-stat-number">100+</div>
                <div className="history-stat-label">Healthcare Facilities</div>
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
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>HIPAA Compliance</h4>
              <p>Ensure full compliance with healthcare regulations and maintain the highest standards of patient data protection.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h4>Data Encryption</h4>
              <p>Advanced encryption protocols to secure patient information and medical records across all systems and platforms.</p>
            </div>
            
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h4>Audit Trails</h4>
              <p>Comprehensive logging and monitoring systems for complete audit trails and regulatory compliance reporting.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback-section">
  <div className="section-header">
    <h2>Customer Feedback</h2>
    <p>What our clients say about our Healthcare Solutions</p>
  </div>
  <div className="feedback-slider">
    <div className="feedback-card active">
      <p>“Revolutionized our hospital workflows. Very efficient.”</p>
      <h4>Dr. Anita Sharma</h4>
      <span>Chief Medical Officer</span>
    </div>
    <div className="feedback-card inactive">
      <p>“Supportive team and impressive AI integration.”</p>
      <h4>Rajiv Mehta</h4>
      <span>IT Head, City Care Hospital</span>
    </div>
    <div className="feedback-card inactive">
      <p>“Seamless digital transition in record time.”</p>
      <h4>Sunita Rao</h4>
      <span>Healthcare Administrator</span>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 data-aos="fade-up">Ready to Transform Healthcare with Technology?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Contact us today to discuss how our healthcare technology solutions can improve patient outcomes</p>
          <Link href="/#contact" className="cta-btn" data-aos="fade-up" data-aos-delay="400">Transform Healthcare</Link>
        </div>
      </section>
    </div>
  );
}
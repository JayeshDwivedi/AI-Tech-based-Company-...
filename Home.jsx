import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

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
  }, []);

const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.service || !formData.message) {
    alert('Please fill in all required fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const formPayload = new FormData();
  formPayload.append('name', formData.name);
  formPayload.append('email', formData.email);
  formPayload.append('phone', formData.phone);
  formPayload.append('service', formData.service);
  formPayload.append('message', formData.message);

  fetch("http://localhost/ReactConvert/contact_form.php", {
    method: "POST",
    body: formPayload
  })
  .then(response => response.text())
  .then(result => {
    alert(result);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  })
  .catch(error => {
    alert("Error sending message. Please try again.");
    console.error("Form submit error:", error);
  });
};


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        {/* hero page */}
<section className="hero" id="home">
  <div className="floating-icons">
    <i className="fas fa-robot floating-icon"></i>
    <i className="fas fa-network-wired floating-icon"></i>
    <i className="fas fa-shield-alt floating-icon"></i>
    <i className="fas fa-server floating-icon"></i>
    <i className="fas fa-cogs floating-icon"></i>
  </div>

  <div className="hero-content">
    <h1 data-aos="fade-up">Welcome to Soltech TechServices Pvt Ltd</h1>
    <p data-aos="fade-up" data-aos-delay="200">
      Delivering cutting-edge technology solutions for the modern world
    </p>
    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
      <a
        href="#services"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Our Services
      </a>
      <a
        href="#contact"
        className="btn btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get in Touch
      </a>
    </div>
  </div>
</section>

<section className="about-section" id="about">
  <div className="container">
    <div className="about-header" data-aos="fade-up">
      <h2>About Soltech TechServices Company</h2>
    </div>

    <div className="about-content">
      <div className="about-text" data-aos="fade-right">
        <p>
          At Soltech TechServices Company, we are passionate about
          transforming businesses through innovative technology solutions.
          With years of experience in the technology sector, we specialize
          in delivering comprehensive services that drive digital
          transformation and operational excellence.
        </p>

        <p>
          Our team of expert engineers and consultants work closely with
          clients to understand their unique challenges and deliver tailored
          solutions that exceed expectations. We believe in building
          long-term partnerships and providing ongoing support to ensure our
          clients' success.
        </p>
      </div>

      <div className="about-stats" data-aos="fade-left">
        <div className="stat-card">
          <div className="stat-number">7+</div>
          <div className="stat-label">Years of Excellence</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">25+</div>
          <div className="stat-label">Countries Served Worldwide</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">8</div>
          <div className="stat-label">Core Services</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Technology Services</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>Artificial Intelligence</h3>
              <p>Harness the power of AI to automate processes, gain insights, and drive innovation with cutting-edge AI implementation.</p>
              <Link href="/ai-services" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Internet of Things</h3>
              <p>Connect and manage your devices with our comprehensive IoT solutions for smart and efficient operations.</p>
              <Link href="/iot-solutions" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Automation</h3>
              <p>Streamline your workflows with intelligent automation solutions that increase efficiency and reduce costs.</p>
              <Link href="/automation" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>IT Infrastructure</h3>
              <p>Build robust and scalable IT infrastructure that supports your business growth and digital transformation.</p>
              <Link href="/it-infrastructure" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="500">
              <div className="service-icon">
                <i className="fas fa-broadcast-tower"></i>
              </div>
              <h3>Telecommunication</h3>
              <p>Advanced telecommunication solutions for seamless connectivity and efficient communication infrastructure.</p>
              <Link href="/telecommunication" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="600">
              <div className="service-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Surveillance</h3>
              <p>Comprehensive surveillance systems to protect your assets and ensure security with cutting-edge monitoring.</p>
              <Link href="/surveillance" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="700">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cyber Security</h3>
              <p>Protect your digital assets with our advanced cybersecurity solutions and comprehensive risk management.</p>
              <Link href="/cybersecurity" className="read-more-btn">Read More</Link>
            </div>
            
            <div className="service-card" data-aos="fade-up" data-aos-delay="800">
              <div className="service-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Industrial Automation</h3>
              <p>Optimize your industrial processes with cutting-edge automation technologies and smart manufacturing solutions.</p>
              <Link href="/industrial-automation" className="read-more-btn">Read More</Link>
            </div>
          </div>
        </div>
      </section>
     {/*our process*/}
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Work Process</h2>
        </div>

        <div className="process-steps">
          <div className="process-step" data-aos="fade-right">
            <div className="step-number">01</div>
            <div className="step-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Consultancy</h3>
            <p>
              We begin by understanding your business needs, challenges, and
              objectives through detailed consultations with your team.
            </p>
          </div>

          <div className="process-step" data-aos="fade-left">
            <div className="step-number">02</div>
            <div className="step-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Assessment</h3>
            <p>
              Our experts conduct thorough assessments of your current systems
              and infrastructure to identify opportunities for improvement.
            </p>
          </div>

          <div className="process-step" data-aos="fade-right">
            <div className="step-number">03</div>
            <div className="step-icon">
              <i className="fas fa-drafting-compass"></i>
            </div>
            <h3>Design</h3>
            <p>
              We create detailed design specifications and blueprints tailored
              to your specific requirements and business goals.
            </p>
          </div>

          <div className="process-step" data-aos="fade-left">
            <div className="step-number">04</div>
            <div className="step-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Implementation</h3>
            <p>
              Our skilled team implements the solution with precision, ensuring
              minimal disruption to your operations and seamless integration.
            </p>
          </div>
        </div>
      </div>
    </section>
{/* History Section */}
<section className="history-section" id="history">
  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <h2>Our History</h2>
    </div>

    <div className="history-content">
      <div className="timeline" data-aos="fade-right">
        <div className="timeline-item">
          <div className="timeline-year">2018</div>
          <h4 className="timeline-title">Company Founded</h4>
          <p className="timeline-desc">
            Soltech TechServices Company was established with a vision to revolutionize technology solutions for businesses worldwide.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2019</div>
          <h4 className="timeline-title">First Major Project</h4>
          <p className="timeline-desc">
            Successfully completed our first large-scale industrial automation project, setting the foundation for our expertise.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2021</div>
          <h4 className="timeline-title">AI Division Launch</h4>
          <p className="timeline-desc">
            Expanded our services to include artificial intelligence solutions, becoming pioneers in AI-driven automation.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <h4 className="timeline-title">Global Expansion</h4>
          <p className="timeline-desc">
            Reached international markets, serving clients across 25+ countries worldwide with our comprehensive technology solutions.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <h4 className="timeline-title">Delivered 100+ Projects</h4>
          <p className="timeline-desc">
            Successfully completed over 100 technology transformation projects, establishing our reputation as a trusted partner in digital innovation.
          </p>
        </div>
      </div>

      <div className="history-stats" data-aos="fade-left">
        <div className="history-stat">
          <div className="history-stat-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="history-stat-number">7+ Years</div>
          <div className="history-stat-label">of Excellence</div>
        </div>

        <div className="history-stat">
          <div className="history-stat-icon">
            <i className="fas fa-globe"></i>
          </div>
          <div className="history-stat-number">25+ Countries</div>
          <div className="history-stat-label">Served Worldwide</div>
        </div>

        <div className="history-stat">
          <div className="history-stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="history-stat-number">5+ Industries</div>
          <div className="history-stat-label">Specialized Solutions</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Future Vision Section */}
      <section className="vision-section" id="vision">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Future Vision</h2>
          </div>
          
          <div className="vision-content">
            <div className="vision-text" data-aos="fade-right">
              <h3>Shaping Tomorrow's Technology Landscape</h3>
              <p>At Soltech TechServices Company, we envision a future where technology seamlessly integrates with human potential to unlock new possibilities. Our roadmap focuses on emerging technologies that will define the next decade of digital transformation.</p>
              
              <h4>2030 Goals</h4>
              <ul className="vision-points">
                <li>
                  <i className="fas fa-check"></i>
                  <strong>Innovation Leadership:</strong> Leading the industry in breakthrough technologies including quantum computing, advanced AI, and next-generation automation.
                </li>
                <li>
                  <i className="fas fa-leaf"></i>
                  <strong>Sustainable Solutions:</strong> Developing eco-friendly technology solutions that reduce environmental impact while maximizing efficiency.
                </li>
                <li>
                  <i className="fas fa-globe"></i>
                  <strong>Global Impact:</strong> Expanding our reach to transform businesses worldwide with cutting-edge technology solutions and strategic partnerships.
                </li>
              </ul>
            </div>
            
            <div className="vision-cards" data-aos="fade-left">
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Next Gen AI</h4>
                <p>Develop autonomous AI systems that can adapt and learn independently across multiple industries.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-atom"></i>
                </div>
                <h4>Quantum Computing</h4>
                <p>Integrate quantum computing into mainstream business applications for unprecedented processing power.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-wifi"></i>
                </div>
                <h4>5G Networks</h4>
                <p>Pioneer the development of 5G telecommunication infrastructure for ultra-fast connectivity.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-card-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <h4>Zero Carbon</h4>
                <p>Achieve carbon-neutral operations across all our technology solutions and business practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Contact Us</h2>
          </div>
          
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
              <h3>Get in Touch</h3>
              <p>Ready to transform your business with cutting-edge technology? Contact us today to discuss your project requirements.</p>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Address</h4>
                  <p>123 Technology Street<br/>Innovation District<br/>Tech City, TC 12345</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>info@soltechservices.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-item-content">
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://in.linkedin.com/company/soltechtechservices" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="https://x.com/soltechtechservices" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://m.facebook.com/soltechtechservices/" className="social-link"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/soltechtechservices/" className="social-link"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            
            <div className="contact-form" data-aos="fade-left">
              <form onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <select 
                    name="service"
                    required 
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="iot">Internet of Things</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="telecom">Telecommunication</option>
                    <option value="surveillance">Surveillance Systems</option>
                    <option value="automation">Automation Services</option>
                    <option value="industrial">Industrial Automation</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="floating-contact" onClick={scrollToContact}>
        <i className="fas fa-comment"></i>
      </div>
    </div>
  );
}
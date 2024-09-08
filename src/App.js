import React, { useState } from 'react';
import './App.css';

// Modal Component
function Modal({ src, alt, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

const photos = [
  { id: 1, src: '/images/NOLA/DSCF5413.jpg', alt: 'New Orleans photo 1', category: 'New Orleans' },
  { id: 2, src: '/images/NOLA/DSCF5426.jpg', alt: 'New Orleans photo 2', category: 'New Orleans' },
  { id: 3, src: '/images/NOLA/DSCF5437.jpg', alt: 'New Orleans photo 3', category: 'New Orleans' },
  { id: 4, src: '/images/NOLA/DSCF5441.jpg', alt: 'New Orleans photo 4', category: 'New Orleans' },
  { id: 5, src: '/images/NOLA/DSCF5475.jpg', alt: 'New Orleans photo 5', category: 'New Orleans' },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showContact, setShowContact] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <div>
            <h1>Ankit Gandhi</h1>
            <p>Risk Analyst</p>
            <p>Lithic (Privacy.com)</p>
            <p>Passaic, New Jersey</p>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/ankit-g/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ankitgandhi99/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>

      <nav>
        <button 
          onClick={() => setActiveSection('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button 
          onClick={() => setActiveSection('photography')}
          className={activeSection === 'photography' ? 'active' : ''}
        >
          Photography
        </button>
      </nav>

      {activeSection === 'about' && (
        <main>
          <section>
            <h2>About</h2>
            <p>Experienced Risk Analyst with a strong background in fraud prevention, data analysis, and operational efficiency. Skilled in SQL, Python, and various data visualization tools.</p>
          </section>

          <section>
            <h2>Work Experience</h2>
            <div className="job">
              <h3>Risk Analyst</h3>
              <p>Lithic (Privacy.com) | January 2024 - Present</p>
              <p>Led fraud prevention efforts, improved user experience, and mentored team members in risk assessment techniques.</p>
            </div>
            <div className="job">
              <h3>Senior Operations Associate</h3>
              <p>Lithic (Privacy.com) | February 2023 - January 2024</p>
              <p>Directed high-volume recovery sessions, cross-collaborated on projects to improve user onboarding, and analyzed flagged account signups.</p>
            </div>
            <div className="job">
              <h3>Operations Associate</h3>
              <p>Lithic (Privacy.com) | April 2022 - February 2023</p>
              <p>Developed monitoring queues with SQL and produced training documentation for Risk Consumer Operations and Customer Experience.</p>
            </div>
            <div className="job">
              <h3>Junior Operations Associate</h3>
              <p>Lithic (Privacy.com) | June 2021 - April 2022</p>
              <p>Overhauled data dashboard for failed-transaction information and administered customer-focused queues.</p>
            </div>
          </section>

          <section>
            <h2>Skills</h2>
            <p>SQL, PostgreSQL, Snowflake, Python, JavaScript, Microsoft Office, JIRA, Retool, Metabase, Notion, Onfido, Looker</p>
          </section>
        </main>
      )}

      {activeSection === 'photography' && (
        <main>
          <h2>Photography</h2>
          <div className="photo-categories">
            {['All', 'Nature', 'Urban', 'Portrait', 'New Orleans'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="photo-grid">
            {filteredPhotos.map(photo => (
              <img key={photo.id} src={photo.src} alt={photo.alt} onClick={() => openModal(photo)} />
            ))}
          </div>
        </main>
      )}

      {selectedImage && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
      
      <footer>
        <button 
              className="contact-button"
              onClick={() => setShowContact(!showContact)}
            >
              Contact
        </button>
            {showContact && (
              <div className="contact-info">
                <p>You can reach me at:</p>
                <a href="mailto:ankitgandhi125@gmail.com">ankitgandhi125@gmail.com</a>
              </div>
            )}
      </footer>

    </div>
  );
}

export default App;

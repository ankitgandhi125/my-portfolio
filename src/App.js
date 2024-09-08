import React, { useState } from 'react';
import './App.css';

const photos = [
  { id: 1, src: '/placeholder-1.jpg', alt: 'Nature landscape 1', category: 'Nature' },
  { id: 2, src: '/placeholder-2.jpg', alt: 'Urban cityscape 1', category: 'Urban' },
  { id: 3, src: '/placeholder-3.jpg', alt: 'Portrait of a person 1', category: 'Portrait' },
  { id: 4, src: '/placeholder-4.jpg', alt: 'Nature landscape 2', category: 'Nature' },
  { id: 5, src: '/placeholder-5.jpg', alt: 'Urban cityscape 2', category: 'Urban' },
  { id: 6, src: '/placeholder-6.jpg', alt: 'Portrait of a person 2', category: 'Portrait' },
  { id: 7, src: '/placeholder-7.jpg', alt: 'Nature landscape 3', category: 'Nature' },
  { id: 8, src: '/placeholder-8.jpg', alt: 'Urban cityscape 3', category: 'Urban' },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showContact, setShowContact] = useState(false);

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="container">
      <header>
        <h1>Ankit Gandhi</h1>
        <p>Risk Analyst</p>
        <p>Lithic (Privacy.com)</p>
        <p>Passaic, New Jersey</p>
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
            {['All', 'Nature', 'Urban', 'Portrait'].map(category => (
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
              <img key={photo.id} src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </main>
      )}

      <footer>
        <button 
          className="contact-button"
          onClick={() => setShowContact(!showContact)}
        >
          Contact
        </button>
        {showContact && (
          <div className="contact-info">
            {/* Add contact information here */}
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
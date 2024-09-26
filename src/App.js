import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './App.css';

// Modal Component
function Modal({ src, alt, type, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {type === 'video' ? (
          <video 
            src={src} 
            alt={alt} 
            controls 
            autoPlay 
            loop 
            playsInline
          />
        ) : (
          <img src={src} alt={alt} />
        )}
      </div>
    </div>
  );
}

const photos = [
// Mexico
{ id: 1, src: 'https://media.ankitgandhi.com/images/MEXICO/IMG_3594-1.mp4', alt: 'Mexico video 1', category: 'Mexico', type: 'video' },
{ id: 2, src: 'https://media.ankitgandhi.com/images/MEXICO/IMG_3598.MOV', alt: 'Mexico video 2', category: 'Mexico', type: 'video' },
{ id: 3, src: 'https://media.ankitgandhi.com/images/MEXICO/IMG_3648.MOV', alt: 'Mexico video 3', category: 'Mexico', type: 'video' },

// New Jersey
{ id: 4, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/1635EED8-9174-40FE-AF58-BF2F64B29880-32582-00000449132C1DED.jpg', alt: 'New Jersey photo 1', category: 'New Jersey', type: 'image' },
{ id: 5, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/A7FB9069-F433-48EF-AA70-C4B8AF9D9C7C-32582-00000448C9E53494.jpg', alt: 'New Jersey photo 2', category: 'New Jersey', type: 'image' },
{ id: 6, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/DSCF3036.jpg', alt: 'New Jersey photo 3', category: 'New Jersey', type: 'image' },
{ id: 7, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/DSCF3328.jpg', alt: 'New Jersey photo 4', category: 'New Jersey', type: 'image' },
{ id: 8, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/DSCF4738.jpg', alt: 'New Jersey photo 5', category: 'New Jersey', type: 'image' },
{ id: 9, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/DSCF5758.jpg', alt: 'New Jersey photo 6', category: 'New Jersey', type: 'image' },
{ id: 10, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/DSCF6040.jpg', alt: 'New Jersey photo 7', category: 'New Jersey', type: 'image' },
{ id: 11, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_0555.jpeg', alt: 'New Jersey photo 8', category: 'New Jersey', type: 'image' },
{ id: 12, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_0556.jpeg', alt: 'New Jersey photo 9', category: 'New Jersey', type: 'image' },
{ id: 13, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_1982.MOV', alt: 'New Jersey video 1', category: 'New Jersey', type: 'video' },
{ id: 14, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_5784.JPG', alt: 'New Jersey photo 10', category: 'New Jersey', type: 'image' },
{ id: 15, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_5789.JPG', alt: 'New Jersey photo 11', category: 'New Jersey', type: 'image' },
{ id: 16, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_5790.JPG', alt: 'New Jersey photo 12', category: 'New Jersey', type: 'image' },
{ id: 17, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/IMG_5792.JPG', alt: 'New Jersey photo 13', category: 'New Jersey', type: 'image' },
{ id: 18, src: 'https://media.ankitgandhi.com/images/NEW_JERSEY/RenderedVideo.MOV', alt: 'New Jersey video 2', category: 'New Jersey', type: 'video' },

// New York
{ id: 19, src: 'https://media.ankitgandhi.com/images/NEW_YORK/DSCF4613.jpg', alt: 'New York photo 1', category: 'New York', type: 'image' },
{ id: 20, src: 'https://media.ankitgandhi.com/images/NEW_YORK/DSCF4653.jpg', alt: 'New York photo 2', category: 'New York', type: 'image' },
{ id: 21, src: 'https://media.ankitgandhi.com/images/NEW_YORK/DSCF4656.jpg', alt: 'New York photo 3', category: 'New York', type: 'image' },
{ id: 22, src: 'https://media.ankitgandhi.com/images/NEW_YORK/F01BC98B-2AAC-488E-9EF9-4B01F1779A8C-1.mov', alt: 'New York video 1', category: 'New York', type: 'video' },
{ id: 23, src: 'https://media.ankitgandhi.com/images/NEW_YORK/IMG_0240.MOV', alt: 'New York video 2', category: 'New York', type: 'video' },
{ id: 24, src: 'https://media.ankitgandhi.com/images/NEW_YORK/IMG_3157.MOV', alt: 'New York video 3', category: 'New York', type: 'video' },
{ id: 25, src: 'https://media.ankitgandhi.com/images/NEW_YORK/video-output-1C0762B6-D06E-43FE-9E10-93091D5DD5FB.mov', alt: 'New York video 4', category: 'New York', type: 'video' },

// New Orleans (NOLA)
{ id: 26, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5366.jpg', alt: 'New Orleans photo 1', category: 'New Orleans', type: 'image' },
{ id: 27, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5379.jpg', alt: 'New Orleans photo 2', category: 'New Orleans', type: 'image' },
{ id: 28, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5413.jpg', alt: 'New Orleans photo 3', category: 'New Orleans', type: 'image' },
{ id: 29, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5426.jpg', alt: 'New Orleans photo 4', category: 'New Orleans', type: 'image' },
{ id: 30, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5437.jpg', alt: 'New Orleans photo 5', category: 'New Orleans', type: 'image' },
{ id: 31, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5441.jpg', alt: 'New Orleans photo 6', category: 'New Orleans', type: 'image' },
{ id: 32, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5475.jpg', alt: 'New Orleans photo 7', category: 'New Orleans', type: 'image' },
{ id: 33, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5480.jpg', alt: 'New Orleans photo 8', category: 'New Orleans', type: 'image' },
{ id: 34, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5494.jpg', alt: 'New Orleans photo 9', category: 'New Orleans', type: 'image' },
{ id: 35, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5496.jpg', alt: 'New Orleans photo 10', category: 'New Orleans', type: 'image' },
{ id: 36, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5512.jpg', alt: 'New Orleans photo 11', category: 'New Orleans', type: 'image' },
{ id: 37, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5523.jpg', alt: 'New Orleans photo 12', category: 'New Orleans', type: 'image' },
{ id: 38, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5526.jpg', alt: 'New Orleans photo 13', category: 'New Orleans', type: 'image' },
{ id: 39, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5536.jpg', alt: 'New Orleans photo 14', category: 'New Orleans', type: 'image' },
{ id: 40, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5538.jpg', alt: 'New Orleans photo 15', category: 'New Orleans', type: 'image' },
{ id: 41, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5549.jpg', alt: 'New Orleans photo 16', category: 'New Orleans', type: 'image' },
{ id: 42, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5562.jpg', alt: 'New Orleans photo 17', category: 'New Orleans', type: 'image' },
{ id: 43, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5586.jpg', alt: 'New Orleans photo 18', category: 'New Orleans', type: 'image' },
{ id: 44, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5587.jpg', alt: 'New Orleans photo 19', category: 'New Orleans', type: 'image' },
{ id: 45, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5608.jpg', alt: 'New Orleans photo 20', category: 'New Orleans', type: 'image' },
{ id: 46, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5653.jpg', alt: 'New Orleans photo 21', category: 'New Orleans', type: 'image' },
{ id: 47, src: 'https://media.ankitgandhi.com/images/NOLA/DSCF5678.jpg', alt: 'New Orleans photo 22', category: 'New Orleans', type: 'image' },
{ id: 48, src: 'https://media.ankitgandhi.com/images/NOLA/IMG_3064.MOV', alt: 'New Orleans video 1', category: 'New Orleans', type: 'video' },
{ id: 49, src: 'https://media.ankitgandhi.com/images/NOLA/IMG_3113.MOV', alt: 'New Orleans video 2', category: 'New Orleans', type: 'video' },

// San Francisco
{ id: 50, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660015.jpg', alt: 'San Francisco photo 1', category: 'San Francisco', type: 'image' },
{ id: 51, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660017.jpg', alt: 'San Francisco photo 2', category: 'San Francisco', type: 'image' },
{ id: 52, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660019.jpg', alt: 'San Francisco photo 3', category: 'San Francisco', type: 'image' },
{ id: 53, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660023.jpg', alt: 'San Francisco photo 4', category: 'San Francisco', type: 'image' },
{ id: 54, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660028.jpg', alt: 'San Francisco photo 5', category: 'San Francisco', type: 'image' },
{ id: 55, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660031.jpg', alt: 'San Francisco photo 6', category: 'San Francisco', type: 'image' },
{ id: 56, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067660033.jpg', alt: 'San Francisco photo 7', category: 'San Francisco', type: 'image' },
{ id: 57, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067670004.jpg', alt: 'San Francisco photo 8', category: 'San Francisco', type: 'image' },
{ id: 58, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067670018.jpg', alt: 'San Francisco photo 9', category: 'San Francisco', type: 'image' },
{ id: 59, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067670034.jpg', alt: 'San Francisco photo 10', category: 'San Francisco', type: 'image' },
{ id: 60, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067680016.jpg', alt: 'San Francisco photo 11', category: 'San Francisco', type: 'image' },
{ id: 61, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067680036.jpg', alt: 'San Francisco photo 12', category: 'San Francisco', type: 'image' },
{ id: 62, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067690005.jpg', alt: 'San Francisco photo 13', category: 'San Francisco', type: 'image' },
{ id: 63, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067690010.jpg', alt: 'San Francisco photo 14', category: 'San Francisco', type: 'image' },
{ id: 64, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067690014.jpg', alt: 'San Francisco photo 15', category: 'San Francisco', type: 'image' },
{ id: 65, src: 'https://media.ankitgandhi.com/images/SAN_FRANSISCO/000067690024.jpg', alt: 'San Francisco photo 16', category: 'San Francisco', type: 'image' },

// South Africa
{ id: 66, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5076.MOV', alt: 'South Africa video 1', category: 'South Africa', type: 'video' },
{ id: 67, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5210.mov', alt: 'South Africa video 2', category: 'South Africa', type: 'video' },
{ id: 68, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5251.MOV', alt: 'South Africa video 3', category: 'South Africa', type: 'video' },
{ id: 69, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5298.MOV', alt: 'South Africa video 4', category: 'South Africa', type: 'video' },
{ id: 70, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5302.MOV', alt: 'South Africa video 5', category: 'South Africa', type: 'video' },
{ id: 71, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5326.MOV', alt: 'South Africa video 6', category: 'South Africa', type: 'video' },
{ id: 72, src: 'https://media.ankitgandhi.com/images/SOUTH_AFRICA/IMG_5353.MOV', alt: 'South Africa video 7', category: 'South Africa', type: 'video' },

// Washington DC
{ id: 73, src: 'https://media.ankitgandhi.com/images/WASHINGTON_DC/DSCF4909.jpg', alt: 'Washington DC photo 1', category: 'Washington DC', type: 'image' },
{ id: 74, src: 'https://media.ankitgandhi.com/images/WASHINGTON_DC/IMG_0759.MOV', alt: 'Washington DC video 1', category: 'Washington DC', type: 'video' },
{ id: 75, src: 'https://media.ankitgandhi.com/images/WASHINGTON_DC/IMG_0765.MOV', alt: 'Washington DC video 2', category: 'Washington DC', type: 'video' },
{ id: 76, src: 'https://media.ankitgandhi.com/images/WASHINGTON_DC/Sampha.mp4', alt: 'Washington DC video 3', category: 'Washington DC', type: 'video' },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showContact, setShowContact] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

        {activeSection === 'photography' && (
        <main>
          <h2>Photography</h2>
          <div className="photo-categories">
            {['All', 'Mexico', 'New Jersey', 'New York', 'New Orleans', 'San Francisco', 'South Africa', 'Washington DC'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredPhotos.map(media => (
              <div key={media.id} className="media-item" onClick={() => openModal(media)}>
                {media.type === 'video' ? (
                  <>
                    <video
                      src={media.src}
                      alt={media.alt}
                      muted
                      loop
                      playsInline
                    />
                    <div className="video-overlay">
                      <span>▶</span>
                    </div>
                  </>
                ) : (
                  <img src={media.src} alt={media.alt} />
                )}
              </div>
            ))}
          </Masonry>
        </main>
      )}

        {activeSection === 'photography' && (
        <main>
          <h2>Photography</h2>
          <div className="photo-categories">
            {['All', 'Mexico', 'New Jersey', 'New York', 'New Orleans', 'San Francisco', 'South Africa', 'Washington DC'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredPhotos.map(media => (
              <div key={media.id} className="media-item" onClick={() => openModal(media)}>
                {media.type === 'video' ? (
                  <>
                    <video
                      src={media.src}
                      alt={media.alt}
                      muted
                      loop
                      playsInline
                    />
                    <div className="video-overlay">
                      <span>▶</span>
                    </div>
                  </>
                ) : (
                  <img src={media.src} alt={media.alt} />
                )}
              </div>
            ))}
          </Masonry>
        </main>
      )}

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
            {['All', 'Mexico', 'New Jersey', 'New York', 'New Orleans', 'San Francisco', 'South Africa', 'Washington DC'].map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            ))}
          </div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredPhotos.map(media => (
              <div key={media.id} className="media-item" onClick={() => openModal(media)}>
                {media.type === 'video' ? (
                  <>
                    <video
                      src={media.src}
                      alt={media.alt}
                      muted
                      loop
                      playsInline
                    />
                    <div className="video-overlay">
                      <span>▶</span>
                    </div>
                  </>
                ) : (
                  <img src={media.src} alt={media.alt} />
                )}
              </div>
            ))}
          </Masonry>
        </main>
      )}

      {selectedMedia && (
        <Modal
          src={selectedMedia.src}
          alt={selectedMedia.alt}
          type={selectedMedia.type}
          onClose={closeModal}
        />
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
            <p>You can reach me at:</p>
            <a href="mailto:ankitgandhi125@gmail.com">ankitgandhi125@gmail.com</a>
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
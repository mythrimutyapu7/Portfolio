import styles from './Certifications.module.css';
import useReveal from '../../hooks/useReveal';

const certifications = [
  {
    title: 'Diamond Certified Smart Coder',
    issuer: 'Smart Interviews',
    description: 'Awarded for demonstrating advanced problem-solving capabilities, algorithm design, and coding proficiency.',
  },
  {
    title: 'Java Fundamentals Certification',
    issuer: 'Infosys Springboard',
    description: 'Comprehensive certification covering core Java concepts, OOP paradigms, and standard data structures.',
  },
  {
    title: 'Web Development Certification',
    issuer: 'Infosys Springboard',
    description: 'Full-stack training covering frontend technologies, database persistence, and building responsive layouts.',
  },
];

const Certifications = () => {
  useReveal();

  return (
    <section id="certifications" className={`${styles.certifications} reveal`}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Certifications & <span>Achievements</span>
          </h2>
          <p>
            Recognitions, training programs, and competitive achievements.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {certifications.map((cert, index) => (
            <div key={index} className={`${styles.card} reveal delay-${index + 1}`}>
              {/* BADGE ICON */}
              <div className={styles.badgeWrapper}>
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>

              <h3>{cert.title}</h3>
              <h4 className={styles.issuer}>{cert.issuer}</h4>
              <p className={styles.description}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

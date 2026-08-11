import styles from './Experience.module.css';
import useReveal from '../../hooks/useReveal';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Infosys Springboard',
    duration: 'Dec 2025 – Feb 2026',
    points: [
      'Engineered a full-stack application utilizing Role-Based Access Control (RBAC) to automate event management logistics for multiple institutions.',
      'Architected scalable RESTful APIs and analytics dashboards to handle high-concurrency registrations, optimizing participant data processing.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    role: 'Student Volunteer',
    company: 'Computer Society of India (CSI) Student Chapter',
    duration: '2024 – Present',
    points: [
      'Organized and coordinated technical workshops, coding contests, and campus hackathons to promote student engagement.',
      'Collaborated with university administration and student teams to handle logistics, publicity, and event management.',
    ],
    tech: ['Event Management', 'Publicity', 'Team Collaboration'],
  },
];

const Experience = () => {
  useReveal();

  return (
    <section id="experience" className={`${styles.experience} reveal`}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Work <span>Experience</span>
          </h2>
          <p>
            Professional internships and hands-on software engineering roles.
          </p>
        </div>

        {/* TIMELINE */}
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={`${styles.timelineItem} reveal delay-${idx + 1}`}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerCircle}></div>
                <div className={styles.markerLine}></div>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className={styles.point}>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

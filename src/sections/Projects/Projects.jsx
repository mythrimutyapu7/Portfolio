import styles from './Projects.module.css';
import useReveal from '../../hooks/useReveal';

const projects = [
  {
    title: 'Voyager',
    subtitle: 'Travel Planning Website',
    description:
      'A full-stack travel planning platform that helps users explore destinations, plan trips, and manage itineraries with a clean and intuitive UI.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB','Google Maps API'],
    github: 'https://github.com/mythrimutyapu7/VoyageR',
  },
  {
    title: 'EcoChase',
    subtitle: 'Eco-friendly E-commerce Application',
    description:
      'An e-commerce platform focused on sustainable products, featuring product listings, cart functionality, and a smooth shopping experience.',
    tech: ['React', 'Node.js', 'MongoDB','Express.js','Stripe API'],
    github: 'https://github.com/mythrimutyapu7/ECommerce',
  },
  {
    title: 'Certificate Management System',
    subtitle: 'OCR + Data Automation',
    description:
      'A system that extracts certificate details using OCR and automatically stores and segregates the data into Excel or Google Sheets.',
    tech: ['Python', 'OCR', 'Flask', 'Google Sheets API'],
    github: null, // ✅ no link
  },
  {
    title: 'Blog Application',
    subtitle: 'Content Publishing Platform',
    description:
      'A blog platform that allows users to create, edit, and publish posts with a clean editor and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB','Express.js'],
    github: 'https://github.com/mythrimutyapu7/BlogApplication',
  },
  {
    title: 'Social Media App',
    subtitle: 'Beginner Full-Stack Project',
    description:
      'A beginner-level social media application with authentication, posts, and basic interaction features.',
    tech: ['React', 'MongoDB', 'Node.js', 'Express.js'],
    github: 'https://github.com/mythrimutyapu7/socialmedia',
  },
  {
    title: 'Volunteer Management System',
    subtitle: 'Desktop Application',
    description:
      'A Java-based desktop application to manage volunteers, events, and assignments with database integration.',
    tech: ['Java AWT', 'MySQL'],
    github: null, // ✅ no link
  },
];


const Projects = () => {
  useReveal();

  return (
    <section id="projects" className={`${styles.projects} reveal`}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            A selection of projects showcasing my experience in full-stack
            development, machine learning, and problem-solving.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={`${styles.card} reveal`} key={index}>
              
              {/* CARD HEADER */}
              <div className={styles.cardHeader}>
                <div>
                  <h3>{project.title}</h3>
                  <span className={styles.subtitle}>{project.subtitle}</span>
                </div>

                {/* GitHub icon */}
                {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className={styles.github}
    aria-label="GitHub Repository"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.9-.39.98 0 1.97.13 2.9.39 2.22-1.49 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56 4.56-1.53 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  </a>
)}

              </div>

              <p className={styles.description}>{project.description}</p>

              {/* TECH STACK */}
              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

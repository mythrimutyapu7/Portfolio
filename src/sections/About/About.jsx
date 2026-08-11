import styles from './About.module.css';
import useReveal from '../../hooks/useReveal';

const About = () => {
  useReveal();

  return (
    <section id="about" className={`${styles.about} reveal`}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.text}>
          <h2>About Me</h2>

          <p className={styles.intro}>
            I’m <span>Mythri Mutyapu</span>, a Computer Science & Engineering undergraduate at <strong>VNR VJIET (Hyderabad)</strong> with a strong academic foundation and a passion for building next-generation applications.
          </p>

          <p>
            I specialize in full-stack development and modern AI pipelines, combining frameworks like <strong>React.js</strong> and <strong>FastAPI</strong> with <strong>LangChain</strong> and LLMs to create smart, data-driven systems.
          </p>

          <p>
            I actively engage in the developer community and code contests. I am a <strong>Diamond Certified Smart Coder</strong> and love building solutions that solve real problems.
          </p>

          <p>
            I’m driven by curiosity, engineering discipline, and the thrill of converting complex requirements into elegant code.
          </p>

          <a href="#contact" className={styles.cta}>
            Let’s build something together
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.cards}>
          <div className={`${styles.card} reveal delay-1`}>
            <h3>Full-Stack & AI Systems</h3>
            <p>
              Building intelligent end-to-end applications using React, FastAPI, Node.js, LangChain, and MongoDB.
            </p>
          </div>

          <div className={`${styles.card} reveal delay-2`}>
            <h3>Machine Learning & OCR</h3>
            <p>
              Experience training transformer models (LayoutLMv3) and building OCR pipelines (Tesseract.js).
            </p>
          </div>

          <div className={`${styles.card} reveal delay-3`}>
            <h3>Problem Solving & DSA</h3>
            <p>
              Strong command over Data Structures, OOP, and DBMS (MySQL/MongoDB). Diamond Certified Smart Coder.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

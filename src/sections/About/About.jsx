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
            I’m <span>Mythri Mutyapu</span>, a Computer Science undergraduate with
            strong interests in <strong>Full-Stack Development</strong>,
            <strong> Machine Learning</strong>, and
            <strong> problem-solving</strong>.
          </p>

          <p>
            I build clean, scalable web applications using the
            <strong> MERN stack</strong> and enjoy working across both frontend
            and backend systems.
          </p>

          <p>
            Alongside web development, I actively explore
            <strong> Machine Learning concepts</strong> and enjoy applying
            algorithms to real-world data.
          </p>

          <p>
            I’m driven by curiosity, continuous learning, and the challenge of
            building meaningful software solutions.
          </p>

          <a href="#contact" className={styles.cta}>
            Let’s build something together
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.cards}>
          <div className={`${styles.card} reveal delay-1`}>
            <h3>Full-Stack Development</h3>
            <p>
              Building end-to-end applications using React, Node.js, Express,
              MongoDB.
            </p>
          </div>

          <div className={`${styles.card} reveal delay-2`}>
            <h3>Machine Learning</h3>
            <p>
              Experience with ML fundamentals, preprocessing, and model training.
            </p>
          </div>

          <div className={`${styles.card} reveal delay-3`}>
            <h3>Problem Solving & DSA</h3>
            <p>
              Strong grasp of data structures, algorithms, and logical thinking.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

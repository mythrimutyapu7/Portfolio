import styles from './Hero.module.css';
import profileImg from '../../assets/images/image.png';
import useReveal from '../../hooks/useReveal';

const Hero = () => {
  useReveal();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gridBg}></div>

      {/* BACKGROUND TYPOGRAPHY */}
      <div className={styles.bgText}>
        <span className={styles.portfolio}>PORTFOLIO</span>
        <span className={styles.heroWord}>
          D&nbsp;E&nbsp;V&nbsp;E&nbsp;L&nbsp;O&nbsp;P&nbsp;E&nbsp;R
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.content}>
        {/* IMAGE */}
        <div className={`${styles.imageWrapper} reveal delay-1`}>
          <div className={styles.imageFrame}>
            <img src={profileImg} alt="Mythri Mutyapu" />
          </div>
        </div>

        {/* TEXT */}
        <div className={styles.text}>
          <h1 className="reveal">
            Hi, I’m <span>Mythri Mutyapu</span>
          </h1>

          <p className="reveal delay-1">
            Computer Science undergraduate crafting clean, scalable MERN
            applications and Machine Learning solutions.
          </p>

          <div className={`${styles.buttons} reveal delay-2`}>
            <a href="#projects">View Projects</a>
            <a href="#contact" className={styles.outline}>
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

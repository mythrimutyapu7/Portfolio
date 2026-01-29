import styles from './Skills.module.css';
import useReveal from '../../hooks/useReveal';
import SkillsBubble from './SkillsBubble';

const Skills = () => {
  useReveal();

  return (
    <section id="skills" className={`${styles.skills} reveal`}>

      {/* animated grid background */}
      <div className={styles.gridBg}></div>

      {/* background typography */}
      <div className={styles.bgText}>
        <span className={styles.bgWord}>SKILLS</span>
      </div>

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            <span>Technical Skills</span>
          </h2>
          <p>
            Technologies, tools, and concepts I work with across
            full-stack development, machine learning, and problem solving.
          </p>
        </div>

        {/* BUBBLES */}
        <SkillsBubble />
      </div>
    </section>
  );
};

export default Skills;

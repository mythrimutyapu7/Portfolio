import { useState } from 'react';
import styles from './SkillsBubble.module.css';

const centerSkill = 'SQL';

const innerSkills = [
  'React.js',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'FastAPI',
  'LangChain',
  'Machine Learning',
];

const outerSkills = [
  'Express.js',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'DSA',
  'REST APIs',
  'Postman',
  'Claude',
  'GitHub Copilot',
  'C',
  'C++',
  'Python',
  'Java',
];

const SkillsBubble = () => {
  const [active, setActive] = useState(null);

  const getScale = (id) =>
    active === null ? 1 : active === id ? 1.2 : 0.85;

  const getOpacity = (id) =>
    active === null || active === id ? 1 : 0.45;

  return (
    <div className={styles.circle}>
      {/* CENTER */}
      <div
        className={styles.bubble}
        style={{
          '--scale': getScale('center'),
          opacity: getOpacity('center'),
        }}
        onMouseEnter={() => setActive('center')}
        onMouseLeave={() => setActive(null)}
      >
        {centerSkill}
      </div>

      {/* INNER RING */}
      {innerSkills.map((skill, index) => (
        <div
          key={`inner-${index}`}
          className={`${styles.bubble} ${styles.inner}`}
          style={{
            '--i': index,
            '--count': innerSkills.length,
            '--scale': getScale(skill),
            opacity: getOpacity(skill),
          }}
          onMouseEnter={() => setActive(skill)}
          onMouseLeave={() => setActive(null)}
        >
          {skill}
        </div>
      ))}

      {/* OUTER RING */}
      {outerSkills.map((skill, index) => (
        <div
          key={`outer-${index}`}
          className={`${styles.bubble} ${styles.outer}`}
          style={{
            '--i': index,
            '--count': outerSkills.length,
            '--scale': getScale(skill),
            opacity: getOpacity(skill),
          }}
          onMouseEnter={() => setActive(skill)}
          onMouseLeave={() => setActive(null)}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsBubble;

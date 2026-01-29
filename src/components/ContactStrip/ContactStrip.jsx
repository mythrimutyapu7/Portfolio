import styles from './ContactStrip.module.css';

const ContactStrip = () => {
  return (
    <div className={styles.contactBar}>
      <div className={styles.container}>
        <a href="mailto:mutyapu.mythri@gmail.com">mutyapu.mythri@gmail.com</a>
        <a href="tel:+919652681840">+91 9652681840</a>
        <a href="https://www.linkedin.com/in/mythri-mutyapu-4705b4290/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/mythrimutyapu7" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://leetcode.com/u/mythrimutyapu/" target="_blank" rel="noreferrer">
          LeetCode
        </a>
      </div>
    </div>
  );
};

export default ContactStrip;

import styles from './Contact.module.css';
import useReveal from '../../hooks/useReveal';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import resumePdf from '../../assets/MYTHRI_RESUME.pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiDocumentText } from 'react-icons/hi';



const Contact = () => {
  useReveal();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wo6les2',      // ✅ your Service ID
        'template_2nuq95c',       // ❗ replace with your Template ID
        formRef.current,
        'crKeaUaOY_h7AP7cM'       // ❗ replace with your Public Key
      )
      .then(() => {
        alert('Message sent successfully 🚀');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong 😢');
      });
  };

  return (
    <section id="contact" className={`${styles.contact} reveal`}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2>
            Get in <span>Touch</span>
          </h2>

          <p className={styles.subtitle}>
            I’d love to hear from you.
          </p>

          <p className={styles.desc}>
            Whether you have an opportunity, a project idea, or just want to say hi,
            feel free to drop a message. I’m always open to meaningful conversations.
          </p>

          <div className={styles.details}>
            <p>📧 mutyapu.mythri@gmail.com</p>
            <p>📞 +91 96526 81840</p>
          </div>

          <div className={styles.socials}>
  <div className={styles.socials}>
  <a
    href="https://www.linkedin.com/in/mythri-mutyapu-4705b4290/"
    target="_blank"
    rel="noreferrer"
    data-tooltip="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/mythrimutyapu7"
    target="_blank"
    rel="noreferrer"
    data-tooltip="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://leetcode.com/u/mythrimutyapu/"
    target="_blank"
    rel="noreferrer"
    data-tooltip="LeetCode"
  >
    <SiLeetcode />
  </a>

  <a
    href={resumePdf}
    target="_blank"
    rel="noreferrer"
    data-tooltip="Resume"
  >
    <HiDocumentText />
  </a>
</div>

  




</div>

        </div>

        {/* RIGHT FORM */}
        <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.row}>
            <input type="text" name="from_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>

          <input type="email" name="reply_to" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;

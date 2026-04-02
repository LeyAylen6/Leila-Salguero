import styles from './footer.module.css';
import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const { t } = useTranslation('common');

  const navLinks = [
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.skills'), href: '#skills' },
    { label: t('navbar.work_experience'), href: '#experience' },
    { label: t('navbar.projects'), href: '#projects' },
    { label: t('navbar.certifications'), href: '#certifications' },
    { label: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <footer className={styles.footer}>
      <a href="#about" className={styles.backToTop} aria-label="Back to top">
        <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
      </a>

      <div className={styles.content}>
        <div className={styles.brand}>
          <h3 className={styles.name}>Leila Salguero</h3>
          <p className={styles.role}>Full Stack Developer</p>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/leilaaylensalguero/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/LeyAylen6"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:leilasalguero6@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className={styles.divider} />

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Leila Salguero. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;

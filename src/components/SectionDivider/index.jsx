import styles from './sectionDivider.module.css';

const SectionDivider = () => (
  <div className={styles.root} role="presentation" aria-hidden="true">
    <hr className={styles.line} />
  </div>
);

export default SectionDivider;
